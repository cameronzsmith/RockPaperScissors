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

// Click event function that takes in a numeric index (0 = Rock, 1 = Paper, 2 = Scissors)
function playRound(playerChoice) {
    if(!gameOver()) {
        let convertedInput = convertIndexToString(playerChoice);
        let computerInput = computerPlay();
    
        checkPointScored(convertedInput, computerInput);
    
        document.getElementById("computerChoiceHidden").style = "display: inline-block;";
        document.getElementById("playerChoice").style.textTransform = "uppercase";
        document.getElementById("playerChoice").innerHTML = convertedInput;
        document.getElementById("computerChoice").style.textTransform = "uppercase";
        document.getElementById("computerChoice").innerHTML = computerInput;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
}


// Checks if the player scored a point.
function checkPointScored(playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        ++drawCounter;
        document.getElementById("drawTextHidden").style.display = "block";
        document.getElementById("drawCounter").innerHTML = drawCounter + "<br><br>";
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

// Returns true if the player is a winner, false if the computer is the winner.
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


/* Helper Functions */

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