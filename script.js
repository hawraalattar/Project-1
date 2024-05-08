let rows = 3
let columns = 3

let referencePuz
let swapPuz

const finalImgOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
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

function swaps(swap) {
  swap.preventDefault()
}
function leave() {}

function dropPuz() {
  swapPuz = this
}
function dragEnd() {
  let currentPuz = referencePuz.src
  let swappedPuz = swapPuz.src

  referencePuz.src = swappedPuz
  swapPuz.src = currentPuz
}
