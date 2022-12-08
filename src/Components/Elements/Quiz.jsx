import React, { useState } from "react";
import question from "../Layout/Question.json";
import Quizresult from "./Quizresult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked]=useState();

  const handleNextOption = () => {
    setClicked(false)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctAns + 1);
    }
    setClicked(true);
    // if (currentQuestion + 1 < question.length) {
    //   setCurrentQuestion(currentQuestion + 1);
    // } else {
    //   setShowResult(true);
    // }
  };
  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Quizresult
          score={score}
          correctAns={correctAns}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <>
          <div className="question-section">
            <h5>Score: {score}</h5>
            <div className="question-count">
              <span>
                Question {currentQuestion + 1} of {question.length}
              </span>
            </div>
            <div className="question-text">
              {question[currentQuestion].text}
            </div>
          </div>
          <div className="answer-section">
            {question[currentQuestion].options.map((ans, i) => {
              return (
                <button
                className={`button ${clicked && ans.isCorrect? "correct":"button"}`}
                disabled={clicked}
                  key={i}
                  onClick={() => handleAnswerOption(ans.isCorrect)}
                >
                  {ans.answertext}
                </button>
              );
            })}
            <div className="actions">
              <button onClick={handlePlayAgain}>Quit</button>
              <button disabled={!clicked} onClick={handleNextOption}>Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
