import {
	home,
	popup,
	titlePopUp,
	containerWork 
} from "../imports/document.js"

import fillAbout from "../controller/controllerAbout.js"

export function fill(about){
  home.style.display = "none"
  popup.style.display = "block"
  titlePopUp.innerHTML = "About"
  containerWork.innerHTML = fillAbout(about)
}