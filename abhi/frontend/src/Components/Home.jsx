import React, { useState, useEffect } from "react";
import axios from "axios";
import CommonComponent2 from "../CommonComponent2";
import '../App.css'; // Ensure this is scoped properly to include only Home component styles

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [quitz, setQuitz] = useState({ category: "", level: "", language: "" });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    console.log("Fetching categories...");
    
    setLoading(true);
    axios.get("http://localhost:5000/api/categories")
      .then((res) => {
        setCategories(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  // Handle selection changes for category, level, and language
  const changeHandler = (e) => {
    setQuitz({ ...quitz, [e.target.name]: e.target.value });
  };

  // Submit selected category, level, and language to fetch questions
  const submit = () => {
    debugger;
    if (quitz.category && quitz.level !== "" && quitz.language !== "")  {
      setLoading(true);

      let apiUrl = "";
      switch (quitz.language) {
        case "telugu":
          apiUrl = `http://localhost:5000/api/telugu-questions?level=${quitz.level}&category=${quitz.category}`;
          break;
        case "hindi":
          apiUrl = `http://localhost:5000/api/hindi-questions?level=${quitz.level}&category=${quitz.category}`;
          break;
        case "english":
          apiUrl = `http://localhost:5000/api/questions?level=${quitz.level}&category=${quitz.category}`;
          break;
        default:
          alert("Invalid language selected.");
          setLoading(false);
          return;
      }

      axios
        .get(apiUrl)
        .then((res) => {
          setResults(res?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          setLoading(false);
        });
    } else {
      alert("Please select a category, level, and language.");
    }
  };

  // Find the selected category name
  const selectedCategory = categories.find(cat => cat.id === quitz.category)?.name || 'Unknown';

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <p>Loading...</p>
        </div>
      ) : results.length === 0 ? (
        <div className="home-content">
          <h1 className="home-header">Welcome to Scripture Genius</h1>

          <div className="select-field">
            <h3 className="select-label">Select Category:</h3>
            <select
              onChange={changeHandler}
              name="category"
              className="select-input"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="select-field">
            <h3 className="select-label">Select Difficulty:</h3>
            <select
              onChange={changeHandler}
              name="level"
              className="select-input"
            >
              <option value="">Select Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="select-field">
            <h3 className="select-label">Select Language:</h3>
            <select
              onChange={changeHandler}
              name="language"
              className="select-input"
            >
              <option value="">Select Language</option>
              <option value="telugu">Telugu</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
            
          <button
          
            className="submit-button" 
            onClick={submit}
            disabled={!quitz.category || !quitz.level || !quitz.language}
          >
            Submit
          </button>
        </div>
      ) : (
        <CommonComponent2 questions={results} title={selectedCategory} back={() => setResults([])} />
      )}
    </>
  );
};

export default Home;
