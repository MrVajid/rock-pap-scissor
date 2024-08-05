'use strict'
console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.random();
    if(random <= 0.33){
        console.log(random);
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

function getHumanChoice(){
    return prompt("Enter your choice:").toLowerCase();
}

function playRound(computerChoice, humanChoice){
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

for(let i = 0; i < 5; i++){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
}
if(humanScore > computerScore){
    console.log(`You won! Your score is ${humanScore} out of 5`);
}
else if(humanScore < computerScore){
    console.log(`You lost! Your score is ${humanScore} out of 5`);
}
else{
    console.log("It's a tie!");
}