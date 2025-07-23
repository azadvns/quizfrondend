
import './quiz.css';
import axios from 'axios';

import { useEffect, useState } from 'react';

function Quiz() {

  const [paper, setPaper] = useState([]);

  const [qIndex, setQIndex] = useState(0)
  const [option, setOption] = useState(0);
  const [score, setScore] = useState(0);
  
  function loadQuestion() {
    console.log("LQ");

    const baseURL = `https://azadvns.github.io/meragithubpage/ques.json`;

    console.log(baseURL);

    axios.get(baseURL).then((Response) => {
     
      localStorage.setItem("question", JSON.stringify(Response.data));
      


    })

      .catch((error) => {
        console.log(error);


      });


  }
  useEffect(() => {
    loadQuestion();
    data_storage()
    // optionChoose()
    console.log('Page loaded!');


  }, []);


  const data_storage = () => {
    let data = localStorage.getItem("question");
    if (data) {
      setPaper(JSON.parse(data));
    }

  }

  const fnext = (event) => {
   
    console.log("hello");
    event.preventDefault();
    document.getElementById("opt").checked = true;

    let result = document.getElementById("result");


    if (qIndex >= paper.length - 1) {

       localStorage.setItem(`qIndex`, qIndex);

    let data = localStorage.getItem("question");
    data = JSON.parse(data);

    console.log(data);
    



data[qIndex]["useranswer"]=option;
   

let n = Number(data.length);
       let output = `<tr><td>QNo</td><td>Question</td><td>A</td><td>B</td><td>C</td><td>D</td><td>Correct</td><td>Given Answer</td></tr>`;
    for (let i = 0; i <= n - 1; i++) {
      let trtd = `<tr><td>${data[i]["qno"]}</td><td>${data[i]["question"]}</td><td>${data[i]["a"]}</td><td>${data[i]["b"]}</td><td>${data[i]["c"]}</td><td>${data[i]["d"]}</td><td>${data[i]["answer"]}</td><td>${data[i]["useranswer"]}</td></tr>`;

      output += trtd;
    }

    output = `<table border="1">${output}</table>`;

    document.getElementById("idid").innerHTML = output;

      return;
    }

    let actualanswer = paper[qIndex]["answer"];
    setQIndex(qIndex + 1);



    // alert(option + "," + actualanswer);
    console.log(option === actualanswer);
    if (option === actualanswer) {

      setScore(score + 1);


      
      // alert("Right");
      result.innerText = "Right";
      result.classList.add("green")
      result.classList.remove("red")
    }
    else {
      // alert("Wrong");
      result.innerText = "Wrong";
      result.classList.remove("green")
      result.classList.add("red")
    }


    return;



  }

  const restart = () => {
    if (qIndex >= paper.length - 1) {
      setQIndex(0);
      setScore(0);
      setOption(0)

    }
  }


  const handleoption = (event) => {
    let t = event.target.value;

    setOption(t);


  }

  return (<div>

    

    <div id="idid"></div>

    <center>

      <h1 className='quiz'>Quiz Start</h1>
      {paper.length > 0 && (

        <h5 className='box'>
          <h1 >Score:{score}/{paper.length}</h1>
          <h1>Question_No:{paper[qIndex]["qno"]}</h1><br></br>
          <h2 className='question'>Question:{paper[qIndex]["question"]}</h2><br></br>

          <label className='option'><input type='radio' name='option' id='opt1' value={1} onChange={handleoption} ></input>A:{paper[qIndex]["a"]}</label><br></br>
          <label className='option'><input type='radio' name='option' id='opt2' value={2} onChange={handleoption} ></input>B:{paper[qIndex]["b"]}</label><br></br>
          <label className='option'><input type='radio' name='option' id='opt3' value={3} onChange={handleoption} ></input>C:{paper[qIndex]["c"]}</label><br></br>
          <label className='option'><input type='radio' name='option' id='opt4' value={4} onChange={handleoption} ></input>D:{paper[qIndex]["d"]}</label><br></br>
          {/* <label onClick={handleoption}>Answer:{paper[qIndex]["answer"]} </label><br></br> */}
          {/* <label>{option}</label><br></br> */}
          <div id='result'></div>
          <label><input type='radio' name='option' id="opt" className='no'></input></label><br></br>


          <button onClick={fnext} className='button'>Save & Next</button><br></br>

          <button onClick={restart}>Restart</button>

        </h5>

      )}
    </center>

  </div>)

}

export default Quiz;

