


const guess_field = document.querySelector(".guess_field");
const guess_btn = document.querySelector(".guess_btn");
const lowOrHi = document.querySelector(".lowOrHi");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");

let guess_count = 1;
let reset_btn;
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkguess(){
    let user_guess = Number(guess_field.value);
    if (guess_count === 1) {
        guesses.textContent = 'Previous guesses:';
      }

      guesses.textContent += user_guess + ' ';

      if(user_guess === randomNumber){
          lastResult.textContent = "congratulation you have won the game"
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = "";
          guesses.textContent = "";
          setGameOver();
        
      }
      else if( guess_count>10){
         lastResult.textContent = " you have lost the game";
         lastResult.style.backgroundColor ='red';
         guess_field.value = '';
         lowOrHi.textContent = "";
         guesses.textContent = "";
         setGameOver();

      }
      else{
          if(user_guess > randomNumber){
              lowOrHi.textContent = "guess value was higher then number";
          }
          else{
                  lowOrHi.textContent = "guess value was lower then number ";
          }

          }
          guess_count++;
          guess_field.value = '';
          guess_field.focus();
      }

// modified for git 

      function setGameOver() {
        guess_field.disabled = true;
        guess_btn.disabled = true;
        reset_btn = document.createElement('button');
        reset_btn.textContent = 'Start new game';
        document.body.appendChild(reset_btn);
        reset_btn.addEventListener('click', resetGame);
      }

      function resetGame() {
        guess_count = 1;
        const Paras = document.querySelectorAll('.Paras p');
        for(let i = 0 ; i < Paras.length ; i++) {
          Paras[i].textContent = '';
        }

        reset_btn.parentNode.removeChild(reset_btn);
        guess_field.disabled = false;
        guess_btn.disabled = false;
        guess_field.value = '';
        guess_field.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
 
guess_btn.addEventListener('click',checkguess);
