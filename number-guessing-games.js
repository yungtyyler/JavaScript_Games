function runGame() {
    
    let guessString = '';
    let guessNumber = '';
    let correct = false;
    const target = Math.floor(Math.random() * 100)+1;
    let numTries = 0;

    do {
        guessString = prompt('Im thinking of a number between 1-100.\n\nWhat is the number?');
        if (guessString === null){
            return;
        }
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('Nice! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly!');

}

function checkGuess(guessNumber, target) {
    let correct = false;
    
    if (guessNumber === target) {
        correct = true;
        alert('Congratulations!')
    } else if ((guessNumber < target) && (guessNumber < 100) && (guessNumber > 0)) {
        alert("Guess is too small! Try again.")
    } else if ((guessNumber > target) && (guessNumber < 100) && (guessNumber > 0)) {
        alert("Guess is too big! Try again.")
    } else if ((guessNumber > 100) || (guessNumber < 0)) {
        alert("Guess must be between 1-100.")
    } else {
        alert("Guess must be a number.")
    }
    return correct;
}