function getComputerChoice() {
    let a = Math.random() * 3;
    if (a == 0) return "Rock";
    else if (a == 1) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    let a = prompt("Enter your choice: ");
    return a;
}



function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice == "rock") {
        if (computerChoice == "paper") return "You lose!. Paper beat Rock";
        else if (computerChoice == "scissors") return "You win!. Rock beat Scissors";
        else return "Draw";
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") return "You lose!. Scissors beat Paper";
        else if (computerChoice == "Rock") return "You win!. Paper beat Rock";
        else return "Draw";
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") return "You lose!. Rock beat Scissors";
        else if (computerChoice == "paper") return "You win!. Scissors beat Paper";
        else return "Draw";
    }

    else return "?";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        let ans = playRound(humanSelection, computerSelection)
        console.log(ans);
        if (ans.includes("win")) humanScore++;
        else if (ans.includes("lose")) computerScore++;
    }
    if (humanScore > computerScore) return "Human win";
    else if (humanScore < computerScore) return "Computer win";
    else return "Draw";
}


console.log(playGame());