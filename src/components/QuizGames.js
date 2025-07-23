import axios from "axios";
import { useEffect, useState } from "react";

import './QuizGame.css';

function QuizGames() {

    const [solve, setSolve] = useState([]);
    const [question, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [option, setOption] = useState(0)
    const [started, setStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);



    function downloadData(dataname, url) {

        console.log(url);
        axios.get(url).then((Response) => {
            localStorage.setItem(dataname, JSON.stringify(Response.data));
            // setSolve(Response.data);
        })

            .catch((error) => {
                console.log(error);

            })
    }
    const data_storage = () => {
        let data = localStorage.getItem("questions");
        if (data) {
            setSolve(JSON.parse(data));
        }
    }
    useEffect(() => {
        downloadData("questions", `https://azadvns.github.io/meragithubpage/ques.json`);
        data_storage();
        console.log("Download");
    }, [])


    const next = (event) => {
        event.preventDefault();

        if (option === 0 ) {
            alert("please select answer");
            return;
        }

        document.getElementById("op").checked = true;


        let actualanswer = solve[question]["answer"];
        if (option === actualanswer) {
            setScore(score + 1);
            // return;
        }


        if (question >= solve.length - 1) {
            setIsFinished(true);
            return;
        }
        else {
            setQuestion(question + 1);
        }


    }

    const handleoption = (event) => {
        let t = event.target.value;
        setOption(t)

    }

    const startQuiz = () => {
        setStarted(true);
    };


    return (<div className="boxshadow">
        <center>

            {!started ? (
                <div>
                    <h1>Welcome to the Quiz Game</h1>
                    <button className="btt" onClick={startQuiz}> Start Quiz</button>
                </div>
            )

                : isFinished ? (
                    <div>
                        <h1> Quiz Finished </h1>
                        <h2>Your Score: {score} / {solve.length}</h2>
                        <button className="btt" onClick={() => window.location.reload()}> Reload Quiz</button>
                    </div>
                )


                    : solve.length > 0 && (
                        <div>
                            <h1>Score:{score}/{solve.length}</h1>
                            <h2>Question:{solve[question]["qno"]}</h2>
                            <h2>{solve[question]["question"]}</h2>
                            <label className="option1"><input type="radio" name="option" id="op1" value={1} onChange={handleoption}></input>{solve[question]["a"]}</label>
                            <label className="option1"><input type="radio" name="option" id="op2" value={2} onChange={handleoption}></input>{solve[question]["b"]}</label>
                            <label className="option1"><input type="radio" name="option" id="op3" value={3} onChange={handleoption}></input>{solve[question]["c"]}</label>
                            <label className="option1"><input type="radio" name="option" id="op4" value={4} onChange={handleoption}></input>{solve[question]["d"]}</label>
                            <label className="none"><input type="radio" name="option" id="op" ></input></label>
                            {/* <h2>{solve[question]["answer"]}</h2> */}
                            <button className="btt" onClick={next} >Save & Next</button>

                        </div>

                    )}


            {/* {solve &&(
   <pre> {JSON.stringify(solve,null,2)}</pre>
)} */}


        </center>
    </div>);


}
export default QuizGames;



