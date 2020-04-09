"use strict";

let profile = [
	["NAME", "IBRAHIM ODUOLA"],
	["AGE", "21 YEARS OLD"],
	["SPECIALITY/PREFERENCE", "SERVER-SIDE DEVELOPMENT/BACK-END DEVELOPMENT"],
]


let about = [
[
"Hi, thanks again for visiting my web portfolio. ",
"Actually, I am relatively new to the world of programming, however, I have been relentlessly working towards developing my skills and learning new valuable skills in the world of programming every single day for the past five years of my life. ",
"I am a final year nautical science student, and no that's not a course similar to computer science, its a course in the maritime industry. Despite that fact, I have been very dedicated to be the best programmer I can be and very eagered to learn more to be better.",
],
[
"The thing that got me into writing codes in the first place is the passion i have for problem solving. ", 
"I am a persistent problem solver and when I realize how facinating it is to actually write codes to productively solve problems for people, I had to teach myself lots of things about programming. ",
"I hope to work in teams of creative developers someday, not just web-app or software developers but all ranges of developers including artificial intelligence developers.",
],
]

let project = [
	["Web Portfolio", 
	"My online portfolio which is the webpage you are right now, is totally written with HTML, CSS and Javascript from scratch. I wrote everything myself."]
];

let skill = [
	['Python', 5],
	["Javascript (vanilla)", 5],
	['Django', 5],
	["RESTful API (Django Rest Framework)", 5],
	['React', 0],
	['Jquery', 1],
	['HTML', 4],
	['CSS', 3],
	['bootstrap', 3],
	["Azure", 3],
	['heroku', 5],
	["pip packages", 5],
	['npm', 3],
	['git', 5],
	['English language', 5],
	['Español', 2],
	['Arabic', 1],
]

const selectors = document.getElementById('informationTable').getElementsByTagName('a');
const infoBody = document.getElementById('informationBody');
const spanishButton = document.getElementById('esp');
const englishButton = document.getElementById('eng');
const arabicButton = document.getElementById('arb');

spanishButton.addEventListener('click', event => {
	event.preventDefault();
	alert('Sorry, the Spanish version of this webpage is not available at the moment!')
})

arabicButton.addEventListener('click', event => {
	event.preventDefault();
	alert('Sorry, the Arabic version of this webpage is not available at the moment!')
})

englishButton.addEventListener('click', event => {
	event.preventDefault();
	alert('You are viewing the English version of this webpage!')
})

for (let i=0; i<selectors.length; i++){
	selectors[i].addEventListener('click', event => {
		event.preventDefault();
		highligher(selectors[i]);
		let text;
		if (i === 1){
			text = profileFormatter(profile)
		}else if(i === 0){
			text = aboutFormatter(about)
		}else if (i === 3){
			text = skillFormatter(skill)
		}else if (i === 2){
			text = projectFormatter(project)
		}
		infoBody.innerHTML = text;
	})
}

function highligher(e){
	for (let items of selectors){
		items.classList.remove('active');
	}
	return e.classList.add("active");
}

/*PROFILE and PROJECTS use the same writng or displaying format,
where the key and values are withing one array.... let say typeOneFormatter

ABOUT uses a different displaying format...
where one paragraph amongs others are stored in one array.....let say typeTwoFormatter

& SKILL uses a differen array which is very similar to PROFILE AND PROJECTS kind of display format
except the value would not be displayed the way they are but used to compute a diagramatic proficiency level.... let say typeThreeFormatter*/


function profileFormatter(array){
	let output = "";

	array.forEach(a=>{
		let statement = "<p> ";
		statement += a[0] + ': ' + a[1];
		statement += " </p>";
		output += statement
	})
	return output
}

function aboutFormatter(array){
	let output = "";

	array.forEach(arrays => {
		let paragraph = "<p> ";
		for (let a of arrays){
			paragraph += a;
		}
		paragraph += "</p>";
		output += paragraph
	})
	return output
}

function skillFormatter(array){
	let output = "";

	array.forEach(a => {
		let statement = "<p> " + a[0] + " </p>";
		output += statement;
	})
	return output
}

function projectFormatter(array){
	let output = "";

	array.forEach(a => {
		let paragraph = "<p> " + a[0] + "</p> <p> " + a[1] + "</p>";
		output += paragraph
	})
	return output
}