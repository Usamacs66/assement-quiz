import React,{useEffect, useState} from 'react';
import HSBar from "react-horizontal-stacked-bar-chart";

function BarChart(props){
const [graphValues,setGraphValues] =useState([]);
const [isLoadGraph,setLoadGraph] =useState(false);
    
useEffect(()=>{
    maipulateGraphValues();
},[props.attemptedQuestion])

const maipulateGraphValues = ()=>{
    debugger;
    if(props.attemptedQuestion > 0){
    let score = props.score <= 0 ? 0: (props.score * 100)/props.attemptedQuestion;
    let minScore = props.score <= 0 ? 0: (props.score * 100)/props.totalQuestion;
    let maxScore = ((props.score+props.totalQuestion-props.attemptedQuestion) * 100)/props.totalQuestion;
    let arr = []
    if(score > 0){
arr.push({
    name: "score",
    value: score,
    //description: "U$80,00",
    color: "red"
  })
    }

    if(minScore > 0){
        arr.push({
            name: "min",
            value: minScore,
            //description: "U$200,00",
            color: "rgb(150,150,220)"
          })
            }

            if(maxScore > 0){
                arr.push({
                    name: "max",
                    value: maxScore,
                    //description: "U$200,00",
                    color: "yellow"
                  })
                    }

    setGraphValues(arr);
    setLoadGraph(true);
}
}

    return(<>
    {isLoadGraph &&
<HSBar
  height={20}
  //showTextIn
  showTextUp
  //showTextDown
  outlineWidth= {0.5}
  outlineColor= "black"
  id="new_id"
  fontColor="rgb(50,20,100)"
  data={graphValues}
  onClick={e => console.log(e.bar)}
/>}
    </>)
}

export default BarChart;