// write a fuction that accepts a guess (number) 
// returns a function that allows a user to guess random whole number between 0-99
// everytime you create a new game a new random num should be selected if guess is less than 
// return num too high else num too low 


function guessingGame() {

    let randNum = Math.floor(Math.random() * 100)
    console.log("randumNum:", randNum)
    let count = 1;
    let won = false;

    return function game(guess){
        if(won === true) {
            return "The game is over, you already won!"
        } else if(guess > randNum) {
            count++;
            return `${guess} is too high!`;
        } else if(randNum > guess){
            count++;
            return `${guess} is too low!`;
        } else {
            won = true;
            return `You win! You found ${randNum} in ${count} guesses.`;
        }
    }
}

// let game = guessingGame();
// let result1 = game(50); // "50 is too low!"
// let result2 = game(90); // "90 is too high!"
// let result3 = game(70); // "You win! You found 70 in 3 guesses."
// let result4 = game(70); // "The game is over, you already won!"

// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)

module.exports = { guessingGame };

