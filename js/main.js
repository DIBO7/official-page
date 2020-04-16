"use strict";

let profile = [
	/*profiles contains arrays of my information [name, value]*/
	["Name", "Ibrahim Oduola"],
	["Age", "21 years old"],
	["Speciality/Preference", "Server-side/Back-end development"],
];


let about = [
/*About contains arrays of paragraphs... the formatters treats an array as a paragaraph*/
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
];

let project = [
	/*project holds arrays of information about my projects
	the first item in the array is the name of the project
	the second item in the array is the link to the project's webpage
	and the final item is a little detail about the project*/
	["Web Portfolio", '',
	"This webpage is my first official web portfolio. It is a static page designed with HTML, CSS and vanilla Javascript from scratch (no bootstraps) and served via github pages. I designed it to be interractive, simple and elegant."],
	["Django Abstract Startpoint", 'https://ibra-portfolio.github.io/DASP-docs/',
	"Django Abstract Startpoint is my open-source python code that helps django developers bypass certain usual django setups, thus, taking a newly created django project to a point where developers can go straight to writing the important stuff and it would automatically write/edit the usual stuff."]
];

let skill = [
	/*the skill also contains arrays of skill
	the first item is the array is the skill
	and the second is the level of knowledge on that skill*/
	['Python', 5],
	["Javascript (vanilla)", 4],
	['Django', 5],
	["RESTful API (Django Rest Framework)", 5],
	['React', 0],
	['Jquery', 1],
	['Postgresql', 1],
	['MySql', 1],
	['MongoDB', 0],
	['HTML5', 4],
	['CSS3', 3],
	['Bootstrap', 3],
	['Websockets (Redis & Django channels)', 3],
	["Microsoft Azure", 3],
	['Heroku', 5],
	["pip packages", 5],
	['npm', 3],
	['git', 5],
	['VS code', 4],
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
			infoBody.innerHTML = profileFormatter(profile)
		}else if(i === 0){
			infoBody.innerHTML = aboutFormatter(about)
		}else if (i === 3){
			infoBody.innerHTML = skillFormatter(skill)
			skill.forEach(s => {
				const canvas = document.getElementById(ToID(s[0]));
				let diagram = canvas.getContext('2d');
				diagram.fillStyle = 'blue';
				diagram.fillRect(2, 2, 20*s[1]||5, 15)
			})
		}else if (i === 2){
			infoBody.innerHTML = projectFormatter(project)
		}
	})
}

function highligher(e){
	/*This ensure thats only the clisked linked passed as the 'e' argument
	is highlighted*/
	for (let items of selectors){
		items.classList.remove('active');
	}
	return e.classList.add("active");
}

function profileFormatter(array){
	/*this is the formatter for the profile contents*/
	let output = "";

	array.forEach(a=>{
		let statement = "<p class='skillClass'> ";
		statement += a[0] + ': ' + a[1];
		statement += " </p>";
		output += statement
	})
	return output
}

function aboutFormatter(array){
	/*this i sthe formatter for the about contents*/
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
	/*this is the formatter for the skills contents*/
	let output = "";

	array.forEach(a => {
		let statement = `<div class='skillClass'> ${a[0]} <canvas id=${ToID(a[0])} width=100 height=10> </canvas></div>`;
		output += statement;
	})
	return output;
}

function projectFormatter(array){
	/*This is the formatter for the project contents*/
	let output = "";
	let c = 0;
	array.forEach(a => {
		c++;
		let paragraph = `<div class='projectClass'> 
						<a href='${a[1]}' target='_blank'>${c}. ${a[0]} </a> 
						<p> ${a[2]} </p> 
						</div>`;
		output += paragraph
	})
	return output
}


function ToID(word){
	//Changes anyword to ID by replacing the whitespaces with "_"
	return word.replace(/\s/g, '_')
}