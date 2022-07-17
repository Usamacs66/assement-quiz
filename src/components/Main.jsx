import React, { useEffect,useState } from 'react'
import QuizContainer from './QuizContainer';
import ReactStars from "react-rating-stars-component";

function Main () {

    const [star,setStar] = useState(0);
    const changeDificultyLevel = (newVal)=>{
        setStar(newVal);
    }
if(star <= 0 || star > 3 ){
    return(
        <>
        <p>please select the dificulty level</p>
<ReactStars
    count={3}
    onChange={changeDificultyLevel}
    value={0}
    size={24}
    activeColor="#ffd700"
    classNames =""
  />
  </>
    )
}
    else{
  return (
    <div>
    <QuizContainer dificultyLevel = {star} changeDificultyLevel ={changeDificultyLevel} />
    </div>
  )
}
}

export default Main
