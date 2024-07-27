const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const playerScore = document.getElementById("playerSocre");
const computerScore = document.getElementById("computerSocre");

let player = 0;
let computer = 0;



function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's Tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "your win":"you Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "your win":"you Lose";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "your win":"you Lose";
                break;
               
        }
    }

    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent =result;

    resultDisplay.classList.remove("greentext","redtext")

    switch(result){
        case "your win":
            resultDisplay.classList.add("greentext");
            player++;
            playerScore.textContent = player;
            break;

        case "you Lose":
            resultDisplay.classList.add("redtext");
            computer++;
            computerScore.textContent = computer;
            break;
    }
}