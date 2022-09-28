import {workButton} from "../imports/document.js"
import { works } from "../database.js"
import { fill } from '../modules/work.js'

workButton.addEventListener("click", (e) => {
  e.preventDefault();
  fill(works)
})
