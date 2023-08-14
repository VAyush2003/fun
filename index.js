document.querySelector("button").onclick = function(){
    let x = Math.random()
    if (x>.5){
        document.querySelector("#answer").textContent = "The answer to the your question is YES";
    }
    else{
        document.querySelector("#answer").textContent = "The answer to the your question is NO";
    }
}
