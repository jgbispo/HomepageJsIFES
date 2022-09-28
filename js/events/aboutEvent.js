import { about } from "../database.js"
import { fill } from '../modules/about.js'
import { aboutButton } from "../imports/document.js"

aboutButton.addEventListener("click", (e) => {
  e.preventDefault();
  fill(about)
})
