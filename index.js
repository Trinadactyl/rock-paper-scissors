const stats = {
round: 0,
player: 0,
computer: 0,
}


//choose and return a random value from the list of weapons
function chooseRandom() {
  const choices = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random() * Math.floor(3));
  return choices[rand]  
}


function playRound(playerSelection, computerSelection) {
  const choices = ['rock', 'paper', 'scissors'];
  const results = document.querySelector('#results');
  


   if (playerSelection === computerSelection) {
    results.innerHTML = `${playerSelection} vs. ${computerSelection}...It\'s a tie!`;
    console.log(`${playerSelection} vs. ${computerSelection}...It\'s a tie!`);
  }
    if (playerSelection === choices[0] && computerSelection == choices[2]) {
    stats.player++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Rock beats scissors! You win!`;  
    console.log(`${playerSelection} vs. ${computerSelection}... Rock beats scissors! You win!`)
  }
    if (playerSelection === choices[1] && computerSelection == choices[0]) {
    stats.player++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Paper covers rock! You win!`;  
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You win!`)
  }
   if (playerSelection === choices[2] && computerSelection == choices[1]) {
    stats.player++;
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Scissors cut paper! You win!`;
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You win!`)
  } 
   if (playerSelection === choices[0] && computerSelection == choices[1]) {
    stats.computer++
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Paper covers rock! You lose!` ;  
    console.log(`${playerSelection} vs. ${computerSelection}... Paper covers rock! You lose!`)
  }
    if (playerSelection === choices[1] && computerSelection == choices[2]) {
    stats.computer++
    results.innerHTML = `${playerSelection} vs. ${computerSelection}... Scissors cut paper! You lose!`;  
    console.log(`${playerSelection} vs. ${computerSelection}... Scissors cut paper! You lose!`)  
  }
    if (playerSelection === choices[2] && computerSelection == choices[0]) {
    stats.computer++
    results.innerHTML = `${playerSelection} vs. ${computerSelection}...Rock beats scissors! You lose!`; 
    console.log(`${playerSelection} vs. ${computerSelection}...Rock beats scissors! You lose!`)
  }
   {
    results.innerHTML = "";
  }
  return;
}

function render() {

}

//**************EVENT HANDLERS**********/
function handleWeaponClick() {
  const btn = document.querySelectorAll(".btn"); 
  btn.forEach(b => {
    b.addEventListener('click', () => {
      playRound(b.getAttribute("id"), chooseRandom());
      stats.round++;
      displayStats()
      console.log(stats.round)
    })
  });
}

  //why does button dissapear when other button is clicked
function handleResetClick() {
  const resetBtn = document.querySelector("#reset");

  resetBtn.addEventListener('click', () => {
    stats.round = 0;
    stats.player = 0;
    stats.computer = 0;
    
    displayStats();
    console.log("done. Round" + stats.round)
  })
}


//****************HTML TEMPLATES**********/
function displayStats() {
  const statbox = document.querySelector("#stats");

  statbox.innerHTML = 
  `Round: ${stats.round}
   Player Score: ${stats.player}
   Computer Score: ${stats.computer}`
}



handleWeaponClick();
handleResetClick();