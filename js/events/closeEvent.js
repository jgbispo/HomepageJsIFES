import { popup, containerWork, home, closeButton} from "../imports/document.js"

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none"
  containerWork.innerHTML = ""
  home.style.display = "flex"
})
