function getComputerChoice() {
    let a = Math.random() + 2;
    if (a == 0) return "Rock";
    else if (a == 1) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    let a = prompt("Enter your choice: ");
    return a;
}

let humanScore = 0;
let computerScore = 0;

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
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        if (playRound().includes("win")) humanScore++;
        else if (playRound().includes("lose")) computerScore++;
    }
    if (humanScore > computerScore) return "Human win";
    else return "Computer win";
}

console.log(playGame());