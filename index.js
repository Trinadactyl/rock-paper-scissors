

//choose and return a random value from the list of weapons
function chooseRandom() {
  const choices = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random() * Math.floor(3));
  return choices[rand]  
}

// --------now replace the console logs with divs!!!!!!
function playRound(playerSelection, computerSelection) {
  const choices = ['rock', 'paper', 'scissors'];

   if (playerSelection === computerSelection) {
    console.log(`${playerSelection} vs. ${computerSelection}...It\'s a tie!`);
  }

   if (playerSelection === choices[0] && computerSelection == choices[1]) {
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You lose!`)
  }

   if (playerSelection === choices[0] && computerSelection == choices[2]) {
    console.log(`${playerSelection} vs. ${computerSelection}... Rock beats scissors! You win!`)
    
  }
   if (playerSelection === choices[1] && computerSelection == choices[0]) {
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You win!`)
  }

   if (playerSelection === choices[1] && computerSelection == choices[2]) {
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You lose!`)
    
  }

   if (playerSelection === choices[2] && computerSelection == choices[0]) {
    console.log(`${playerSelection} vs. ${computerSelection}...Rock beats scissors! You lose!`)
  }

   if (playerSelection === choices[2] && computerSelection == choices[1]) {
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You win!`)
  }
  return;
}


const btn = document.querySelectorAll(".btn")
btn.forEach(b => {
  b.addEventListener('click', () => {
    playRound(b.getAttribute("id"), chooseRandom())
  })
});


//play a series of rounds and track scores
function playRounds(num) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i<num; i++) {
    console.log(`round ${i+1}...`)

    const playerSelection = prompt('Pick one');         //**********change this value to play against computer!**********
    const computerSelection = chooseRandom();
    
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('win')) {
      playerScore++;
      console.log(`you:${playerScore}, computer:${computerScore}`);
    }
    else if (result.includes('lose')) {
      computerScore++;
      console.log(`you:${playerScore}, computer:${computerScore}`);
    }
  }
  alert(playerScore === computerScore ? 'tie' : playerScore > computerScore ? 'You\'re the grand champion!' : 'Computer won') 
} 

//playRounds(5);