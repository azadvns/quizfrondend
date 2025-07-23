import { useState } from "react";

function Number(){

const [questionno,setQuestionno]=useState(0);
const [start,setStart]=useState(false);
const [finish,setFinish]=useState(false);

const NextQuestion=()=>{
if(questionno<5){
    
    setQuestionno(questionno +1);
    
    return;
}
else{
    setFinish(true);
}
}

const sta=()=>{
    setStart(true);
}
// return(<div>

    
//     <h1>Question:{questionno}</h1>
//     <button onClick={NextQuestion}>Next</button>
// </div>)

  return (
    <div>
      {!finish ? 
      
      
      (
        <>
          <h1>Question: {questionno }</h1>
          <button onClick={NextQuestion}>Next</button>
        </>
      ) : (
        <h1>Finish</h1>
      )
     
      }
    </div>
  );

}
export default Number;