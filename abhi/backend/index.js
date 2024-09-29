const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

const port = process.env.PORT || 5000;

// Create a new Pool instance for PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Create the tables if they don't exist
async function createTables() {
  const queries = [
    `CREATE TABLE IF NOT EXISTS Categories (id SERIAL PRIMARY KEY, name TEXT NOT NULL);`,
    `CREATE TABLE IF NOT EXISTS Questions (id SERIAL PRIMARY KEY, question TEXT NOT NULL, options TEXT[] NOT NULL, correct_answer TEXT NOT NULL, level TEXT NOT NULL, categoryId TEXT NOT NULL);`,
    `CREATE TABLE IF NOT EXISTS TeluguQuestions (id SERIAL PRIMARY KEY, question TEXT NOT NULL, options TEXT[] NOT NULL, correct_answer TEXT NOT NULL, level TEXT NOT NULL, categoryId TEXT NOT NULL);`,
    `CREATE TABLE IF NOT EXISTS HindiQuestions (id SERIAL PRIMARY KEY, question TEXT NOT NULL, options TEXT[] NOT NULL, correct_answer TEXT NOT NULL, level TEXT NOT NULL, categoryId TEXT NOT NULL);`,
  ];
  try {
    for (const query of queries) await pool.query(query);
    console.log("Tables created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

async function createLoginTable() {
  const query = `
      CREATE TABLE IF NOT EXISTS login3 (
       rowId SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `;
  try {
    await pool.query(query);
    console.log("Table 'Login3' created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

createTables();
createLoginTable();

// API routes
app.post("/api/categories", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send("Category name is required.");

  try {
    const result = await pool.query(
      "INSERT INTO Categories (name) VALUES ($1) RETURNING *;",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/categories", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Categories;");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Server error.");
  }
});

app.put("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).send("Category name is required.");

  try {
    const result = await pool.query(
      "UPDATE Categories SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Category not found.");
    res
      .status(200)
      .json({
        message: "Category updated successfully.",
        updatedCategory: result.rows[0],
      });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).send("Server error.");
  }
});

app.delete("/api/categories/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM Categories WHERE id = $1 RETURNING *;",
      [id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Category not found.");
    res
      .status(200)
      .json({
        message: "Category deleted successfully.",
        deletedCategory: result.rows[0],
      });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/questions", async (req, res) => {
  const { level, category } = req.query;
  if (!level || !category)
    return res.status(400).send("Level and category are required.");

  try {
    const result = await pool.query(
      "SELECT * FROM Questions WHERE level = $1 AND categoryId = $2;",
      [level, category]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).send("Server error.");
  }
});

app.post("/api/questions", async (req, res) => {
  const { question, options, correct_answer, level, categoryId } = req.body;
  if (!question || !options || !correct_answer || !level || !categoryId)
    return res.status(400).send("All fields are required.");

  try {
    const result = await pool.query(
      "INSERT INTO Questions (question, options, correct_answer, level, categoryId) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [question, options, correct_answer, level, categoryId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).send("Server error.");
  }
});

app.put("/api/questions/:id", async (req, res) => {
  const { id } = req.params;
  const { question, options, correct_answer, level, categoryId } = req.body;
  if (!question || !options || !correct_answer || !level || !categoryId)
    return res.status(400).send("All fields are required.");

  try {
    const result = await pool.query(
      "UPDATE Questions SET question = $1, options = $2, correct_answer = $3, level = $4, categoryId = $5 WHERE id = $6 RETURNING *;",
      [question, options, correct_answer, level, categoryId, id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Question not found.");
    res
      .status(200)
      .json({
        message: "Question updated successfully.",
        updatedQuestion: result.rows[0],
      });
  } catch (error) {
    console.error("Error updating question:", error);
    res.status(500).send("Server error.");
  }
});

app.delete("/api/questions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM Questions WHERE id = $1 RETURNING *;",
      [id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Question not found.");
    res
      .status(200)
      .json({
        message: "Question deleted successfully.",
        deletedQuestion: result.rows[0],
      });
  } catch (error) {
    console.error("Error deleting question:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Questions;");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Server error.");
  }
});

// Get Telugu questions by level and category
app.get("/api/telugu-questions", async (req, res) => {
  const { level, category } = req.query;
  if (!level || !category)
    return res.status(400).send("Level and category are required.");

  try {
    const result = await pool.query(
      "SELECT * FROM TeluguQuestions WHERE level = $1 AND categoryId = $2;",
      [level, category]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching Telugu questions:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/telugu-questions/getAll", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM TeluguQuestions;");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching Telugu questions:", error);
    res.status(500).send("Server error.");
  }
});

// Add a new Telugu question
app.post("/api/telugu-questions", async (req, res) => {
  const { question, options, correct_answer, level, categoryId } = req.body;
  if (!question || !options || !correct_answer || !level || !categoryId)
    return res.status(400).send("All fields are required.");

  try {
    const result = await pool.query(
      "INSERT INTO TeluguQuestions (question, options, correct_answer, level, categoryId) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [question, options, correct_answer, level, categoryId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating Telugu question:", error);
    res.status(500).send("Server error.");
  }
});

// Update a Telugu question
app.put("/api/telugu-questions/:id", async (req, res) => {
  const { id } = req.params;
  const { question, options, correct_answer, level, categoryId } = req.body;
  if (!question || !options || !correct_answer || !level || !categoryId)
    return res.status(400).send("All fields are required.");

  try {
    const result = await pool.query(
      "UPDATE TeluguQuestions SET question = $1, options = $2, correct_answer = $3, level = $4, categoryId = $5 WHERE id = $6 RETURNING *;",
      [question, options, correct_answer, level, categoryId, id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Telugu question not found.");
    res
      .status(200)
      .json({
        message: "Telugu question updated successfully.",
        updatedQuestion: result.rows[0],
      });
  } catch (error) {
    console.error("Error updating Telugu question:", error);
    res.status(500).send("Server error.");
  }
});

// Delete a Telugu question
app.delete("/api/telugu-questions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM TeluguQuestions WHERE id = $1 RETURNING *;",
      [id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Telugu question not found.");
    res
      .status(200)
      .json({
        message: "Telugu question deleted successfully.",
        deletedQuestion: result.rows[0],
      });
  } catch (error) {
    console.error("Error deleting Telugu question:", error);
    res.status(500).send("Server error.");
  }
});

// Get Hindi questions by level and category
app.get("/api/hindi-questions", async (req, res) => {
  const { level, category } = req.query;
  if (!level || !category)
    return res.status(400).send("Level and category are required.");

  try {
    const result = await pool.query(
      "SELECT * FROM HindiQuestions WHERE level = $1 AND categoryId = $2;",
      [level, category]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching Hindi questions:", error);
    res.status(500).send("Server error.");
  }
});

// Add a new Hindi question
app.post("/api/hindi-questions", async (req, res) => {
  const { question, options, correct_answer, level, categoryId } = req.body;
  if (!question || !options || !correct_answer || !level || !categoryId)
    return res.status(400).send("All fields are required.");

  try {
    const result = await pool.query(
      "INSERT INTO HindiQuestions (question, options, correct_answer, level, categoryId) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [question, options, correct_answer, level, categoryId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating Hindi question:", error);
    res.status(500).send("Server error.");
  }
});

// Update a Hindi question
app.put("/api/hindi-questions/:id", async (req, res) => {
  const { id } = req.params;
  const { question, options, correct_answer, level, categoryId } = req.body;
  if (!question || !options || !correct_answer || !level || !categoryId)
    return res.status(400).send("All fields are required.");

  try {
    const result = await pool.query(
      "UPDATE HindiQuestions SET question = $1, options = $2, correct_answer = $3, level = $4, categoryId = $5 WHERE id = $6 RETURNING *;",
      [question, options, correct_answer, level, categoryId, id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Hindi question not found.");
    res
      .status(200)
      .json({
        message: "Hindi question updated successfully.",
        updatedQuestion: result.rows[0],
      });
  } catch (error) {
    console.error("Error updating Hindi question:", error);
    res.status(500).send("Server error.");
  }
});

// Delete a Hindi question
app.delete("/api/hindi-questions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM HindiQuestions WHERE id = $1 RETURNING *;",
      [id]
    );
    if (result.rowCount === 0)
      return res.status(404).send("Hindi question not found.");
    res
      .status(200)
      .json({
        message: "Hindi question deleted successfully.",
        deletedQuestion: result.rows[0],
      });
  } catch (error) {
    console.error("Error deleting Hindi question:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/users", async (req, res) => {
  const { username, password } = req.query;
  const query = `
      SELECT * FROM login3 where username = $1 and password = $2;
    `;
  try {
    const result = await pool.query(query, [username, password]);
    console.log(result);
    const users = result.rows[0];

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server error.");
  }
});

app.get("/api/users/getAll", async (req, res) => {
  try {
    const result = await pool.query(' SELECT * FROM login3;');
    console.log(result);
   
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server error.");
  }
});

app.post("/api/users", async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).send("Username, email, and password are required.");
  }

  const query1 = ` SELECT * FROM login3 where username = $1 and password = $2; `;
  const result = await pool.query(query1, [username, password]);

  if (result.rows.length > 1) {
    res.status(201).json("Already User exist");
  } else {
    // Insert new user into the database
    const query = `
      INSERT INTO login3 (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    try {
      const result = await pool.query(query, [username, email, password]);
      const newUser = result.rows[0]; // Get the inserted user
      res.status(201).json(newUser); // Return the new user details
    } catch (error) {
      console.error("Error signing up:", error);
      res.status(500).send("Server error.");
    }
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
