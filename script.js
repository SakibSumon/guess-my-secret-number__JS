'use strict';

let number = Math.trunc(Math.random(20) * 19) + 1;
console.log(number);
let totalscore = 0;
let highScore = 0;



//event listener for check btn
document.querySelector('.check').addEventListener('click', function () {
  //to display the secret value on the screen only or development process
  document.querySelector('.number').textContent = number;

  //fetching the input value
  let guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);

  //checking if the input is outside the range
  if (guess > 0 && guess <= 20) {
    if (number === guess) {
      document.querySelector('.message').textContent =
        ' 🎉🎊🥳 congratulations';

      //calculating totalscore and storing it to a variable
      totalscore = totalscore + number;
      document.querySelector('.score').textContent = totalscore;

      //generating new secret everytime user guess the correct number
      number = Math.trunc(Math.random(20) * 20) + 1;
      console.log('secret number again ' + number);
      document.querySelector('.number').textContent = number;

      //calculating and comparing high score and storing to a variable
      let temphigh;
      temphigh = totalscore;
      if (temphigh > highScore) {
        highScore = temphigh;
      }
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'Too low, try again ';
      totalscore--;
      document.querySelector('.score').textContent = totalscore;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Too high, try again ';
      totalscore--;
      document.querySelector('.score').textContent = totalscore;
    }
  } else {
    document.querySelector('.message').textContent = `Invalid Input ⛔`;
  }

});

//eventlistener for again btn
document.querySelector('.again') .addEventListener('click' , function(){

    

})