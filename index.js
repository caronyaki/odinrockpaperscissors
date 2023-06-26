var getComputerChoice = Math.random();
  if (getComputerChoice < 0.34) {
	getComputerChoice = "rock";
  } else if(getComputerChoice <= 0.67) {
	getComputerChoice = "paper";
  } else {
	getComputerChoice = "scissors";
  } 



function checkWinner(playerSelection, computerSelection){
if (playerSelection == computerSelection){

    return "Tie";
}
if (
    (playerSelection == "rock" && computerSelection == "Scissor") ||
    (playerSelection == "scissor" && computerSelection == "Paper") ||
     (playerSelection == "paper" && computerSelection == "Rock")
){
    return "Player";
}
 else {
    return "Computer";
}
}




  
function compare (playerSelection,computerSelection) {
    
    if (playerSelection === computerSelection) {
        
        return "The result is a tie!" + " " + "Lets play again." ;
    }
    
    else if (playerSelection === "rock") {
        
        if (computerSelection === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + "Your really smart computer beat you.";
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + "Your really smart computer beat you.";
        }
            
    }
    
    else if (playerSelection === "scissors") {
        
        if (computerSelection === "rock") {
            return "rock wins" + "<br>" + "Your really smart computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    }
    
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for(let i = 0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player"){
       scorePlayer++;

    } 
    else if (checkWinner(playerSelection, computerSelection) == "Computer");
  scoreComputer++;

}
}

var userChoice = prompt("Do you choose rock, paper or scissors?");

document.write("Computer chose: " + getComputerChoice + "<br>");
   document.write(compare(userChoice,getComputerChoice));
    


