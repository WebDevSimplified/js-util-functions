import { addGlobalEventListener, createElement, qs, qsa } from "./domUtils.js"

console.log("Buttons:\n", qsa(".btn"))
console.log("Wrapper:\n", qs(".wrapper"))
console.log("Buttons In Wrapper:\n", qsa(".btn", qs(".wrapper")))

addGlobalEventListener("click", ".btn", e => {
  console.log(e.target.textContent)
})

addGlobalEventListener("click", ".btn", () => console.log("Runs once"), {
  once: true,
})

addGlobalEventListener(
  "click",
  ".btn",
  () => console.log("Only works on buttons in modal"),
  {},
  qs(".wrapper")
)

const element = createElement("button", {
  class: "btn",
  text: "New",
  dataset: { test: true },
  id: "new",
  "data-hi": "Yes",
})
qs(".wrapper").append(element)
