import { useState } from "react";
import axios from "axios";

function Question() {

    const [paper, setPaper] = useState("");


    const handleshow = () => {
        const baseURL = `https://azadvns.github.io/hello/json/imp_question.json`;

        console.log(baseURL);

        axios.get(baseURL).then((Response) => {
            setPaper(Response.data);
        })

            .catch((error) => {
                console.log(error);


            });
    };

    return (<div>
        <button onClick={handleshow}>show</button>

<h1>Question_no: {paper[0]["qno"]}</h1>
<h1>Question:{paper[0]["question"]}</h1>
<h1>Option:{paper[0]["option"]}</h1>
<h1>Answer:{paper[0]["answer"]}</h1>

        {/* {paper &&
        <pre>
    {JSON.stringify(paper,null,2)}
        </pre>
} */}
    </div>)

}
export default Question;