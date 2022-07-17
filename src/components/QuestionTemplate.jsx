import React,{useEffect, useState} from 'react';

function QuestionTemplate(props){

    const [isAnswered,setAnswer] = useState(false);
    
    useEffect(()=>{
         setAnswer(false);
    },[props.currentQuestion])

    const currentQuestion = props.currentQuestion;
    
    currentQuestion.allQuestions= currentQuestion.incorrect_answers.concat([currentQuestion.correct_answer]);

    const getAnswer = (answer)=>{
        setAnswer(true);
        if(answer)
        props.getAnswer(1);
        else{
            props.getAnswer(0);
        }
    }

const getQuestions = ()=>{

return currentQuestion.allQuestions.map((answerOption, index) => {
    if (answerOption == currentQuestion.correct_answer) {
      return <button disabled={isAnswered} onClick={()=>getAnswer(true)} key={decodeURIComponent(answerOption)}>{decodeURIComponent(answerOption)}</button>
    }
    return <button disabled={isAnswered} onClick={()=>getAnswer(false)} key={decodeURIComponent(answerOption)}>{decodeURIComponent(answerOption)}</button>
  });

}

    return(<>
       <div>
      {
      decodeURIComponent(currentQuestion.question)
      }
      </div>
      
      {getQuestions()}

      {}

    </>)
}

export default QuestionTemplate;