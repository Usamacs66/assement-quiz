import React, { useEffect, useState } from "react";

import ProgressBar from "@ramonak/react-progress-bar";

function Bar(props){
    debugger
    const [progress,setProgress] = useState(0);
    useEffect(()=>{
        if(props.total > 0){
         setProgress((props.currentQuestion*100)/props.total)
        }
        else{
            setProgress(0)
        }
    },[props.currentQuestion,props.total])
    debugger
  return <ProgressBar completed={progress} />;
};

export default Bar