let randomNumber = Math.floor(Math.random() * 15) + 1;
let hint = document.querySelector('#hintSpan');
let count = 0;
let numberOfGuesses = document.querySelector('#numberOfGuesses');
let guesNumberDisplay = document.querySelector('#guessedNumber');
let numberInput = document.querySelector('#guessInput');
let guessButton = document.querySelector('#guessButton');
let answer = document.querySelector('.hint');

guessButton.addEventListener('click', gameEngine); 

function gameEngine(){
        let guessedNum = parseInt(numberInput.value);
        console.log(guessedNum);
    
        if (guessedNum > 0 && guessedNum < 16) {
    
            count++;
    
            guesNumberDisplay.innerHTML = guessedNum;
            numberOfGuesses.innerHTML = count;
            let mid = Math.floor((guessedNum + 15)/2) + 1;
    
            //Hint is devided into fout cetagories 2 halves of before the guessed number and vice versa
            if (guessedNum !== '') {
                if (guessedNum === randomNumber) {
    
                    answer.innerHTML = `<p>Congratulations You won game</p>`;
                    count = 0;
    
                }
                else if(guessedNum < randomNumber && guessedNum<=Math.floor(randomNumber/2)+1)
                    hint.innerHTML = 'too Small';
                else if(guessedNum < randomNumber && guessedNum>Math.floor(randomNumber/2)+1)
                    hint.innerHTML = 'Getting there';
                else if(guessedNum>randomNumber && guessedNum < mid)
                    hint.innerHTML = 'Getting there';
                else if(guessedNum > randomNumber && guessedNum >= mid)
                    hint.innerHTML = 'Too Large';
    
                if(count === 3){
                    numberInput.disabled = true;
                    answer.innerHTML = "<p>You ran out of guesses</p>";
                    guessButton.removeEventListener('click', gameEngine)
    
    
                }
            }
            else
                alert('Input a Number to Guess');
        }
        else
            alert("Number should be between 1 to 15.");
    
    
    
}