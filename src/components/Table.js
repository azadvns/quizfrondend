


function Table() {

    

     let data = localStorage.getItem("question");
     data=JSON.parse(data);
     
     console.log(data);
     
    

    let n = Number(data.length);
    
    let output = `<tr><td>QNo</td><td>Question</td><td>A</td><td>B</td><td>C</td><td>D</td><td>Correct</td></tr>`;
    for (let i = 0; i <= n - 1; i++) {
        let trtd = `<tr><td>${data[i]["qno"]}</td><td>${data[i]["question"]}</td><td>${data[i]["a"]}</td><td>${data[i]["b"]}</td><td>${data[i]["c"]}</td><td>${data[i]["d"]}</td><td>${data[i]["answer"]}</td></tr>`;
        output += trtd;
    }
    
    output = `<table border="1">${output}</table>`;
    // document.getElementById("dd").innerHTML = output;
    document.getElementById("idid").innerHTML=output; 

// alert("data");
    return (<div>
            <div id="idid"></div>
    </div>)
}
export default Table;