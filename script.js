// / Global var ---
// No. of rws and coulmns in game board
let rows = 3
let columns = 3

// The final pattern of the puzzle
const finalImgOrder = [
  'http://localhost:5500/puzzle/1.jpg',
  'http://localhost:5500/puzzle/2.jpg',
  'http://localhost:5500/puzzle/3.jpg',
  'http://localhost:5500/puzzle/4.jpg',
  'http://localhost:5500/puzzle/5.jpg',
  'http://localhost:5500/puzzle/6.jpg',
  'http://localhost:5500/puzzle/7.jpg',
  'http://localhost:5500/puzzle/8.jpg',
  'http://localhost:5500/puzzle/9.jpg'
]

// The puzzle once level one clicked
let puzzleOrder = ['4', '6', '2', '8', '5', '3', '1', '9', '7']

// Puzzle peices to be draged and droped
let referencePuz
let swapPuz

let span = document.getElementsByClassName('close-button')[0]

// Start the game by showing the board ---> change display to flex
function startGame() {
  document.getElementById('board').style.display = 'flex'
}

// After final order acheived show popup msg
function showWinMsg() {
  document.getElementById('gameWin').style.display = 'block'
}

// click on x to close pop-up text msg ---> by changing its display to none
span.onclick = function () {
  document.getElementById('gameWin').style.display = 'none'
}

// Loading the puzzle board
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
    // load img in board <img id="r-c"
    let puzzle = document.createElement('img')
    puzzle.id = r.toString() + '-' + c.toString()

    puzzle.src = 'puzzle/' + puzzleOrder.shift() + '.jpg'

    // Append img in div of #board id
    document.getElementById('board').append(puzzle)

    // Allow to drag and drop the puzzle pieces
    puzzle.addEventListener('dragstart', startDrag)
    puzzle.addEventListener('dragover', moveArround)
    puzzle.addEventListener('dragenter', enter)
    puzzle.addEventListener('dragleave', leave)
    puzzle.addEventListener('drop', dropPuz)
    puzzle.addEventListener('dragend', dragEnd)
  }
}

// Function to drag puzzle peice
function startDrag() {
  referencePuz = this
}

function moveArround(move) {
  move.preventDefault()
}

// To swap puzzle between each other
function enter(e) {
  e.preventDefault()
}

function leave() {}

// Drop the puzzle
function dropPuz() {
  swapPuz = this
}

// End the drag event
function dragEnd() {
  let currentPuz = referencePuz.src
  let swappedPuz = swapPuz.src

  referencePuz.src = swappedPuz
  swapPuz.src = currentPuz

  // After each dragEnd event finished check if win
  if (checkWin()) {
    showWinMsg()
  }
}

// Function to check win
function checkWin() {
  let playerBoard = document.getElementById('board').children
  let playerOrder = []
  for (let i = 0; i < playerBoard.length; i++) {
    playerOrder.push(playerBoard[i].src)
  }
  // for loop
  for (let index = 0; index < playerOrder.length; index++) {
    // if two elements are not equal return a value of false
    if (playerOrder[index] !== finalImgOrder[index]) {
      return false
    }
  }
  // end of for loop return return true
  return true
}

// When level-1 clicked show the game board
document.getElementById('level_1').addEventListener('click', startGame)
