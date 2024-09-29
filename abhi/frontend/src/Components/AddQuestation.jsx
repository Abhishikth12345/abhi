import axios from "axios";
import React from "react";

const englishQuestations = [
//   {
//     id: 1,
//     question: "What did God create on the first day of creation?",
//     options: ["Light", "Sky", "Land", "Animals"],
//     correct_answer: "Light",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 2,
//     question: "Who was the first man created by God?",
//     options: ["Noah", "Abraham", "Adam", "Moses"],
//     correct_answer: "Adam",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 3,
//     question: "What was the name of the garden where Adam and Eve lived?",
//     options: ["Eden", "Gethsemane", "Jericho", "Bethlehem"],
//     correct_answer: "Eden",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 4,
//     question: "Who was swallowed by a great fish?",
//     options: ["Jonah", "Daniel", "Elijah", "David"],
//     correct_answer: "Jonah",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 5,
//     question: "Which king built the first temple in Jerusalem?",
//     options: ["David", "Solomon", "Saul", "Hezekiah"],
//     correct_answer: "Solomon",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 6,
//     question: "What did Jesus turn water into at the wedding in Cana?",
//     options: ["Wine", "Oil", "Juice", "Vinegar"],
//     correct_answer: "Wine",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 7,
//     question: "Who betrayed Jesus for thirty pieces of silver?",
//     options: ["Peter", "Judas Iscariot", "John", "Matthew"],
//     correct_answer: "Judas Iscariot",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 8,
//     question: "Which apostle doubted Jesus' resurrection until he saw Him?",
//     options: ["James", "Peter", "Thomas", "Andrew"],
//     correct_answer: "Thomas",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 9,
//     question: "What did God send to guide the Israelites at night?",
//     options: ["A cloud", "A star", "Fire", "An angel"],
//     correct_answer: "Fire",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 10,
//     question: "Who wrote the Book of Psalms?",
//     options: ["Moses", "David", "Solomon", "Isaiah"],
//     correct_answer: "David",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 12,
//     question: "What is the first book of the Bible?",
//     options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
//     correct_answer: "Genesis",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 13,
//     question: "Which fruit did Adam and Eve eat in the Garden of Eden?",
//     options: ["Apple", "Banana", "Fig", "Grape"],
//     correct_answer: "Apple",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 14,
//     question: "What did Noah build to survive the flood?",
//     options: ["A temple", "A tower", "An ark", "A house"],
//     correct_answer: "An ark",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 15,
//     question: "What did David use to defeat Goliath?",
//     options: ["A sword", "A slingshot", "A spear", "A shield"],
//     correct_answer: "A slingshot",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 16,
//     question: "How many days did God take to create the world?",
//     options: ["3 days", "5 days", "6 days", "7 days"],
//     correct_answer: "6 days",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 17,
//     question: "What was the first plague of Egypt?",
//     options: ["Water turned to blood", "Frogs", "Locusts", "Darkness"],
//     correct_answer: "Water turned to blood",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 18,
//     question: "Who was the first man created by God?",
//     options: ["Abraham", "Adam", "Moses", "Noah"],
//     correct_answer: "Adam",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 19,
//     question: "What was the name of the garden where Adam and Eve lived?",
//     options: ["Eden", "Canaan", "Galilee", "Bethlehem"],
//     correct_answer: "Eden",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 20,
//     question: "Who led the Israelites out of Egypt?",
//     options: ["Joshua", "Moses", "David", "Joseph"],
//     correct_answer: "Moses",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 21,
//     question: "What did Jesus turn water into at a wedding?",
//     options: ["Milk", "Juice", "Wine", "Honey"],
//     correct_answer: "Wine",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 22,
//     question: "Who built the Temple in Jerusalem?",
//     options: ["David", "Moses", "Solomon", "Abraham"],
//     correct_answer: "Solomon",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 23,
//     question: "Who built the Temple in Jerusalem?",
//     options: ["David", "Moses", "Solomon", "Abraham"],
//     correct_answer: "Solomon",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 24,
//     question: "Who was the first king of Israel?",
//     options: ["David", "Saul", "Solomon", "Samuel"],
//     correct_answer: "Saul",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 25,
//     question: "How many people were on Noah's ark?",
//     options: ["4", "6", "8", "10"],
//     correct_answer: "8",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 26,
//     question: "How many days did Jesus fast in the wilderness?",
//     options: ["20 days", "30 days", "40 days", "50 days"],
//     correct_answer: "40 days",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 27,
//     question: "What is the last book of the New Testament?",
//     options: ["Revelation", "Romans", "Acts", "Hebrews"],
//     correct_answer: "Revelation",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 28,
//     question: "Who was thrown into a den of lions?",
//     options: ["Daniel", "David", "Elijah", "Joseph"],
//     correct_answer: "Daniel",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 29,
//     question:
//       "Which Old Testament prophet was taken up to heaven in a chariot of fire?",
//     options: ["Isaiah", "Ezekiel", "Elijah", "Jeremiah"],
//     correct_answer: "Elijah",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 30,
//     question: "Who was the high priest when Jesus was crucified?",
//     options: ["Annas", "Caiaphas", "Pilate", "Herod"],
//     correct_answer: "Caiaphas",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 31,
//     question: "What was the name of Abraham's second wife?",
//     options: ["Sarah", "Keturah", "Rachel", "Rebekah"],
//     correct_answer: "Keturah",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 32,
//     question: "In what city were Jesus' followers first called Christians?",
//     options: ["Jerusalem", "Antioch", "Nazareth", "Corinth"],
//     correct_answer: "Antioch",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 33,
//     question: "Who was the Roman governor who sentenced Jesus to death?",
//     options: ["Caesar", "Pilate", "Herod", "Felix"],
//     correct_answer: "Pilate",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 34,
//     question: "What did God create on the seventh day?",
//     options: ["Animals", "People", "Nothing", "Plants"],
//     correct_answer: "Nothing",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 35,
//     question: "Who was the first woman?",
//     options: ["Mary", "Sarah", "Eve", "Ruth"],
//     correct_answer: "Eve",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 36,
//     question: "Who was thrown into a fiery furnace but was not burned?",
//     options: ["Daniel", "Shadrach, Meshach, and Abednego", "Elijah", "Moses"],
//     correct_answer: "Shadrach, Meshach, and Abednego",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 37,
//     question: "What was the first thing God created?",
//     options: ["Animals", "Water", "Light", "Plants"],
//     correct_answer: "Light",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 38,
//     question: "How many brothers did Joseph have?",
//     options: ["7", "10", "11", "12"],
//     correct_answer: "11",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 39,
//     question: "Who was the strongest man in the Bible?",
//     options: ["David", "Goliath", "Samson", "Absalom"],
//     correct_answer: "Samson",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 40,
//     question: "What is the name of the sea that Moses parted?",
//     options: [
//       "The Red Sea",
//       "The Dead Sea",
//       "The Jordan River",
//       "The Mediterranean Sea",
//     ],
//     correct_answer: "The Red Sea",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 41,
//     question: "Who was David’s best friend?",
//     options: ["Solomon", "Jonathan", "Abner", "Saul"],
//     correct_answer: "Jonathan",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 42,
//     question: "How many days and nights did it rain when Noah was on the ark?",
//     options: ["7", "20", "40", "60"],
//     correct_answer: "40",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 43,
//     question: "What did God give Moses on Mount Sinai?",
//     options: ["The Ten Commandments", "The Ark", "Manna", "A staff"],
//     correct_answer: "The Ten Commandments",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 44,
//     question: "What food did God provide the Israelites in the desert?",
//     options: ["Manna", "Bread", "Meat", "Fish"],
//     correct_answer: "Manna",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 45,
//     question: "Who was the mother of John the Baptist?",
//     options: ["Elizabeth", "Mary", "Sarah", "Rachel"],
//     correct_answer: "Elizabeth",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 46,
//     question: "What kind of animal was used by Balaam when it spoke to him?",
//     options: ["Horse", "Camel", "Donkey", "Ox"],
//     correct_answer: "Donkey",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 47,
//     question: "Who betrayed Jesus for thirty pieces of silver?",
//     options: ["Peter", "Judas", "John", "Matthew"],
//     correct_answer: "Judas",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 48,
//     question: "How many disciples did Jesus have?",
//     options: ["7", "10", "12", "15"],
//     correct_answer: "12",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 49,
//     question: "What did God promise Abraham?",
//     options: ["Land and descendants", "Riches", "Power", "Victory"],
//     correct_answer: "Land and descendants",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 50,
//     question: "Who led the Israelites into the Promised Land?",
//     options: ["Moses", "Aaron", "Joshua", "Joseph"],
//     correct_answer: "Joshua",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 51,
//     question: "Who killed Goliath?",
//     options: ["Saul", "David", "Solomon", "Samuel"],
//     correct_answer: "David",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 52,
//     question: "Who was the first woman?",
//     options: ["Mary", "Sarah", "Eve", "Ruth"],
//     correct_answer: "Eve",
//     level: "easy",
//     categoryId: "1",
//   },
//   {
//     id: 53,
//     question: "Who was the first king of Israel?",
//     options: ["David", "Saul", "Solomon", "Samuel"],
//     correct_answer: "Saul",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 54,
//     question: "How many days did Jesus fast in the wilderness?",
//     options: ["20 days", "30 days", "40 days", "50 days"],
//     correct_answer: "40 days",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 55,
//     question: "Who led the Israelites into the Promised Land?",
//     options: ["Moses", "Aaron", "Joshua", "Joseph"],
//     correct_answer: "Joshua",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 56,
//     question: "How many books are in the Bible?",
//     options: ["39", "50", "66", "72"],
//     correct_answer: "66",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 57,
//     question: "Who was the disciple that walked on water with Jesus?",
//     options: ["Peter", "John", "James", "Andrew"],
//     correct_answer: "Peter",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 58,
//     question: "What was the name of the apostle who betrayed Jesus?",
//     options: ["Peter", "John", "James", "Judas"],
//     correct_answer: "Judas",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 59,
//     question:
//       "Which Old Testament prophet was taken up to heaven in a chariot of fire?",
//     options: ["Isaiah", "Ezekiel", "Elijah", "Jeremiah"],
//     correct_answer: "Elijah",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 60,
//     question: "How many years did the Israelites wander in the wilderness?",
//     options: ["10 years", "20 years", "40 years", "50 years"],
//     correct_answer: "40 years",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 61,
//     question:
//       "What was the name of the mountain where Elijah challenged the prophets of Baal?",
//     options: ["Mount Sinai", "Mount Zion", "Mount Carmel", "Mount Hermon"],
//     correct_answer: "Mount Carmel",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 62,
//     question:
//       "What language was most of the Old Testament originally written in?",
//     options: ["Greek", "Latin", "Aramaic", "Hebrew"],
//     correct_answer: "Hebrew",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 63,
//     question: "Who was the father of King Solomon?",
//     options: ["Saul", "David", "Samuel", "Nathan"],
//     correct_answer: "David",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 64,
//     question: "Which of Jacob's sons was sold into slavery by his brothers?",
//     options: ["Reuben", "Joseph", "Levi", "Benjamin"],
//     correct_answer: "Joseph",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 65,
//     question:
//       "Which apostle was known for doubting Jesus' resurrection until he saw him?",
//     options: ["Peter", "Thomas", "James", "John"],
//     correct_answer: "Thomas",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 66,
//     question: "What is the longest chapter in the Bible?",
//     options: ["Psalm 119", "Isaiah 53", "Matthew 28", "Exodus 20"],
//     correct_answer: "Psalm 119",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 67,
//     question: "In the Bible, who was the wife of Ahab, the king of Israel?",
//     options: ["Deborah", "Jezebel", "Esther", "Ruth"],
//     correct_answer: "Jezebel",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 68,
//     question:
//       "In the book of Acts, who was struck dead for lying to the Holy Spirit?",
//     options: [
//       "Ananias and Sapphira",
//       "Simon the Sorcerer",
//       "Barnabas",
//       "Silas",
//     ],
//     correct_answer: "Ananias and Sapphira",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 69,
//     question: "What is the last word of the Bible?",
//     options: ["Amen", "Jesus", "Faith", "Grace"],
//     correct_answer: "Amen",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 70,
//     question: "In Revelation, what is the number of the beast?",
//     options: ["333", "777", "666", "888"],
//     correct_answer: "666",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 71,
//     question: "Which apostle was exiled to the island of Patmos?",
//     options: ["Peter", "Paul", "John", "James"],
//     correct_answer: "John",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 72,
//     question: "How many times did Peter deny Jesus before the rooster crowed?",
//     options: ["2 times", "3 times", "5 times", "7 times"],
//     correct_answer: "3 times",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 73,
//     question:
//       "Who was the queen who saved the Jewish people from destruction in Persia?",
//     options: ["Ruth", "Esther", "Deborah", "Mary"],
//     correct_answer: "Esther",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 74,
//     question: "Which of the twelve tribes of Israel served as priests?",
//     options: ["Judah", "Levi", "Benjamin", "Naphtali"],
//     correct_answer: "Levi",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 75,
//     question: "What was the name of the place where Jesus was crucified?",
//     options: ["Bethlehem", "Calvary", "Nazareth", "Jericho"],
//     correct_answer: "Calvary",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 76,
//     question: "Who was the tax collector that climbed a tree to see Jesus?",
//     options: ["Matthew", "Zacchaeus", "Nicodemus", "Simon"],
//     correct_answer: "Zacchaeus",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 77,
//     question: "What was the name of the garden where Jesus was arrested?",
//     options: [
//       "Garden of Eden",
//       "Garden of Gethsemane",
//       "Garden of Olives",
//       "Garden of Peace",
//     ],
//     correct_answer: "Garden of Gethsemane",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 78,
//     question: "What type of wood was Noah's Ark made from?",
//     options: ["Oak", "Cedar", "Gopher", "Pine"],
//     correct_answer: "Gopher",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 79,
//     question: "Who was the first martyr in the New Testament?",
//     options: ["Stephen", "Paul", "Peter", "John"],
//     correct_answer: "Stephen",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 80,
//     question: "Which apostle is known for preaching on the day of Pentecost?",
//     options: ["James", "John", "Peter", "Paul"],
//     correct_answer: "Peter",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 81,
//     question:
//       "How many times did Joshua and the Israelites march around Jericho before it fell?",
//     options: ["3 times", "5 times", "7 times", "10 times"],
//     correct_answer: "7 times",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 82,
//     question:
//       "Who was the prophet that confronted King David about his sin with Bathsheba?",
//     options: ["Nathan", "Samuel", "Elijah", "Isaiah"],
//     correct_answer: "Nathan",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 83,
//     question:
//       "What was the name of the first king of Judah after the kingdom split?",
//     options: ["Saul", "Rehoboam", "Solomon", "Jeroboam"],
//     correct_answer: "Rehoboam",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 84,
//     question: "What is the second book of the Bible?",
//     options: ["Leviticus", "Numbers", "Genesis", "Exodus"],
//     correct_answer: "Exodus",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 85,
//     question: "Who wrote the majority of the New Testament letters?",
//     options: ["Peter", "Paul", "John", "Luke"],
//     correct_answer: "Paul",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 86,
//     question: "How many times did God call out to the boy Samuel in the night?",
//     options: ["2", "3", "4", "5"],
//     correct_answer: "3",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 87,
//     question:
//       "What did Joseph’s brothers do to show their father that Joseph had been killed?",
//     options: [
//       "Sold him as a slave",
//       "Covered his coat in animal blood",
//       "Threw him into a well",
//       "Gave him to a caravan",
//     ],
//     correct_answer: "Covered his coat in animal blood",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 88,
//     question: "What was the name of Moses' sister?",
//     options: ["Miriam", "Rachel", "Leah", "Deborah"],
//     correct_answer: "Miriam",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 89,
//     question: "Who succeeded Moses as the leader of the Israelites?",
//     options: ["Aaron", "Caleb", "Joshua", "David"],
//     correct_answer: "Joshua",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 90,
//     question: "What did Jacob's name get changed to after wrestling with God?",
//     options: ["Joseph", "Israel", "Benjamin", "David"],
//     correct_answer: "Israel",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 91,
//     question: "What were the names of Adam and Eve's first two sons?",
//     options: [
//       "Cain and Abel",
//       "Jacob and Esau",
//       "Isaac and Ishmael",
//       "Joseph and Benjamin",
//     ],
//     correct_answer: "Cain and Abel",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 92,
//     question: "Who was the king of Israel known for his wisdom?",
//     options: ["David", "Saul", "Solomon", "Josiah"],
//     correct_answer: "Solomon",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 93,
//     question: "What did King Solomon ask God for in his dream?",
//     options: ["Wealth", "Power", "Wisdom", "Long life"],
//     correct_answer: "Wisdom",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 94,
//     question: "Who helped Jesus carry His cross?",
//     options: ["Simon of Cyrene", "John the Baptist", "Peter", "Barabbas"],
//     correct_answer: "Simon of Cyrene",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 95,
//     question:
//       "Which two cities were destroyed by fire and brimstone due to their wickedness?",
//     options: [
//       "Sodom and Gomorrah",
//       "Jericho and Ai",
//       "Tyre and Sidon",
//       "Nineveh and Babylon",
//     ],
//     correct_answer: "Sodom and Gomorrah",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 96,
//     question:
//       "What were the Israelites instructed to place on their doors during the Passover?",
//     options: ["A cross", "Blood of a lamb", "A candle", "A branch of hyssop"],
//     correct_answer: "Blood of a lamb",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 97,
//     question: "In which river was Jesus baptized?",
//     options: ["Nile", "Euphrates", "Jordan", "Tigris"],
//     correct_answer: "Jordan",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 98,
//     question: "Who was the prophet that anointed David as king?",
//     options: ["Elijah", "Elisha", "Samuel", "Nathan"],
//     correct_answer: "Samuel",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 99,
//     question:
//       "Which of Jesus’ disciples was a tax collector before following him?",
//     options: ["Peter", "Matthew", "Andrew", "John"],
//     correct_answer: "Matthew",
//     level: "hard",
//     categoryId: "1",
//   },
//   {
//     id: 100,
//     question:
//       "What was the name of the angel who appeared to Mary to announce the birth of Jesus?",
//     options: ["Michael", "Gabriel", "Raphael", "Uriel"],
//     correct_answer: "Gabriel",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 101,
//     question:
//       "Which book of the Bible tells the story of the creation of the world?",
//     options: ["Exodus", "Genesis", "Leviticus", "Numbers"],
//     correct_answer: "Genesis",
//     level: "medium",
//     categoryId: "1",
//   },
//   {
//     id: 102,
//     question: "Who wrote the majority of the Psalms?",
//     options: ["Solomon", "David", "Moses", "Asaph"],
//     correct_answer: "David",
//     level: "medium",
//     categoryId: "1",
//   },

  {
    question: "How many years jesus lived on this earth?",
    options: ["30", "35", "33", "32"],
    correct_answer: "33",
    level: "medium",
    categoryId: "1"
  }
];

