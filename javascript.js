function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Credit goes to stackoverflow for the above function
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range


let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorsButton = document.querySelector(".scissors")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = getRandomIntInclusive(1, 3);
  if (randomNumber === 1) {
    return "Rock"
  }
  else if (randomNumber === 2) {
    return "Paper"
  }
  else if (randomNumber === 3) {
    return "Scissors"
  }
}

// function getHumanChoice() {
//   return prompt("Rock, paper or scissors?")
// }

rockButton.addEventListener("click", () => {
  console.log("Rock was chosen")
  humanChoice = "rock"
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
})

paperButton.addEventListener("click", () => {
  humanChoice = "paper"
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
})

scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors"
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
})

let resultsDiv = document.querySelector("#results");
let resultsPara = document.querySelector(".results-para");
let runningScorePara = document.querySelector(".running-score")

function playRound(humanChoice, computerChoice) {
  humanChoiceLowerCase = humanChoice.toLowerCase();
  computerChoiceLowerCase = computerChoice.toLowerCase();

  if (humanChoiceLowerCase === "rock" && computerChoiceLowerCase === "paper") {
    resultsPara.textContent = ("You lose! Paper beats Rock”.")
    computerScore++;
  }
  else if (humanChoiceLowerCase === "rock" && computerChoiceLowerCase === "rock") {
    resultsPara.textContent = ("Tie! Both players chose rock!")
  }
  else if (humanChoiceLowerCase === "rock" && computerChoiceLowerCase === "scissors") {
    resultsPara.textContent = ("You win! Rock beats scissors!")
    humanScore++;
  }
  else if (humanChoiceLowerCase === "paper" && computerChoiceLowerCase === "rock") {
    resultsPara.textContent = ("You win! Paper beats rock!")
    humanScore++;
  }
  else if (humanChoiceLowerCase === "paper" && computerChoiceLowerCase === "paper") {
    resultsPara.textContent = ("Tie! Both players chose paper!")
  }
  else if (humanChoiceLowerCase === "paper" && computerChoiceLowerCase === "scissors") {
    resultsPara.textContent = ("You lose! Scissors beats paper!")
    computerScore++;
  }
  else if (humanChoiceLowerCase === "scissors" && computerChoiceLowerCase === "rock") {
    resultsPara.textContent = ("You lose! Rock beats scissors!")
    computerScore++;
  }
  else if (humanChoiceLowerCase === "scissors" && computerChoiceLowerCase === "paper") {
    resultsPara.textContent = ("You win! Scissors beats paper!")
    humanScore++;
  }
  else if (humanChoiceLowerCase === "scissors" && computerChoiceLowerCase === "scissors") {
    resultsPara.textContent = ("Tie! Both players chose scissors!")
  }
  else {
    resultsPara.textContent = ("This outcome hasn't been written yet..")
  }

  let winnerReusltsPara = document.querySelector(".winner-results")
  if (humanScore == 2){
    winnerReusltsPara.textContent = "Human wins! Play again to start a new game"
    runningScorePara.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore == 2){
    winnerReusltsPara.textContent = "Computer wins! Play again to start a new game"
    runningScorePara.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } else {
    winnerReusltsPara.textContent = ""
    runningScorePara.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
  }


  
}


function playGame() {



  // for (i = 1; i <= 5; i++){
  //   playRound(getHumanChoice(), getComputerChoice());
  // }
  // if (humanScore > computerScore) {
  //   console.log("You won the best of 5!")
  // }
  // else if (computerScore > humanScore) {
  //   console.log("You lost the best of 5!")
  // }
  // else if (computerSCore === humanScore){
  //   console.log("The best of 5 resulted in a tie!")
  // }




  
  

}


