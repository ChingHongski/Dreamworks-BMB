window.addEventListener("DOMContentLoaded", fifteenSeconds);
var reminder;

function fifteenSeconds(){
	reminder = setInterval(function(){alert("Another 15 seconds have passed!");}, 15000)
}

function stopFifteenSeconds(){
	clearInterval(reminder);
}

let randomNum = Math.floor(Math.random() * 100) + 1;

var guessCount = 1;

const guesses = document.querySelector(".guesses");
const result = document.querySelector(".result");
const comparison = document.querySelector(".comparison");
const guessSubmit = document.querySelector(".guessSubmit");
const guessesField = document.querySelector(".guessesField");



function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	stopFifteenSeconds();
}
function checkGuess(){

let userGuess = Number(guessField.value)
if (guessCount === 1){
	guesses.testContent = "previos guesses: ";
}

guesses.textContent += userGuess + " ";

if (userGuess === randomNum){
	result.textContent = "Congratulations! You have saved saved Stitch and Lilo from the sand pit! :D";
	result.style.backgroundColor = "green";
	comparison.textContent = "";

	alert("The password is correct! You powered the wagon successfully, let's escape from the Sand Dump now!");
	setGameOver();
}	else{
	switch(guessCount){
		case 10:
			result.textContent = "No way out! We are trapped here forever! :(";
			comparison.textContent = "";

			alert("You guessed incorrectly too many times, the wagon is now broken! You are trapped here forever!");
			setGameOver();
			break;
		default:
			result.textContent = "Wrong password!";
			result.style.backgroundColor = "red";
			if(userGuess < randomNum) {
				comparison.textContent = "Your guess was too low!";
			} else if(userGuess > randomNum) {
				comparison.textContent = "Your guess was too high!";
			}

	guessCount++;
		guessField.value = "";
	}
}
}


guessSubmit.addEventListener("click", checkGuess);
