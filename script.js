'use strict'
console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.random();
    if(random <= 0.33){
        console.log("rock");
        return "rock";
    }
    else if(random > 0.33 && random <= 0.66){
        console.log("paper");
        return "paper";
    }
    else{
        console.log("scissors");
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    if(computerChoice === humanChoice){
        return `It's a tie! The computer also chose ${computerChoice}`
    }
    else if(computerChoice === "rock"){
        if(humanChoice === "scissors"){
            console.log(`You lost! The computer chose ${computerChoice}`);
            computerScore++;
        }
        else{
            console.log(`You won! The computer chose ${computerChoice}`);
            humanScore++;
        }
    }
    else if(computerChoice === "paper"){
        if(humanChoice === "scissors"){
            console.log(`You won! The computer chose ${computerChoice}`);
            humanScore++;
        }
        else{
            console.log(`You lost! The computer chose ${computerChoice}`);
            computerScore++;
        }
    }
    else if(computerChoice === "scissors"){
        if(humanChoice === "paper"){
            console.log(`You lost! The computer chose ${computerChoice}`);
            computerScore++;
        }
        else{
            console.log(`You won! The computer chose ${computerChoice}`);
            humanScore++;
        }
    }
}

const buttons = document.querySelector(".buttons");
const comp = document.querySelector(".comp");
const you = document.querySelector(".you");
const compScore = document.querySelector(".comp-score");
const youScore = document.querySelector(".you-score")
const h2 = document.querySelector("h2");

buttons.addEventListener("click", (e) => {
    let target = e.target;
    let computerChoice = getComputerChoice()
    playRound(target.id, computerChoice);
    
    if(humanScore === 5){
        h2.textContent = "You Won!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        h2.textContent = "You Lost!";
        humanScore = 0;
        computerScore = 0;
    }
    comp.textContent = `The computer chose: ${computerChoice}`;
    you.textContent = `You chose: ${target.id}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    youScore.textContent = `Your Score: ${humanScore}`;
})
