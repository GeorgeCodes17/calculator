console.log('JS Loaded')
let displayText, dataInputted = []
refreshDisplayVar()

function calculateAnswer(){
    dataInputted.push(document.getElementById("display-text").innerHTML);
    let result = 0;
    let numOfIters = dataInputted.length - 2
    if (dataInputted.length !== 1){
    for (let i=0; i < numOfIters; i++){
        if (dataInputted[i+1] === "/"){
            result = result + (parseFloat(dataInputted[i]) / parseFloat(dataInputted[i+2]))
        }else if (dataInputted[i+1] === "x"){
            result = result + parseFloat(dataInputted[i]) * parseFloat(dataInputted[i+2])
        }else if (dataInputted[i+1] === "+"){
            result = result + parseFloat(dataInputted[i]) + parseFloat(dataInputted[i+2])
        }else if (dataInputted[i+1] === "-"){
            result = result + parseFloat(dataInputted[i]) - parseFloat(dataInputted[i+2])
        }
        }}else{result = parseFloat(dataInputted[0])}
    dataInputted = [];
    updateDisplayWithResult(result);
    refreshDisplayVar();
    return dataInputted, console.log('end calc');
}
function updateDisplayWithResult(result){
    return document.getElementById("display-text").innerHTML = result.toString()
}
function refreshDisplayVar(){
    return displayText = document.getElementById("display-text").innerHTML;
}

// when press clear/ backspace
document.getElementById("clear").addEventListener("click", () =>{
    dataInputted = [];
    document.getElementById("display-text").innerHTML = "0";
    refreshDisplayVar();
})
document.getElementById("backspace").addEventListener("click", () =>{
    document.getElementById("display-text").innerHTML = displayText.slice(0, -1);
    refreshDisplayVar();
})
document.getElementById("equals").addEventListener("click", () =>{
    calculateAnswer();
    displayText = document.getElementById("display-text").innerHTML;
})

// when press x or / or - or +
document.getElementById("divide").addEventListener("click", () =>{
    dataInputted.push(displayText);
    document.getElementById("display-text").innerHTML = "0";
    dataInputted.push("/");
    displayText = document.getElementById("display-text").innerHTML;
})
document.getElementById("times").addEventListener("click", () =>{
    dataInputted.push(displayText);
    document.getElementById("display-text").innerHTML = "0";
    dataInputted.push("x");
    displayText = document.getElementById("display-text").innerHTML;
})
document.getElementById("plus").addEventListener("click", () =>{
    dataInputted.push(displayText);
    document.getElementById("display-text").innerHTML = "0";
    dataInputted.push("+");
    displayText = document.getElementById("display-text").innerHTML;
})
document.getElementById("minus").addEventListener("click", () =>{
    dataInputted.push(displayText);
    document.getElementById("display-text").innerHTML = "0";
    dataInputted.push("-");
    displayText = document.getElementById("display-text").innerHTML;
})


// when press a number
// add length of num validation/ limit
document.getElementById("point").addEventListener("click", () =>{
    if (displayText.includes(".")=== false){
    document.getElementById("display-text").innerHTML= displayText + "."
    refreshDisplayVar();
    }
})

document.getElementById("zero").addEventListener("click", () =>{
    if (displayText.slice(-1) !== "0"){
        document.getElementById("display-text").innerHTML= displayText + "0"
        refreshDisplayVar();
    }
})
document.getElementById("one").addEventListener("click", () =>{
    if("0" === "0"){
        document.getElementById("display-text").innerHTML = "1";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "1";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("two").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "2";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "2";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("three").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "3";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "3";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("four").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "4";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "4";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("five").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "5";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "5";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("six").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "6";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "6";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("seven").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "7";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "7";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("eight").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "8";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "8";
    displayText = document.getElementById("display-text").innerHTML;
    }
})
document.getElementById("nine").addEventListener("click", () =>{
    if(displayText === "0"){
        document.getElementById("display-text").innerHTML = "9";
        displayText = document.getElementById("display-text").innerHTML;
    }else{
    document.getElementById("display-text").innerHTML= displayText + "9";
    displayText = document.getElementById("display-text").innerHTML;
    }
})