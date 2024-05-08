let rows = 3
let columns = 3

let referencePuz
let swapPuz

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
let puzzleOrder = ['4', '6', '2', '8', '5', '3', '1', '9', '7']

// Loading the puzzle board
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
    // load img in board <img id="r-c"
    let puzzle = document.createElement('img')
    puzzle.id = r.toString() + '-' + c.toString()
    // for (let i = 0; i < finalImg; i++) {
    //   puzzle.src = 'puzzle/' + finalImg[i] + '.jpg'
    //   puzzle.src = 'puzzle/1.jpg'
    // }
    puzzle.src = 'puzzle/' + puzzleOrder.shift() + '.jpg'

    // Allow to drag the puzzle
    puzzle.addEventListener('dragstart', startDrag)
    puzzle.addEventListener('dragover', moveArround)
    puzzle.addEventListener('dragenter', swaps)
    puzzle.addEventListener('dragleave', leave)
    puzzle.addEventListener('drop', dropPuz)
    puzzle.addEventListener('dragend', dragEnd)

    console.log(checkWin())
    // Append
    document.getElementById('board').append(puzzle)
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
function swaps(swap) {
  swap.preventDefault()
}

function leave() {}

// Drop the puzzle
function dropPuz() {
  swapPuz = this
}
function dragEnd() {
  let currentPuz = referencePuz.src
  let swappedPuz = swapPuz.src

  referencePuz.src = swappedPuz
  swapPuz.src = currentPuz
}

// Function to check win
function checkWin() {
  let playerBoard = document.getElementById('board').children
  let playerOrder = []
  for (let i = 0; i < playerBoard.length; i++) {
    playerOrder.push(playerBoard[i].src)
  }
  console.log(playerOrder)
  // for loop
  for (let index = 0; index < playerOrder.length; index++) {
    // if two elements are not equal change value of returnValue to false
    if (playerOrder[index] !== finalImgOrder[index]) {
      return false
    }
    // end of for loop return returnValue
  }
  return true
}
