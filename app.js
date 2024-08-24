let playBtn=document.querySelector(".play-btn");
let newBtn=document.querySelector(".startOver");
let yourS=document.querySelector(".yourS");
let compS=document.querySelector(".compS");
let choices= document.querySelectorAll(".rps");

let yourScore=0;
let compScore=0;

choices.forEach((rps)=>{
    rps.addEventListener("click",()=>{
    let userId=rps.getAttribute("id");
    console.log("user:",userId);
    let compId=compChoice();
    console.log("comp:",compId);
    showWinner(userId,compId);
    });
});

const compChoice=()=>{
    compCh=Math.floor(Math.random()*3)+1;

    if(compCh===1){
        compId="rock";
    }else if(compCh===2){
        compId="paper";
    }else{
        compId="scissors";
    }
    return compId;
}
const showWinner=(userId,compId)=>{
    if(userId===compId){
        playBtn.innerText="It's a Tie!!";
        playBtn.style.backgroundColor="rgb(153, 153, 172)";
    }else if(userId==="rock" && compId==="paper" ||
        userId==="paper" && compId==="scissors" ||
        userId==="scissors" && compId==="rock"){
            playBtn.innerText="Computer Won";
            playBtn.style.backgroundColor="rgb(197, 3, 3)";
            compScore++;
    }else{
        console.log("User Wins");
        playBtn.innerText = "You Won :))";
        playBtn.style.backgroundColor="green";
        yourScore++;
    }
    yourS.innerText=yourScore;
    compS.innerText=compScore;
}

newBtn.onclick=()=>{
    yourS.innerText=0;
    compS.innerText=0;
    yourScore=0;
    compScore=0;
    resetPlayBtn();
}
const resetPlayBtn = () => {
    playBtn.innerText = "Pick Your Move";
    playBtn.style.backgroundColor = "#67729D";
};
