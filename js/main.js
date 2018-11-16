// Variables
var jackpot, userNumber;
var userTries = 0;

//Jackpot number
jackpot = Math.floor(Math.random() * 101);

//Functions
function number() {
    userNumber = parseInt(prompt('Guess the hidden number'));
    if (userNumber === jackpot){
        userTries ++;
        document.getElementById('win').style.display = "block";
        document.getElementById('win').innerHTML = 'Congratulations you guessed the number with ' + userTries + ' ' + (userTries == 1 ? 'try' : 'tries');
        document.getElementById('user-number').style.visibility = 'hidden';
    }else if(userNumber !== jackpot){
        userTries ++;
        wrongAnswer();
        document.getElementById('tries').innerHTML = 'You have ' + userTries + ' ' + (userTries == 1 ? 'unsuccessful attempt!' : 'unsuccessful attempts!');
    }
    function wrongAnswer() {
        if (userNumber < jackpot) {
            document.getElementById('hint').innerHTML = 'Fail, the number is bigger than ' + userNumber + '\!';
        }else if (userNumber > jackpot){
            document.getElementById('hint').innerHTML = 'Fail, the number is smaller than ' + userNumber + '\!';
        }
    }
}
