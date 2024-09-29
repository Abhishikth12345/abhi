import React, { useState, useEffect, useRef, useCallback } from "react";
import useSound from "use-sound";
import "./CommonComponent.css";
import TotalPoints from "./Components/TotalPoints";
import confetti from 'canvas-confetti'; // Import canvas-confetti 

import correctSound from "./sounds/correct.mp3";
import wrongSound from "./sounds/wrong.mp3";
import timerSound from "./sounds/wait.mp3";
import Profile from "./Components/Profile";

const shuffleQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

const CommonComponent2 = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(20);
  const [points, setPoints] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Tracks selected option
  const [showTotalPoints, setShowTotalPoints] = useState(false);
  const [entireQuizDisabled, setEntireQuizDisabled] = useState(false);
  const timerRef = useRef(null);
  

  const [playCorrect] = useSound(correctSound);
  const [playWrong] = useSound(wrongSound);
  const [playTimer, { stop: stopTimer }] = useSound(timerSound);

  const moneyLadder = [
    10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
  ];

  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
  });

  const triggerConfetti = () => {
    const duration = 15 * 1000;  
    const end = Date.now() + duration;

    const confettiInterval = setInterval(function() {
        if (Date.now() > end) {
            return clearInterval(confettiInterval);
        }

        confetti({
            particleCount: 150,  
            startVelocity: 30,   
            spread: 360,         
            ticks: 60,           
            origin: {
                x: Math.random(), 
                y: Math.random() - 0.2 
            },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00', '#ff8000', '#8000ff', '#0080ff', '#ff0080'] 
        });
    }, 250);  
};

  useEffect(() => {
    setQuestions(shuffleQuestions(props.questions));
  }, [props.questions]);

  const handleGameLost = useCallback(
    (message) => {
      playWrong();
      stopTimer();
      setGameStatus("lost");
      setOptionsDisabled(true);
      setEntireQuizDisabled(true);
      setPoints(0); // Set points to zero
      setShowTotalPoints(true); // Show total points pop-up
    //   alert(message);
    },
    [playWrong, stopTimer]
  );


const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimer(20);
    setIsBlinking(true); // Start blinking

    timerRef.current = setInterval(() => {
        setTimer(prev => {
            if (prev <= 1) {
                clearInterval(timerRef.current);
                stopTimer();
                handleGameLost("Time's up! You lost the game.");
                setIsBlinking(false); // Stop blinking when time's up
                return 0;
            }
            playTimer();
            return prev - 1;
        });
    }, 1000);
};
  useEffect(() => {
    if (gameStatus === "playing") {
      resetTimer();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentQuestionIndex, gameStatus]);


  const handleAnswerClick = useCallback(
    (option) => {
      if (gameStatus !== "playing" || optionsDisabled || entireQuizDisabled)
        return;

      const correctAnswer = questions[currentQuestionIndex].correct_answer;
      setOptionsDisabled(true); // Disable options after the first click
      setSelectedOption(option); // Set the selected option

      if (option === correctAnswer) {
        playCorrect();

        setPoints((prevPoints) => {
          const currentIncrement = (currentQuestionIndex + 1) * 10000; // Increment based on current question index
          const newPoints = prevPoints + currentIncrement; // Add the increment to the current points
          return Math.min(newPoints); 
        });
        
      
        setTimeout(() => {
        setCurrentQuestionIndex((prev) => {
          const newIndex = prev + 1;
          if (newIndex >= questions.length) {
            setGameStatus("won");
            stopTimer();
            setShowTotalPoints(true);
            triggerConfetti();
            setEntireQuizDisabled(true);
            return prev;
          }
          if (newIndex === 10) {
            // Stop after 10 questions
            setGameStatus("completed");
            stopTimer();
            setShowTotalPoints(true);
            triggerConfetti();
            setEntireQuizDisabled(true);
            return prev;
          }
          setSelectedOption(null); // Reset selected option for the next question
            setOptionsDisabled(false); // Enable options for the next question
          return newIndex;
        });
    },1000);
      } else {
        setTimeout(() => {
        handleGameLost("Wrong Answer! You lost the game.");
      },1000);
    }
    },
    [
      gameStatus,
      optionsDisabled,
      entireQuizDisabled,
      playCorrect,
      stopTimer,
      questions,
      currentQuestionIndex,
      handleGameLost,
    ]
  );

  // Removed ask audience and phone a friend functionality

  const handleFiftyFifty = () => {
    if (
      !lifelines.fiftyFifty ||
      gameStatus !== "playing" ||
      optionsDisabled ||
      entireQuizDisabled
    )
      return;

    const currentQuestion = questions[currentQuestionIndex];
    const incorrectOptions = currentQuestion.options.filter(
      (option) => option !== currentQuestion.correct_answer
    );
    const modifiedOptions = [
      currentQuestion.correct_answer,
      incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)],
    ];

    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[currentQuestionIndex].options = modifiedOptions;
      return updatedQuestions;
    });

    setLifelines((prev) => ({ ...prev, fiftyFifty: false }));
  };

  const handleCloseTotalPoints = () => {
    setShowTotalPoints(false);
    window.location.href = "#";
  };

  return (
    <div className={`app ${entireQuizDisabled ? "disabled" : ""}`}>
      {showTotalPoints && (
        <TotalPoints totalPoints={points} onClose={handleCloseTotalPoints} />
      )}
      <div className="points">Points: {points}</div>
      <div className="main">
        <div className="top">
          <div
            className={`alert-border-circle-timer ${isBlinking ? "blink" : ""}`}
          >
            {timer}
          </div>
        </div>
        <div className="bottom">
          <div className="trivia">
            <div className="question">
              {questions.length > 0 && questions[currentQuestionIndex].question}
            </div>
            <div className="answers">
              {questions.length > 0 &&
                questions[currentQuestionIndex].options.map((option, index) => (
                  <div
                    key={index}
                    className={`answer ${
                        selectedOption
                        ? option === questions[currentQuestionIndex].correct_answer
                          ? "correct"
                          : option === selectedOption
                          ? "wrong"
                          : ""
                        : ""
                    } ${
                      optionsDisabled || entireQuizDisabled ? "disabled" : ""
                    }`}
                    onClick={() => handleAnswerClick(option)}
                  >
                    {option}
                  </div>
                ))}
            </div>

            <div className="lifelines">
              <button
                onClick={handleFiftyFifty}
                disabled={
                  !lifelines.fiftyFifty || optionsDisabled || entireQuizDisabled
                }
                className={`lifeline-button ${
                  !lifelines.fiftyFifty ? "disabled" : ""
                }`}
              >
                50/50
              </button>
            </div>

            <button
              className="quit-button"
              onClick={() => {
                const userChoice = window.confirm(
                  "Are you sure you want to quit?"
                );
                if (userChoice) window.location.href = "/home";
              }}
            >
              Quit
            </button>
          </div>
        </div>
      </div>
      <div className="pyramid">
        <div className="userProfile">
          <Profile />
        </div>
        <ul className="moneyList">
          {moneyLadder
            .slice()
            .reverse()
            .map((amount, index) => (
              <li
                key={index}
                className={`moneyListItem ${
                  index === moneyLadder.length - 1 - currentQuestionIndex
                    ? "active"
                    : ""
                }`}
              >
                <span className="moneyListItemNumber">{10 - index}</span>
                <span className="moneyListItemAmount">{amount}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonComponent2;
