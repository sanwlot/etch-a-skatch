import "./style.css"
// import { setupCounter } from "./counter.js"

document.querySelector("#app").innerHTML = `
  <div class="appContainer">
    <h1>Etch a Skatch!</h1>
    <button class="makeGridBtn">Make Grid</button>
    <button class="clearBtn">Clear</button>
    <div class="grid"></div>
  </div>
`

const grid = document.querySelector(".grid")
makeGrid(128)
// makeGrid(100 * 100)
document.addEventListener("click", (e) => {
  if (e.target.matches(".makeGridBtn")) {
    const gridSize = +prompt("Enter size of the Grid", 128)
    makeGrid(gridSize)
  }
  if (e.target.matches(".clearBtn")) {
    grid.innerHTML = ""
  }
})

document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square")) {
    e.target.style.background = getRandomColor()

    // If opacity is not set, default to 0.1
    if (!e.target.style.opacity) {
      e.target.style.opacity = "0.1"
    } else {
      // Convert opacity to a number, increment, and set it back as a string
      let currentOpacity = parseFloat(e.target.style.opacity)
      if (currentOpacity < 1) {
        // Ensure opacity doesn't exceed 1
        e.target.style.opacity = (currentOpacity + 0.2).toString()
      }
    }

    console.log(e.target.style.opacity)
  }
})

function getRandomColor() {
  const r = Math.floor(Math.random() * 256) // Random value for red (0-255)
  const g = Math.floor(Math.random() * 256) // Random value for green (0-255)
  const b = Math.floor(Math.random() * 256) // Random value for blue (0-255)

  return `rgb(${r},${g},${b})` // Returns an RGB color string
}
function makeGrid(gridSize) {
  grid.innerHTML = ""
  gridSize = gridSize ** 2
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    grid.append(square)
  }
}
