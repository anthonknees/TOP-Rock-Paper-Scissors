function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Credit goes to stackoverflow for the above function
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range


function getComputerChoice() {
  let randomNumber = getRandomIntInclusive(1, 3);
  if (randomNumber === 1){
    return "Rock"
  }
  else if (randomNumber === 2){
    return "Paper"
  }
  else if (randomNumber === 3){
    return "Scissors"
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?")
}




function playGame(){

  let humanScore = 0;
  let computerScore = 0;

  for (i = 1; i <= 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("You won the best of 5!")
  }
  else if (computerScore > humanScore) {
    console.log("You lost the best of 5!")
  }
  else if (computerSCore === humanScore){
    console.log("The best of 5 resulted in a tie!")
  }

  function playRound(humanChoice, computerChoice) {
    humanChoiceLowerCase = humanChoice.toLowerCase();
    computerChoiceLowerCase = computerChoice.toLowerCase();
    if (humanChoiceLowerCase === "rock" && computerChoiceLowerCase === "paper"){
      console.log("You lose! Paper beats Rock”.")
      computerScore ++;
    }
    else if (humanChoiceLowerCase === "rock" && computerChoiceLowerCase === "rock"){
      console.log("Tie! Both players chose rock!")
    }
    else if (humanChoiceLowerCase === "rock" && computerChoiceLowerCase === "scissors"){
      console.log("You win! Rock beats scissors!")
      humanScore ++;
    }
    else if (humanChoiceLowerCase === "paper" && computerChoiceLowerCase === "rock"){
      console.log("You win! Paper beats rock!")
      humanScore ++;
    }
    else if (humanChoiceLowerCase === "paper" && computerChoiceLowerCase === "paper"){
      console.log("Tie! Both players chose paper!")
    }
    else if (humanChoiceLowerCase === "paper" && computerChoiceLowerCase === "scissors"){
      console.log("You lose! Scissors beats paper!")
      computerScore ++;
    }
    else if (humanChoiceLowerCase === "scissors" && computerChoiceLowerCase === "rock"){
      console.log("You lose! Rock beats scissors!")
      computerScore ++;
    }
    else if (humanChoiceLowerCase === "scissors" && computerChoiceLowerCase === "paper"){
      console.log("You win! Scissors beats paper!")
      humanScore ++;
    }
    else if (humanChoiceLowerCase === "scissors" && computerChoiceLowerCase === "scissors"){
      console.log("Tie! Both players chose scissors!")
    }
    else {
      console.log("This outcome hasn't been written yet..")
    }
  }
  
  
}


