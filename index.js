
let round = 0;
let player = 0;
let computer = 0;

//choose and return a random value from the list of weapons
function chooseRandom() {
  const choices = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random() * Math.floor(3));
  return choices[rand]  
}


function playRound(playerSelection, computerSelection) {
  const choices = ['rock', 'paper', 'scissors'];
  const results = document.querySelector('#results');
  const stats = document.getElementById("stats");

  let round = 0
  let playerScore = 0;
  let computerScore = 0;

   if (playerSelection === computerSelection) {
    round++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}...It\'s a tie!`;
    console.log(`${playerSelection} vs. ${computerSelection}...It\'s a tie!`);
    console.log(round, playerScore, computerScore);
  }
   else if (playerSelection === choices[0] && computerSelection == choices[2]) {
    round++;
    playerScore++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Rock beats scissors! You win!`;  
    console.log(`${playerSelection} vs. ${computerSelection}... Rock beats scissors! You win!`)
    console.log(round, playerScore, computerScore); 
  }
   else if (playerSelection === choices[1] && computerSelection == choices[0]) {
    round++;
    playerScore++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Paper covers rock! You win!`;  
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You win!`)
    console.log(round, playerScore, computerScore);
  }
  else if (playerSelection === choices[2] && computerSelection == choices[1]) {
    round++;
    playerScore++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Scissors cut paper! You win!`;
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You win!`)
    console.log(round, playerScore, computerScore);
  } 
  else if (playerSelection === choices[0] && computerSelection == choices[1]) {
    round++;
    computerScore++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Paper covers rock! You lose!` ;  
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You lose!`)
    console.log(round, playerScore, computerScore);
  }
   else if (playerSelection === choices[1] && computerSelection == choices[2]) {
    round++;
    computerScore++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Scissors cut paper! You lose!`;  
    results.innerHTML += `Round: ${round}`;
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You lose!`)  
    console.log(round, playerScore, computerScore);
  }
   else if (playerSelection === choices[2] && computerSelection == choices[0]) {
    round++;
    computerScore++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}...Rock beats scissors! You lose!`; 
    results.innerHTML += `Round: ${round}`;
    console.log(`${playerSelection} vs. ${computerSelection}...Rock beats scissors! You lose!`)
    console.log(round, playerScore, computerScore);
  }
  else {
    results.innerHTML = "";
  }
  return;
}


function handleWeaponClick() {
  const btn = document.querySelectorAll(".btn");
  btn.forEach(b => {
    b.addEventListener('click', () => {
      playRound(b.getAttribute("id"), chooseRandom())
    })
  });
}

function displayStats() {
  const stats = document. querySelector("stats");

  //stats.innerHTML = round;
  // stats.innerHTML += playerScore;
  // stats.innerHTML += computer;
  //const round = document.createElement("span");
  // const player = document.createElement("span");
  // const computer = document.createElement("span");

  stats.innerHTML = "Round:" + round;
  console.log('stats')
}

handleWeaponClick();
displayStats();