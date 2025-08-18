function getComputerChoice(){
    let item;
    let randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt== 1){
        item = "paper";
    } else if(randomInt == 2){
        item = "rock";
    }else{
        item = "scissors";
    }
    return item;
}

function playRound(compChoice,PlayerChoice){
    
    if (compChoice==PlayerChoice){
        console.log("TIE!");
        return 0;
    }

    if (compChoice == "paper" && PlayerChoice == "rock" ||
        compChoice == "rock" && PlayerChoice == "scissors" ||
        compChoice == "scissors" && PlayerChoice == "paper") {
        console.log(`You Lose! ${compChoice} beats ${PlayerChoice}`);
        return 1;
    } else {
        console.log(`You Win! ${PlayerChoice} beats ${compChoice}`);
        return 2;
    }
}


function game(){
    let compScore = 0;
    let playerScore = 0;

    while (compScore < 5 && playerScore < 5) {
        const playerSelection = prompt("choose your weapon: ");
        computerSelection = getComputerChoice(); 
        const rounds = playRound(computerSelection,playerSelection)
      
        if (rounds == 1) {
          compScore++;
        } else if (rounds == 2) {
          playerScore++;
        }
      }
    alert(compScore);
    alert(playerScore);
    if (compScore > playerScore) {
    return("The Computer Won!");
    } else {
    return("You won!");
    }
}


console.log(game());