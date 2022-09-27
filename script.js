const aboutButton = document.getElementById("about")
const workButton = document.getElementById("works")
const sourceButton = document.getElementById("source")
const closeButton = document.getElementById("close")

const popup = document.getElementById("popup")

const titlePopUp = document.getElementById("title")
const subTitlePopUp = document.getElementById("subTitle")
const paragraphPopUp = document.getElementById("paragraph")
const soucerTitle = document.getElementById("sourcer")
const platformTitle = document.getElementById("platform")
const stackTitle = document.getElementById("stack")

function fillPopUp({ title, text }) {
	titlePopUp.innerHTML = title
	paragraphPopUp.innerHTML = text
}

function fillPopUpWork({
	title,
	subTitle,
	text,
	stack,
	repository,
	platform
}) {

	const source = `<span>SOURCE</span><a href="${repository}"> ${repository}</a>`
	const platformHTML = `<p id="platform"><span>PLATFORM</span> ${platform}</p>`
	const stackHTML = `<p id="platform"><span>STACK</span>${stack}</p>`
	
	subTitle.innerHTML = "subTitle"
	titlePopUp.innerHTML = title
	soucerTitle.innerHTML = source
	platformTitle.innerHTML = platformHTML
	stackTitle.innerHTML = stackHTML
	paragraphPopUp.innerHTML = text
}

aboutButton.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("about")
	const about = {
		title: "About",
		text: "João Gustavo is a developer in training with a passion for technology. He loves solving real-life problems with code. When not online, he loves hanging out with his friends. He is currently studying to be able to live off his passion."
	}
	fillPopUp(about)
})

workButton.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("work")
})

sourceButton.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("source")
})



closeButton.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("close")
	const work = {
		title: "Work",
		subTitle: "Tdgo CLI",
		text: "With the objective of being a simple and useful application, Tdgo comes to solve a personal problem, as I spend many hours of my day in front of a terminal it is much faster for me to register a task and organize myself using it, hence the Tdgo",
		stack: "Go Lang",
		repository: "github.com/jgbispo/tdgo",
		platform: "CLI"
	}
	fillPopUpWork(work)
})
