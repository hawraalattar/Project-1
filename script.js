let rows = 3
let columns = 3

let referencePuz
let swapPuz

const finalImgOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let puzzleOrder = ['4', '6', '2', '8', '5', '3', '1', '9', '7']

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
    document.getElementById('board').append(puzzle)
  }
}
