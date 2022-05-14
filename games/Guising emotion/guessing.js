let emotions = [
	'joy',
	'disgust',
	'anger',
	'sadness',
	'fear'
];

var answer = "";
var guessed = [];
var word_guessed = null;

function random_word(){
	answer = emotions[Math.floor(Math.random()*emotions.length)]
}

function keyboard(){
	let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split("").map(letter =>
		`<button class= "btn-lg btn-info m-2" id= "`+ letter +`" onClick= "guess('`+ letter +`')">` + letter + `</button>`).join("");
	document.getElementById("keyboard").innerHTML = buttonsHTML
}

function guess(letter_chose){
	guessed.indexOf(letter_chose) === -1 ? guessed.push(letter_chose): null;
	document.getElementById(letter_chose).setAttribute("disabled", true)
	if (answer.indexOf(letter_chose) >= 0){
		guessed_word();
		end()
	}
}

function end(){
	if(word_guessed == answer){
		document.getElementById("keyboard").innerHTML = "You Guessed it Right! Stitch knows what he is feeling now, Congrats!"
	}
}

function guessed_word(){
	word_guessed = answer.split("").map(letter =>
		(guessed.indexOf(letter) >= 0 ? letter: " _ ")).join("");
	document.getElementById('correct-word').innerHTML = word_guessed
}

function restart(){
	mistakes=0;
	guessed=[];
	random_word();
	keyboard();
	guessed_word();
}
random_word();
keyboard();
guessed_word();
