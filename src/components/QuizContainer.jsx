import React, { useEffect,useState } from 'react'
import questions from '../questions';
import QuestionTemplate from './QuestionTemplate';
import ReactStars from "react-rating-stars-component";
import BarChart from './barChart';
import Bar from './ProgressBar'

function QuizContainer (props) {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [questionBank,setQuestionBank] = useState([]);
  const [score,setScore] = useState(0);
  const [star,setStar] = useState(0);
  const [attemptedCount,setAttemptedCount] = useState(0);
   
  useEffect(()=>{
  questions().then(question => {
    let filteredQuestions = question;
    if(star!=0)
    filteredQuestions = question.filter(x=>x.difficulty == dificultyLevel[star])
    setQuestionBank(filteredQuestions);
    setCurrentQuestion(0);
  });
},[star]);

const changeDificultyLevel = (newVal)=>{
    setStar(newVal);
}

const getAnswer = (ans)=>{
    setScore(state => state + (ans));
    setAttemptedCount(state=> state+1);
}

const dificultyLevel = {
1:"easy",
2:"medium",
3:"hard"
}


  return (
    <>
    <Bar currentQuestion={currentQuestion+1} total={questionBank.length} />
     <div>
      question {currentQuestion+1} of {questionBank.length}
     </div>
<div>
    <p>Entertainment: Board Games</p>
    <ReactStars
    count={3}
    onChange={changeDificultyLevel}
    value={props.dificultyLevel}
    size={24}
    activeColor="#ffd700"
    classNames ="stars"
  />
</div>
     

     {questionBank[currentQuestion] &&
     <QuestionTemplate currentQuestion = {questionBank[currentQuestion]} getAnswer = {getAnswer} />
    }

  <div>
    {currentQuestion < questionBank.length-1 &&  
    <button onClick={()=>{setCurrentQuestion(state=> state+1)}}>next</button>
  }
    </div>
    <div>
    <BarChart score={score} attemptedQuestion={attemptedCount} totalQuestion={questionBank.length} />
    </div>
    </>
  )
}

export default QuizContainer
