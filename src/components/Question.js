

import './Question.css';

import { useState } from "react";
import axios from "axios";

function Question() {
    const Answer_check=()=> {
        alert("f1");

        if (document.getElementById("inp").checked)
            return 0;

        if (document.getElementById("inp1").checked)
            return 1;

        if (document.getElementById("inp2").checked)
            return 2;

        if (document.getElementById("inp3").checked)
            return 3;

        if (document.getElementById("inp4").checked)
            return 4;
        return 0;


    }
    const [paper, setPaper] = useState([]);
    const [qIndex, setQIndex] = useState(0);
    


    const question_show = () => {
        const baseURL = `https://azadvns.github.io/meragithubpage/ques.json`;

        console.log(baseURL);

        axios.get(baseURL).then((Response) => {
            setPaper(Response.data);
            // console.log(qIndex);
            
        })

            .catch((error) => {
                console.log(error);


            });

       
    };

    const fnext = (event) => {

        event.preventDefault();
        document.getElementById("inp").checked = true;
        setQIndex(qIndex + 1);
    }

      return (<div>
        {/* {paper &&
        <pre>
    {JSON.stringify(paper,null,2)}
        </pre>
}  */}


        <div className='qno'><button onClick={question_show}>Show Questions</button></div>
        <div className='quiz'> <h2 >Quiz Start</h2></div>
        {paper.length > 0 && (

            <center>
                <div className='cen'>
                    <h5>

                        <h1 className='qno'>Question No: {paper[qIndex]["qno"]}</h1><br></br>

                        <h2 className='question'>Question: {paper[qIndex]["question"]}</h2><br></br>
                        <label className='option'><input type='radio' name="option" id='inp1'></input>A: {paper[qIndex]["a"]}</label><br></br>
                        <label className='option'><input type='radio' name="option" id='inp2'></input>B: {paper[qIndex]["b"]}</label><br></br>
                        <label className='option'><input type='radio' name="option" id='inp3'></input>C: {paper[qIndex]["c"]}</label><br></br>
                        <label className='option'><input type='radio' name="option" id='inp4'></input>D: {paper[qIndex]["d"]}</label><br></br>
                        <label><input type='radio' name='option' id='inp' className='bl' checked></input></label>
                        {/* <div >Answer: {paper[qIndex]["answer"]}</div> */}

                        {/* Button to show next question */}
                        {qIndex < paper.length - 1 && (


                            // <button onClick={() => setQIndex(qIndex + 1)}>Next</button>
                            <button onClick={fnext}>Save & Next</button>




                        )}
                        <button onClick={alert(Answer_check())}>answer1</button>

                    </h5>
                </div>
            </center>
        )}

    </div>)

}
export default Question;

