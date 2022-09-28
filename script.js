const aboutButton = document.getElementById("about")
const workButton = document.getElementById("works")
const sourceButton = document.getElementById("source")
const closeButton = document.getElementById("close")

const popup = document.getElementById("popup")
const home = document.getElementById("home")

const titlePopUp = document.getElementById("title")
const subTitlePopUp = document.getElementById("subTitle")
const paragraphPopUp = document.getElementById("paragraph")
const soucerTitle = document.getElementById("sourcer")
const platformTitle = document.getElementById("platform")
const stackTitle = document.getElementById("stack")

const containerWork = document.getElementById("works-container")


popup.style.display = "none"
home.style.display = "flex"

function fillPopUp({ website, text }) {
  const aboutHTML = `
      <div class="card-work">
        <p id="paragraph">${text}</p>
        <span>WebSite</span> <a href="${website}" target="_blank">${website}</a>
      </div >
    `
  containerWork.innerHTML = aboutHTML
}

function fillPopUpWork({
  workTitle,
  text,
  stack,
  repository,
  platform
}) {

  const source = `<span>SOURCE</span> <a href="https://${repository}" target="_blank"> ${repository}</a>`
  const platformHTML = `<p id="platform"> <span>PLATFORM</span> ${platform}</p>`
  const stackHTML = `<p id="platform"> <span>STACK</span> ${stack}</p>`

  const workBlock = `
    <div class="card-work">
        <h2 id="subTitle">${workTitle}</h2>
        <p id="paragraph">${text}</p>
        <ul>
          <li>
            <p id="sourcer">${source}</p>
          </li>
          <li>
            <p id="platform">${platformHTML}</p>
          </li>
          <li>
            <p id="stack">${stackHTML}</p>
          </li>
        </ul>
      </div>
    `

  return workBlock;
}

aboutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("about")
  home.style.display = "none"
  popup.style.display = "block"
  titlePopUp.innerHTML = "About"

  const about = {
    text: "João Gustavo is a developer in training with a passion for technology. He loves solving real-life problems with code. When not online, he loves hanging out with his friends. He is currently studying to be able to live off his passion.",
    website: "https://bispolinks.vercel.app/"
  }
  fillPopUp(about)
})

workButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("work")
  home.style.display = "none"
  popup.style.display = "block"
  titlePopUp.innerHTML = "Work"

  const works = [{
    workTitle: "Tdgo CLI",
    text: "With the objective of being a simple and useful application, Tdgo comes to solve a personal problem, as I spend many hours of my day in front of a terminal it is much faster for me to register a task and organize myself using it, hence the Tdgo",
    stack: "Go Lang",
    repository: "github.com/jgbispo/tdgo",
    platform: "CLI"
  },
  {
    workTitle: "Simple ToDo",
    text: "Mobile application for to-do list annotation made in react, new version will be released soon.",
    stack: "NodeJS, Electron, React Native",
    repository: "github.com/jgbispo/simple-todo",
    platform: "Mobile"
  },
  {
    workTitle: "Finance JG ",
    text: "With the objective of being a simple and useful application, Tdgo comes to solve a personal problem, as I spend many hours of my day in front of a terminal it is much faster for me to regist",
    stack: "NodeJS, Electron, React Native",
    repository: "github.com/jgbispo/financejg",
    platform: "Web"
  },
  {
    workTitle: "Tdgo CLI",
    text: "A desktop appplication made to be the basis of future projects, a markdown editor and notepad as well. The idea is to develop the applicatioon to be used by developers.",
    stack: "NodeJS, Electron, React",
    repository: "github.com/jgbispo/editor-markedown",
    platform: "Windows, Linux and MacOs"
  }
  ]

  works.map(item => {
    containerWork.innerHTML += fillPopUpWork(item)
  })
})

sourceButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("source")
  window.open('https://github.com/jgbispo/homepagejsifes', '_blank');
})

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("close")
  popup.style.display = "none"
  containerWork.innerHTML = ""
  home.style.display = "flex"
})
