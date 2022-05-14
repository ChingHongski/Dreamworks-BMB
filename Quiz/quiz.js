function start() {
	document.getElementById("question").style.display = "none";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button3").style.display = "none";
	document.getElementById("name").style.display = "none";
	document.getElementById("image").style.display = "none";
}

const questions = [
	[
		["How would you describe yourself"],
		["Smart","Sarcastic","A born leader"]
	],
	[
		["Which of these jobs appeal to you the most?"],
		["Scientist","Engineer","Soldier"]
	],
	[
		["Which of these colors appeal to you the most?"],
		["Green","Red","Blue"]
	],
	[
		["Which of these is more important to you?"],
		["Knowledge","Money","Friendship"]
	],	
	[
		["Which of these would you do in your spare time?"],
		["Draw","Build","Play"]
	]
]

var questionNumber = 0;

function setQuestion() {
	document.getElementById("question").innerHTML = questions [questionNumber][0];
	document.getElementById("button1").innerHTML = questions[questionNumber][1][0];
	document.getElementById("button2").innerHTML = questions[questionNumber][1][1];
	document.getElementById("button3").innerHTML = questions[questionNumber][1][2];

	document.getElementById("question").style.display = "block";
	document.getElementById("button1").style.display = "block";
	document.getElementById("button2").style.display = "block";
	document.getElementById("button3").style.display = "block";
	document.getElementById("name").style.display = "none";
	document.getElementById("image").style.display = "none";
	document.getElementById("description").style.display = "none";
	document.getElementById("start").style.display = "none";
}

var hulk = 0
var ironman = 0
var captainamerica = 0

function addpoint(selected){
	if (selected==1) {
		hulk += 1;
	}
	else if (selected==2){
		ironman+=1;
	}
	else if (selected==3){
		captainamerica += 1;
	}	
}

function results(){
	let highest = Math.max(hulk, ironman, captainamerica)
	if (highest==hulk){
		document.getElementById("image").src = "https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg";
		document.getElementById("name").innerHTML = "<b>You resemble the Hulk<b><br><br>Fiercely protective of freinds and family, you are always there to help out in a time of need"
	}
	else if (highest==ironman){
		document.getElementById("image").src = "https://besthqwallpapers.com/Uploads/14-11-2020/144620/thumb2-fortnite-iron-man-skin-fortnite-characters-fortnite-red-stone-background-iron-man.jpg";
		document.getElementById("name").innerHTML = "<b>You resemble Ironman<b><br><br>Tony Stark is ongoing effort to the world from evil forces that he knows."
	}
	else if (highest==captainamerica){
		document.getElementById("image").src = "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg";
		document.getElementById("name").innerHTML = "<b>You resemble Captain America<b><br><br>Embracing the mantel of team leader, Captain America must find a way to rally The Avengers."
	}
	document.getElementById("name").style.display = "block";
	document.getElementById("image").style.display = "block";
	document.getElementById("question").style.display = "none";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button3").style.display = "none";
}

function Button1_clicked(){
	addpoint(1);
	questionNumber += 1;
	if (questionNumber == 5){
		results();
	}
	else{
		setQuestion();
	}
}

function Button2_clicked(){
	addpoint(2);
	questionNumber += 1;
	if (questionNumber == 5){
		results();
	}
	else{
		setQuestion();
	}
}

function Button3_clicked(){
	addpoint(3);
	questionNumber += 1;
	if (questionNumber == 5){
		results();
	}
	else{
		setQuestion();
	}
}



