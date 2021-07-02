const stats = {
round: 0,
playerScore: 0,
computerScore: 0,
playerChoice: '',
computerChoice: '',
tieCount: 0,
winner: ''
}


//choose and return a random value from the list of weapons
function chooseRandom() {
  const choices = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random() * Math.floor(3));
  return choices[rand]  
}


function playRound(playerSelection, computerSelection) {
  const choices = ['rock', 'paper', 'scissors'];

  stats.playerChoice = playerSelection;
  stats.computerChoice = computerSelection;

   if (playerSelection === computerSelection) {
     stats.tieCount++;
    stats.winner = 'Tie';
    console.log(`${playerSelection} vs. ${computerSelection}...It\'s a tie!`);
  }
    if (playerSelection === choices[0] && computerSelection == choices[2]) {
    stats.playerScore++; 
    stats.winner = 'You Win';
    console.log(`${playerSelection} vs. ${computerSelection}... Rock beats scissors! You win!`)
  }
    if (playerSelection === choices[1] && computerSelection == choices[0]) {
    stats.playerScore++;
    stats.winner = 'You Win';
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You win!`)
  }
   if (playerSelection === choices[2] && computerSelection == choices[1]) {
    stats.playerScore++;
    stats.winner = 'You Win';
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You win!`)
  } 
   if (playerSelection === choices[0] && computerSelection == choices[1]) {
    stats.computerScore++ 
    stats.winner = 'Computer Wins'
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You lose!`)
  }
    if (playerSelection === choices[1] && computerSelection == choices[2]) {
    stats.computerScore++;
    stats.winner = 'Computer Wins';
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You lose!`)  
  }
    if (playerSelection === choices[2] && computerSelection == choices[0]) {
    stats.computerScore++;
    stats.winner = 'Computer Wins';
    console.log(`${playerSelection} vs. ${computerSelection}...Rock beats scissors! You lose!`)
  }
  return;
}


//**************EVENT HANDLERS**********/
function handleWeaponClick() {
  const btn = document.querySelectorAll(".btn"); 
  btn.forEach(b => {
    b.addEventListener('click', () => {
      playRound(b.getAttribute("id"), chooseRandom());
      stats.round++;
      stats.playerChoice = b.getAttribute("id");
      displayStats()
      console.log(stats.round)
    })
  });
}

function handleResetClick() {
  const resetBtn = document.querySelector("#reset");

  resetBtn.addEventListener('click', () => {
    stats.round = 0;
    stats.playerScore = 0;
    stats.computerScore = 0;
    stats.tieCount = 0
    stats.playerChoice = '';
    stats.computerChoice = '';
    stats.winner = '';
    
    displayStats();
  })
}


//****************HTML TEMPLATES**********/
function displayStats() {
  const statBox = document.querySelector("#stats");
  const resultBox = document.querySelector("#results")

  statBox.innerHTML = 
  `<h2>Round: ${stats.round}</h2>
    <div id="scores"> 
      <p>You: ${stats.playerScore}</p>
      <p>Computer: ${stats.computerScore}</p>
      <p>Tie: ${stats.tieCount}</p>   
    </div>`

  resultBox.innerHTML = 
    `<p>${stats.winner}</p>

     <div id="inner-results">
      <span>You chose: <b> ${stats.playerChoice} </b></span>
      <span>Computer chose: <b> ${stats.computerChoice} </b></span> 
     </div>
    `
  
}



handleWeaponClick();
handleResetClick();
