import { 
	home,
	popup,
	titlePopUp,
	containerWork 
} from "../imports/document.js"

import fillWork from "../controller/controllerWork.js"

export function fill(works){
  home.style.display = "none"
  popup.style.display = "block"
  titlePopUp.innerHTML = "Work"

  works.map(item => {
    containerWork.innerHTML += fillWork(item)
  })
}