/* Global Variables */

let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;

/* Click Event Listeners */

let rock = document.getElementById("rock");
rock.addEventListener("click", function() {
     playRound(0);
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function() {
    playRound(1);
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
    playRound(2);
});

/* Game Functions */

// This function is called when the player clicks on one of the game buttons.
function playRound(playerChoice) {
    if(!gameOver()) {
        let convertedInput = convertIndexToString(playerChoice); // Converts the input from 0 -> rock, 1 -> paper, 2 -> scissors.
        let computerInput = computerPlay(); // Computer randomly picks rock, paper, or scissors
    
        checkResults(convertedInput, computerInput);
        displayElements(convertedInput, computerInput); // This will display our DOM elements  
    }
}

// This function will check who scored a point, and also alerts the user if they've won the game.
function checkResults(playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        ++drawCounter; // Increment our draw counter
        document.getElementById("drawTextHidden").style.display = "block"; // Stop hiding our draw counter
        document.getElementById("drawCounter").innerHTML = drawCounter + "<br><br>"; // Update the counter.
    } else if(determineWinner(playerChoice, computerChoice)) {        
        ++playerScore;

        if(playerScore == 5) {
            alert("You win!");
        }
    } else {
        ++computerScore;

        if(computerScore == 5) {
            alert("You lose!");
        }
    }
}

/* Helper Functions */

// Returns true if the player is a winner, false if the computer is the winner or a draw has occurred.
function determineWinner(playerChoice, computerChoice) {
    if(playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "paper" && computerChoice == "rock" ||
            playerChoice == "scissors" && computerChoice == "paper") {
                return true;
    }

    return false;
}


// Returns true if either the player or computer have won the game.
function gameOver() {
    return (playerScore == 5 || computerScore == 5) ? true : false;
}


// This function will display, update, and stylize our DOM elements.
function displayElements(playerChoice, computerChoice) {
    document.getElementById("computerChoiceHidden").style = "display: inline-block;";

    document.getElementById("playerChoice").style.textTransform = "uppercase";
    document.getElementById("playerChoice").innerHTML = playerChoice;

    document.getElementById("computerChoice").style.textTransform = "uppercase";
    document.getElementById("computerChoice").innerHTML = computerChoice;

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

// Computer makes a random choice.
function computerPlay() {
    return convertIndexToString(Math.floor(Math.random() * 3));
}


// Converts numbers into rock, paper, or scissors.
function convertIndexToString(index) {
    switch(index) {
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissors"; break;
        default: return "unknown"; break;
    }
}