// const teluguQuestations = [
//     {
//       "id": 1,
//       "question": "ఆదికాండములో సృష్టి యొక్క మొదటి రోజు దేవుడు ఏమి సృష్టించాడు?",
//       "options": [
//         "వాయువు",
//         "చుక్కలు",
//         "ప్రకాశం",
//         "భూమి"
//       ],
//       "correct_answer": "ప్రకాశం",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 2,
//       "question": "దేవుడు మోషేకు పది ఆజ్ఞలను ఎక్కడ ఇచ్చాడు?",
//       "options": [
//         "సీనా పర్వతం",
//         "యోర్డాన్ నది",
//         "గిల్బో పర్వతం",
//         "ఎఫ్రయిమ్ పర్వతం"
//       ],
//       "correct_answer": "సీనా పర్వతం",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 3,
//       "question": "దావీదు ఏ ప్రాణిని సంహరించాడు?",
//       "options": [
//         "పులి",
//         "సింహం",
//         "గోమడిఏనుగు",
//         "గాడిద"
//       ],
//       "correct_answer": "సింహం",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 4,
//       "question": "యేసు ఏ ఊరిలో పుట్టాడు?",
//       "options": [
//         "నజరేతు",
//         "బేత్లేహెము",
//         "కఫర్నహూం",
//         "జెరూసలేము"
//       ],
//       "correct_answer": "బేత్లేహెము",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 5,
//       "question": "నలుగురు శిష్యుల పేర్లలో ఒకరు ఎవరు?",
//       "options": [
//         "యోహాను",
//         "యిర్మియా",
//         "దానియేలు",
//         "యేసేయా"
//       ],
//       "correct_answer": "యోహాను",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 6,
//       "question": "యేసు నీటిని ఏ ద్రవ్యంలోకి మార్చాడు?",
//       "options": [
//         "తేనె",
//         "ద్రాక్షారసం",
//         "వెన్న",
//         "ద్రాక్షారకం"
//       ],
//       "correct_answer": "ద్రాక్షారకం",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 7,
//       "question": "అయితే యేసు పాపిష్టులను ఏద్రోస్తాడా?",
//       "options": [
//         "అవును",
//         "కావచ్చు",
//         "కాదు",
//         "ఏమి తెలియదు"
//       ],
//       "correct_answer": "కాదు",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 8,
//       "question": "యేసు మృతులలో ఎవరు మొదటగా లేచారు?",
//       "options": [
//         "లాజరు",
//         "యోహాను",
//         "పౌలు",
//         "పేతురు"
//       ],
//       "correct_answer": "లాజరు",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 9,
//       "question": "యేసు తన చివరి విందును ఎవరి తో చేయబోయాడు?",
//       "options": [
//         "పౌలు",
//         "దావీదు",
//         "తొమ్మిదిమంది శిష్యులు",
//         "పన్నెండిమంది శిష్యులు"
//       ],
//       "correct_answer": "పన్నెండిమంది శిష్యులు",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 10,
//       "question": "పురాతన నిబంధనలో ఉన్న అతి పొడవైన గ్రంథం ఏది?",
//       "options": [
//         "సామెతలు",
//         "దానియేలు",
//         "కీర్తనలు",
//         "యోబు"
//       ],
//       "correct_answer": "కీర్తనలు",
//       "level": "easy",
//       "categoryId": "1"
//     },
//     {
//       "id": 11,
//       "question": "మానవ శరీరంలో అతిపెద్ద అవయవం ఏమిటి?",
//       "options": [
//         "హృదయం",
//         "ఉసిరి",
//         "కాలేయం",
//         "చర్మం"
//       ],
//       "correct_answer": "చర్మం",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 12,
//       "question": "రక్తంలో ఆక్సిజన్‌ను తీసుకునే కణాలు ఏమిటి?",
//       "options": [
//         "నలుపు రక్త కణాలు",
//         "తెల్ల రక్త కణాలు",
//         "ఎరుపు రక్త కణాలు",
//         "ప్లేట్లెట్స్"
//       ],
//       "correct_answer": "ఎరుపు రక్త కణాలు",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 13,
//       "question": "శరీరంలో రక్తాన్ని శుద్ధి చేసే అవయవం ఏమిటి?",
//       "options": [
//         "పేగులు",
//         "కాలేయం",
//         "కిడ్నీ",
//         "ఒకదాని"
//       ],
//       "correct_answer": "కిడ్నీ",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 14,
//       "question": "క్రింది వాటిలో ఏది జీర్ణక్రియలో పాల్గొంటుంది?",
//       "options": [
//         "కాలేయం",
//         "ఫెఫర్లు",
//         "చర్మం",
//         "కళ్లు"
//       ],
//       "correct_answer": "కాలేయం",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 15,
//       "question": "శరీరంలో గ్లూకోజ్ స్థాయిలను నియంత్రించే హార్మోన్ ఏమిటి?",
//       "options": [
//         "ఇన్సులిన్",
//         "టెస్టోస్టెరోన్",
//         "యాస్టోజెన్",
//         "ప్రొజెస్టెరోన్"
//       ],
//       "correct_answer": "ఇన్సులిన్",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 16,
//       "question": "శరీరంలో ఎంత శాతం నీరు ఉంటుంది?",
//       "options": [
//         "60%",
//         "50%",
//         "70%",
//         "80%"
//       ],
//       "correct_answer": "60%",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 17,
//       "question": "ప్రత్యక్షమైన కాంతిని కనిపెట్టే శరీర భాగం ఏమిటి?",
//       "options": [
//         "కళ్లు",
//         "చర్మం",
//         "నుదిటి",
//         "చేయి"
//       ],
//       "correct_answer": "కళ్లు",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 18,
//       "question": "మన శరీరంలో గుండె ఎన్ని గదులు కలిగి ఉంది?",
//       "options": [
//         "2",
//         "4",
//         "3",
//         "5"
//       ],
//       "correct_answer": "4",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 19,
//       "question": "రక్తం ఆక్సిజన్ తీసుకెళ్లేందుకు ఏ కణాలను ఉపయోగిస్తుంది?",
//       "options": [
//         "ఎరుపు రక్త కణాలు",
//         "తెల్ల రక్త కణాలు",
//         "ప్లేట్లెట్స్",
//         "నలుపు రక్త కణాలు"
//       ],
//       "correct_answer": "ఎరుపు రక్త కణాలు",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 20,
//       "question": "మన శరీరంలో ఎముకల్ని కలిపే కండరాలు ఏవంటే?",
//       "options": [
//         "తీగలు",
//         "నాడీలు",
//         "జీర్ణక్రియ",
//         "స్నాయువులు"
//       ],
//       "correct_answer": "స్నాయువులు",
//       "level": "easy",
//       "categoryId": "2"
//     },
//     {
//       "id": 21,
//       "question": "భూమికి అతిచెరువైన గ్రహం ఏది?",
//       "options": [
//         "శుక్రుడు",
//         "మంగళం",
//         "బుధుడు",
//         "బృహస్పతి"
//       ],
//       "correct_answer": "శుక్రుడు",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 22,
//       "question": "మానవుడి కాలు మోపిన మొదటి గ్రహం ఏది?",
//       "options": [
//         "భూమి",
//         "చంద్రుడు",
//         "మంగళం",
//         "శుక్రుడు"
//       ],
//       "correct_answer": "చంద్రుడు",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 23,
//       "question": "సౌర వ్యవస్థలో అతి పెద్ద గ్రహం ఏది?",
//       "options": [
//         "బృహస్పతి",
//         "శని",
//         "భూమి",
//         "శుక్రుడు"
//       ],
//       "correct_answer": "బృహస్పతి",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 24,
//       "question": "సూర్యుడు ఏ గ్యాస్‌తో ప్రధానంగా తయారవుతాడు?",
//       "options": [
//         "హైడ్రోజన్",
//         "హీలియం",
//         "నైట్రోజన్",
//         "ఆక్సిజన్"
//       ],
//       "correct_answer": "హైడ్రోజన్",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 25,
//       "question": "సౌర వ్యవస్థలో సూర్యునికి అత్యంత దగ్గరగా ఉన్న గ్రహం ఏది?",
//       "options": [
//         "మంగళం",
//         "బుధుడు",
//         "శని",
//         "శుక్రుడు"
//       ],
//       "correct_answer": "బుధుడు",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 26,
//       "question": "చంద్రుడి ఉపరితలంపై ఎక్కువగా ఏ పదార్థం ఉంటుంది?",
//       "options": [
//         "ఐరన్",
//         "రాతి",
//         "నీరు",
//         "వేడి గ్యాస్"
//       ],
//       "correct_answer": "రాతి",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 27,
//       "question": "సూర్యుని చుట్టూ భూమి తిరగడానికి ఎన్ని రోజులు పడతాయి?",
//       "options": [
//         "24 గంటలు",
//         "365 రోజులు",
//         "30 రోజులు",
//         "12 నెలలు"
//       ],
//       "correct_answer": "365 రోజులు",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 28,
//       "question": "మిల్కీ వే గెలాక్సీకి నమ్మకం ప్రకారం ఏదని భావిస్తారు?",
//       "options": [
//         "గమనికా జాబితా",
//         "ఆకాశగంగ",
//         "విశ్వం",
//         "గ్రహం"
//       ],
//       "correct_answer": "ఆకాశగంగ",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 29,
//       "question": "భూమి సుమారు ఎంత శాతం నీటితో కప్పబడి ఉంటుంది?",
//       "options": [
//         "70%",
//         "50%",
//         "30%",
//         "10%"
//       ],
//       "correct_answer": "70%",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 30,
//       "question": "సూర్యుడికి వెలుపల భూగోళానికి వెలుతురు ఎలా వస్తుంది?",
//       "options": [
//         "చంద్రుని ప్రతిబింబం",
//         "గ్రహాల కాంతి",
//         "గెలాక్సీ కాంతి",
//         "సూర్యుని కాంతి"
//       ],
//       "correct_answer": "సూర్యుని కాంతి",
//       "level": "easy",
//       "categoryId": "3"
//     },
//     {
//       "id": 31,
//       "question": "యేసు జననం గురించి ముందుగా ఏ ప్రవక్త ప్రకటించాడు?",
//       "options": [
//         "యిర్మియా",
//         "యెషయా",
//         "దానియేలు",
//         "ఎజికియేలు"
//       ],
//       "correct_answer": "యెషయా",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 32,
//       "question": "యోహాను బాప్తిస్మమిచ్చిన నది ఏది?",
//       "options": [
//         "యోర్డాన్ నది",
//         "నీలు నది",
//         "టిగ్రిస్ నది",
//         "యూఫ్రేటీస్ నది"
//       ],
//       "correct_answer": "యోర్డాన్ నది",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 33,
//       "question": "పౌలు తన మొదటి సువార్తను ఎక్కడ ప్రకటించాడు?",
//       "options": [
//         "కొరింథు",
//         "రోమ్",
//         "యూదయా",
//         "అథెన్స్"
//       ],
//       "correct_answer": "యూదయా",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 34,
//       "question": "యేసు శిష్యులకు ఏ పండుగ సమయంలో తన చివరి విందు చేశాడు?",
//       "options": [
//         "పస్కా పండుగ",
//         "హనుక్కా పండుగ",
//         "పంతెకోస్తు",
//         "సుక్కోత్ పండుగ"
//       ],
//       "correct_answer": "పస్కా పండుగ",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 35,
//       "question": "దావీదు రాజు ఏ పెద్ద శత్రువును సంహరించాడు?",
//       "options": [
//         "గోలియాతు",
//         "సౌలు",
//         "అబ్షలోము",
//         "అహాబు"
//       ],
//       "correct_answer": "గోలియాతు",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 36,
//       "question": "యెరూషలేము నగరంపై ప్రభువుయొక్క శోధనలు ఏ పుస్తకంలో వివరించబడ్డాయి?",
//       "options": [
//         "యిర్మియా",
//         "దానియేలు",
//         "లూకా",
//         "యెహెజ్కేలు"
//       ],
//       "correct_answer": "యిర్మియా",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 37,
//       "question": " దానియేలు ఏ రాజుకు తన కలల యొక్క అర్థం తెలిపాడు?",
//       "options": [
//         "నెబుకద్నజరు",
//         "అహసువేరు",
//         "సౌలు",
//         "హీరోదు"
//       ],
//       "correct_answer": "నెబుకద్నజరు",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 38,
//       "question": "యేసు ఏ ప్రాంతంలో ప్రథమ బోధనలు చేశాడు?",
//       "options": [
//         "గలిలీ",
//         "సమరియా",
//         "యూదయా",
//         "నజరేతు"
//       ],
//       "correct_answer": "గలిలీ",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 39,
//       "question": "యేసు పునరుత్థానానికి తరువాత తన శిష్యులతో ఎక్కడ భోజనం చేశాడు?",
//       "options": [
//         "యెరూషలేము",
//         "గలిలీ",
//         "బేతనియా",
//         "కఫర్నహూమ్"
//       ],
//       "correct_answer": "గలిలీ",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 40,
//       "question": "అబ్రాహాము సంతానానికి దేవుడు ఏ దేశాన్ని వాగ్దానం చేశాడు?",
//       "options": [
//         "కానాను",
//         "మిశ్రయము",
//         "సిరియా",
//         "యూదయా"
//       ],
//       "correct_answer": "కానాను",
//       "level": "medium",
//       "categoryId": "1"
//     },
//     {
//       "id": 41,
//       "question": "యేసు పర్వతానికి ఎవరిని తీసుకెళ్ళాడు?",
//       "options": [
//         "పేతురు, యాకోబు, యోహాను",
//         "పౌలు, బార్నబా, సీల",
//         "యోసేపు, మర్యము, లూకా",
//         "మత్తయి, మార్కు, లూకా"
//       ],
//       "correct_answer": "పేతురు, యాకోబు, యోహాను",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 42,
//       "question": "ఎలీషా ప్రవక్త పండిన గింజలతో ఏ ఆకలిని తట్టించాడు?",
//       "options": [
//         "నిమ్మకాయ పండు",
//         "మసూర పప్పు",
//         "బార్లే గింజలు",
//         "గోధుమ గింజలు"
//       ],
//       "correct_answer": "బార్లే గింజలు",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 43,
//       "question": "యెహోవా సైన్యం బలాన్ని చూశినప్పుడు ప్రజలు ఎక్కడకు తిరిగి వచ్చారు?",
//       "options": [
//         "గిబియోన్",
//         "బేతేలు",
//         "సోమసంద్రము",
//         "యోషువా"
//       ],
//       "correct_answer": "గిబియోన్",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 44,
//       "question": "యోషియా రాజు పాలనలో ఇశ్రాయేలు యాజకులు ఏ గ్రంథాన్ని కనుగొన్నారు?",
//       "options": [
//         "న్యాయశాస్త్రం",
//         "సామెతలు",
//         "ధర్మశాస్త్రం",
//         "సినాయ పుస్తకం"
//       ],
//       "correct_answer": "ధర్మశాస్త్రం",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 45,
//       "question": "ఎలీషా ఎవరి ద్వారా రెండు ఎలుగుబంట్లను పంపించాడు?",
//       "options": [
//         "దేవుడు",
//         "మోషే",
//         "యెషయా",
//         "ఎలీయా"
//       ],
//       "correct_answer": "దేవుడు",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 46,
//       "question": "దేవుడు ఎవరి సంతానంలో విపత్తు లేకుండా కాపాడాడు?",
//       "options": [
//         "హనోక్",
//         "మల్కీచెదెక్",
//         "ఇలీషా",
//         "నాబూయల్"
//       ],
//       "correct_answer": "హనోక్",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 47,
//       "question": "యేసు ఎక్కడ తన శిష్యులను ఆశీర్వదించాడు?",
//       "options": [
//         "బేతనియా",
//         "బేత్లేహెము",
//         "నజరేతు",
//         "యోర్డాన్"
//       ],
//       "correct_answer": "బేతనియా",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 48,
//       "question": "యేసు ఎలా పాపాలను క్షమించాడని ప్రజలు నిందించారు?",
//       "options": [
//         "సాతాను సహాయంతో",
//         "స్వేచ్ఛలో",
//         "యాజకుడి హుకుముతో",
//         "తండ్రి శక్తితో"
//       ],
//       "correct_answer": "సాతాను సహాయంతో",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 49,
//       "question": "యేసు చనిపోయినప్పుడు కర్పురద్రవ్యం ఎవరు తెచ్చారు?",
//       "options": [
//         "పిలాతు",
//         "యోసేఫు",
//         "నికోడేము",
//         "పేతురు"
//       ],
//       "correct_answer": "నికోడేము",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 50,
//       "question": "దేవుడు మోషేకు పది ఆజ్ఞలను ఇచ్చినప్పుడు ఆ కొండ పై మేఘం ఎలా కనిపించింది?",
//       "options": [
//         "అగ్ని మేఘం",
//         "తుమ్ము మేఘం",
//         "ఇంద్రధనుస్సు మేఘం",
//         "మంచు మేఘం"
//       ],
//       "correct_answer": "అగ్ని మేఘం",
//       "level": "hard",
//       "categoryId": "1"
//     },
//     {
//       "id": 51,
//       "question": "మానవ శరీరంలో రక్తం అందించే భాగం ఏది?",
//       "options": [
//         "గుండె",
//         "కిడ్నీ",
//         "పేగులు",
//         "హృదయం"
//       ],
//       "correct_answer": "గుండె",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 52,
//       "question": "మన శరీరంలో కాంతిని చూడటానికి నొప్పి పొందే భాగం ఏది?",
//       "options": [
//         "కళ్లు",
//         "చర్మం",
//         "తల",
//         "చేయి"
//       ],
//       "correct_answer": "కళ్లు",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 53,
//       "question": "మానవ శరీరంలో ఎముకలను కలిపే భాగం ఏమిటి?",
//       "options": [
//         "స్నాయువులు",
//         "కండరాలు",
//         "లిగామెంట్స్",
//         "హైడ్రోక్లోరిక్ ఆమ్లం"
//       ],
//       "correct_answer": "లిగామెంట్స్",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 54,
//       "question": "మానవ శరీరంలో ఉష్ణం నియంత్రించేందుకు ఏ భాగం పని చేస్తుంది?",
//       "options": [
//         "చర్మం",
//         "కిడ్నీ",
//         "హృదయం",
//         "పేగులు"
//       ],
//       "correct_answer": "చర్మం",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 55,
//       "question": "మానవ శరీరంలో రక్తప్రసరణను నియంత్రించేందుకు ఏ భాగం సహాయపడుతుంది?",
//       "options": [
//         "గుండె",
//         "కిడ్నీ",
//         "కాలేయం",
//         "పేగులు"
//       ],
//       "correct_answer": "గుండె",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 56,
//       "question": "మానవ శరీరంలో శక్తిని అందించేందుకు ఏ భాగం సహాయం చేస్తుంది?",
//       "options": [
//         "కిడ్నీ",
//         "పేగులు",
//         "శరీర కణాలు",
//         "హృదయం"
//       ],
//       "correct_answer": "శరీర కణాలు",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 57,
//       "question": "శరీరంలో జీర్ణక్రియకు అవసరమైన ఎంజైమ్ ఏది?",
//       "options": [
//         "పాన్క్రియాటిన్",
//         "హైడ్రోక్లోరిక్ ఆమ్లం",
//         "లిపేస్",
//         "పెప్టిసిన్"
//       ],
//       "correct_answer": "పెప్టిసిన్",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 58,
//       "question": "హార్మోన్ల ఉత్పత్తి చేసే గ్రంధి ఏది?",
//       "options": [
//         "చర్మం",
//         "ఎండోక్రైన్ గ్రంధి",
//         "పేగులు",
//         "కళ్ల"
//       ],
//       "correct_answer": "ఎండోక్రైన్ గ్రంధి",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 59,
//       "question": "మానవ శరీరంలో గ్లూకోజ్ ను నియంత్రించేందుకు ఏ హార్మోన్ సహాయపడుతుంది?",
//       "options": [
//         "ఇన్సులిన్",
//         "కోర్టిసాల్",
//         "ఎస్ట్రోజెన్",
//         "ప్రొజెస్టెరోన్"
//       ],
//       "correct_answer": "ఇన్సులిన్",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 60,
//       "question": "మానవ శరీరంలో మెమరీస్ పనిని నిర్వహించేది ఏది?",
//       "options": [
//         "హృదయం",
//         "తల",
//         "కిడ్నీ",
//         "చర్మం"
//       ],
//       "correct_answer": "తల",
//       "level": "medium",
//       "categoryId": "2"
//     },
//     {
//       "id": 61,
//       "question": "శరీరంలోని గ్లూకోజ్ ప్రమాణాన్ని ఏ అవయవం కాపాడుతుంది?",
//       "options": [
//         "కిడ్నీ",
//         "చర్మం",
//         "ప్యాంక్రియాస్",
//         "కాలేయం"
//       ],
//       "correct_answer": "ప్యాంక్రియాస్",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 62,
//       "question": "మానవ శరీరంలో కోలెస్ట్రాల్ ను నియంత్రించేందుకు ఏ భాగం పని చేస్తుంది?",
//       "options": [
//         "కాలేయం",
//         "కిడ్నీ",
//         "చర్మం",
//         "గుండె"
//       ],
//       "correct_answer": "కాలేయం",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 63,
//       "question": "మానవ శరీరంలో రక్తం యొక్క pH స్థాయి సుమారుగా ఏ స్థాయిలో ఉంటుంది?",
//       "options": [
//         "7.2",
//         "7.4",
//         "7.6",
//         "7.8"
//       ],
//       "correct_answer": "7.4",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 64,
//       "question": "మానవ శరీరంలో ఇన్ సులిన్ హార్మోన్ యొక్క ముఖ్యమైన విధానం ఏమిటి?",
//       "options": [
//         "గ్లూకోజ్ స్థాయిలను నియంత్రించడం",
//         "కోలెస్ట్రాల్ స్థాయిలను నియంత్రించడం",
//         "బల్డర్ పీడనాన్ని నియంత్రించడం",
//         "హార్మోనల్ బ్యాలెన్స్ నియంత్రించడం"
//       ],
//       "correct_answer": "గ్లూకోజ్ స్థాయిలను నియంత్రించడం",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 65,
//       "question": "శరీరంలో ఎముకలు మారే భాగం ఏది?",
//       "options": [
//         "అల్చి",
//         "జోంట్స్",
//         "స్నాయువులు",
//         "కోణాలు"
//       ],
//       "correct_answer": "జోంట్స్",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 66,
//       "question": "మానవ శరీరంలో శ్వాసనాళం యొక్క ముఖ్యమైన భాగం ఏది?",
//       "options": [
//         "నాసికా గర్భం",
//         "బ్రాంకీ",
//         "లంగ్స్",
//         "సోఫగస్"
//       ],
//       "correct_answer": "బ్రాంకీ",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 67,
//       "question": "మానవ శరీరంలో ఆక్సిజన్ లోపం సంభవించినప్పుడు ఏమి జరుగుతుంది?",
//       "options": [
//         "ఆమ్లాపాటి",
//         "శ్వాసకోశం",
//         "కిడ్నీ విఫలం",
//         "ఆర్థరైటిస్"
//       ],
//       "correct_answer": "శ్వాసకోశం",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 68,
//       "question": "ఇన్సులిన్ ఉత్పత్తి చేసే అవయవం ఏది?",
//       "options": [
//         "కాలేయం",
//         "పేగులు",
//         "ప్యాంక్రియాస్",
//         "కిడ్నీ"
//       ],
//       "correct_answer": "ప్యాంక్రియాస్",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 69,
//       "question": "మానవ శరీరంలో శక్తి నిల్వ చేసే భాగం ఏది?",
//       "options": [
//         "గుండె",
//         "కిడ్నీ",
//         "కోషం",
//         "ప్లాస్మా"
//       ],
//       "correct_answer": "కోషం",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 70,
//       "question": "మానవ శరీరంలో జీవక్రియలను నియంత్రించేందుకు ఏ భాగం జవాబుదారిగా ఉంటుంది?",
//       "options": [
//         "బ్రెయిన్ స్టెం",
//         "ప్లెంజ్",
//         "పిన్నియా గ్రంధి",
//         "పిట్యూయటరీ గ్రంధి"
//       ],
//       "correct_answer": "పిట్యూయటరీ గ్రంధి",
//       "level": "hard",
//       "categoryId": "2"
//     },
//     {
//       "id": 71,
//       "question": "భూమి యొక్క ఉపగ్రహం ఏది?",
//       "options": [
//         "చంద్రుడు",
//         "వీనస్",
//         "మార్స్",
//         "యురేనస్"
//       ],
//       "correct_answer": "చంద్రుడు",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 72,
//       "question": "భూమి యొక్క అక్షం సూర్యుని చుట్టూ ఎలా తిరుగుతుంది?",
//       "options": [
//         "ఒక సులువైన కక్ష్యలో",
//         "ఎగువకుడుగా",
//         "ఏకబిగిన కక్ష్యలో",
//         "చాలా వంకరగా"
//       ],
//       "correct_answer": "ఒక సులువైన కక్ష్యలో",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 73,
//       "question": "సూర్యునికి సూర్యకాంతి తయారవడానికి ఎంత సమయం పడుతుంది?",
//       "options": [
//         "8 నిమిషాలు",
//         "1 సెకండ్",
//         "24 గంటలు",
//         "12 గంటలు"
//       ],
//       "correct_answer": "8 నిమిషాలు",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 74,
//       "question": "భూమి వాయువులలో ఆక్సిజన్ శాతం ఎంత ఉంటుంది?",
//       "options": [
//         "50%",
//         "21%",
//         "30%",
//         "10%"
//       ],
//       "correct_answer": "21%",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 75,
//       "question": "సౌర వ్యవస్థలో అత్యంత వేడి వాతావరణం కలిగిన గ్రహం ఏది?",
//       "options": [
//         "వీనస్",
//         "మంగళం",
//         "బృహస్పతి",
//         "శని"
//       ],
//       "correct_answer": "వీనస్",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 76,
//       "question": "క్రిప్టాన్ ఏ గ్రహం?",
//       "options": [
//         "సగం ఊహాత్మకం",
//         "గ్యాస్ గ్రహం",
//         "ఊహాత్మక ఖగోళ గ్రహం",
//         "జల గ్రహం"
//       ],
//       "correct_answer": "ఊహాత్మక ఖగోళ గ్రహం",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 77,
//       "question": "సూర్యుడు భూమికి పగటిపూట ఎంత శక్తిని అందిస్తాడు?",
//       "options": [
//         "5 బిలియన్ జూల్స్",
//         "10 మిలియన్ మెగావాట్స్",
//         "174 పేటావాట్స్",
//         "1 ట్రిలియన్ జూల్స్"
//       ],
//       "correct_answer": "174 పేటావాట్స్",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 78,
//       "question": "చంద్రుని ఉపరితలంపై గ్రావిటీ భూమితో పోల్చితే ఎంత శాతం ఉంటుంది?",
//       "options": [
//         "10%",
//         "16%",
//         "50%",
//         "75%"
//       ],
//       "correct_answer": "16%",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 79,
//       "question": "బహిరాకాశంలో ఎక్కువగా కనిపించే వాయువు ఏది?",
//       "options": [
//         "హీలియం",
//         "హైడ్రోజన్",
//         "ఆక్సిజన్",
//         "కార్బన్ డయాక్సైడ్"
//       ],
//       "correct_answer": "హైడ్రోజన్",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 80,
//       "question": "భూమికి సమీపంలో ఉన్న అతిపెద్ద నక్షత్ర సమూహం ఏది?",
//       "options": [
//         "ఆల్ఫా సెంచూరీ",
//         "మిల్కీ వే",
//         "బెటెల్జ్యూస్",
//         "అండోమెడా"
//       ],
//       "correct_answer": "ఆల్ఫా సెంచూరీ",
//       "level": "medium",
//       "categoryId": "3"
//     },
//     {
//       "id": 81,
//       "question": "సౌర కుటుంబంలో సౌరశక్తిని గ్రహించే పరికరాల నిర్దేశకుడు ఎవరు?",
//       "options": [
//         "నికోలా టెస్లా",
//         "గలీలియో",
//         "కెప్లర్",
//         "జేమ్స్ మ్యాక్స్‌వెల్"
//       ],
//       "correct_answer": "గలీలియో",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 82,
//       "question": "బ్లాక్ హోల్ సరిహద్దును ఏమంటారు?",
//       "options": [
//         "ఇవెంట్ హోరిజోన్",
//         "సింగ్యులారిటీ",
//         "గ్రావిటీ బౌండ్",
//         "క్యాసిమిర్ రీజన్"
//       ],
//       "correct_answer": "ఇవెంట్ హోరిజోన్",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 83,
//       "question": "సౌర మండలంలో ఉల్కలు ఎక్కువగా ఏ ప్రాంతం ద్వారా వస్తాయి?",
//       "options": [
//         "కోయిపర్ బెల్ట్",
//         "అస్టరాయిడ్ బెల్ట్",
//         "ఓర్ట్ క్లౌడ్",
//         "నెప్ట్యూన్ బెల్ట్"
//       ],
//       "correct_answer": "ఓర్ట్ క్లౌడ్",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 84,
//       "question": "సౌర మండలంలో ఏ గ్రహానికి అత్యంత తక్కువ ఉపరితల ఉష్ణోగ్రత ఉంది?",
//       "options": [
//         "నెప్ట్యూన్",
//         "యురేనస్",
//         "శుక్రుడు",
//         "మంగళం"
//       ],
//       "correct_answer": "యురేనస్",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 85,
//       "question": "చంద్రుడికి సూర్యుడి కాంతి చేరడానికి ఎంత సమయం పడుతుంది?",
//       "options": [
//         "1.3 సెకన్లు",
//         "1 నిమిషం",
//         "10 నిమిషాలు",
//         "12 సెకన్లు"
//       ],
//       "correct_answer": "1.3 సెకన్లు",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 86,
//       "question": "సౌర మండలంలో సౌర శక్తిని ఎక్కువగా గ్రహించే గ్రహం ఏది?",
//       "options": [
//         "వీనస్",
//         "భూమి",
//         "మంగళం",
//         "శుక్రుడు"
//       ],
//       "correct_answer": "వీనస్",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 87,
//       "question": "అత్యంత పెద్ద భూకంపం ఎక్కడ చోటు చేసుకుంది?",
//       "options": [
//         "చిలీ",
//         "సుమత్రా",
//         "జపాన్",
//         "అలాస్కా"
//       ],
//       "correct_answer": "చిలీ",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 88,
//       "question": "సౌర మండలంలో అత్యంత తక్కువ ద్రవ్యరాశి కలిగిన గ్రహం ఏది?",
//       "options": [
//         "ప్లూటో",
//         "బుధుడు",
//         "యురేనస్",
//         "మంగళం"
//       ],
//       "correct_answer": "ప్లూటో",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 89,
//       "question": "చంద్రుడు భూమి చుట్టూ తిరగడానికి ఎంత సమయం పడుతుంది?",
//       "options": [
//         "27.3 రోజులు",
//         "30 రోజులు",
//         "24 గంటలు",
//         "365 రోజులు"
//       ],
//       "correct_answer": "27.3 రోజులు",
//       "level": "hard",
//       "categoryId": "3"
//     },
//     {
//       "id": 90,
//       "question": "బహిరాకాశంలో సౌరశక్తి పొడవైన తారల కాంతిని ఎలా గ్రహిస్తారు?",
//       "options": [
//         "వేగల్ గ్రహాలు",
//         "సూపర్ నోవా",
//         "వ్లాసర్",
//         "కోస్మిక్ రెడియేషన్"
//       ],
//       "correct_answer": "కోస్మిక్ రెడియేషన్",
//       "level": "hard",
//       "categoryId": "3"
//     }
//   ]

const AddQuestation = () => {

    const AddPreviousData = () =>{

        englishQuestations.map(async data=>{
            const response = await fetch('http://localhost:5000/api/questions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Send formData as JSON
              });


        })

        alert("Data imported successfully")


    }



  return <button onClick={AddPreviousData}>Import Data</button>;
};

export default AddQuestation;
