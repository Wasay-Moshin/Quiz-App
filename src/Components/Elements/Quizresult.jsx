import React from 'react'
import question from "../Layout/Question.json"

function Quizresult (props) {
  return (
    <div className='score-section'>
        <h2>Completed!</h2>
        <h4 style={{color:"red"}}>Total Score {props.score}/25</h4>
        <h4 style={{color:"green"}}>Your correct Question {props.correctAns} out of {question.length}</h4>
        <button  className='text-center' onClick={props.handlePlayAgain}>Exit or Play it Again</button>
    </div>
  )
}

export default  Quizresult;