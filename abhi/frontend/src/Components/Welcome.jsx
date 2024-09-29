import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
const Welcome = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };
  return (
    <div className="centered-content">
      <center>
        <h1>Welcome to Quiz</h1>
        <br></br>
        <button
          type="button"
          class="btn btn-success"
          onClick={handleStartClick}
        >
           Start
        </button>
      </center>
    </div>
  );
};

export default Welcome;
