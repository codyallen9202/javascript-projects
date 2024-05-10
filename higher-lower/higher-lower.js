// No way does my professor think this is difficult

let numToGuess = Math.floor(Math.random() * 100) + 1;
let myNum = prompt("Guess a number between 1-100: ");

while (myNum != numToGuess)
{
    if (myNum < numToGuess)
    {
        alert("Too Low!");
    }
    else
    {
        alert("Too High!");
    }
    myNum = prompt("Guess a number between 1-100: ");
}

alert("Correct! The number was " + myNum);