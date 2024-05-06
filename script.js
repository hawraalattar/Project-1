const toppings = [
  { name: 'tomato', imageUrl: 'pic/tomato.png' },
  { name: 'mushroom', imageUrl: 'pic/mushroom.png' },
  { name: 'green pepper', imageUrl: 'pic/green_pepper.png' },
  { name: 'red pepper', imageUrl: 'pic/red_pepper.png' },
  { name: 'pepparoni', imageUrl: 'pic/pep.png' },
  { name: 'pineapple', imageUrl: 'pic/pineapple.png' },
  { name: 'oninon', imageUrl: 'pic/onion.png' },
  { name: 'pasil', imageUrl: 'pic/pasil.png' }
]

let reqPizza = null

// Function that generate an array of each topping img
const toppingsContainer = document.getElementById('toppingsContainer')
function arrayToppings() {
  for (let i = 0; i < toppings.length; i++) {
    let img = document.createElement('img')
    img.src = toppings[i].imageUrl
    document.body.toppingsContainer.appendChild(img)
    // toppingsImg.push(toppingsImg.setAttribute('src', toppings[i].imageUrl))
  }
}

// Function to scatter the toppings randomly
// function randomToppings() {
//   toppings.forEach((topping) => {
//     const randomX = Math.floor(Math.random() * (reqPizza.width - topping.width))
//     console.log(`topping width +> ${topping.width}`)
//     console.log(`randomX +> ${randomX}`)
//     const randomY = Math.floor(
//       Math.random() * (reqPizza.height - topping.height)
//     )

//     topping.style.position = 'absolute'
//     topping.style.left = randomX + 'px'
//     topping.style.top = randomY + 'px'
//   })
// }

// Start Game
function startGame() {
  // Add img of the required pizza ingredients by putting plain dough and scattering the topings randomly
  // plain doug img
  reqPizza = document.createElement('img')
  reqPizza.setAttribute('src', 'pic/plainpizza.png')
  document.body.appendChild(reqPizza)

  // Checking one topping img to be add in html page ///
  const topping = document.createElement('img')
  topping.setAttribute('src', toppings[0].imageUrl)
  document.body.appendChild(topping)

  // add 2 toppings randomly - level 1
  arrayToppings()
  // Keep img for specific time and disapear it

  // Add plain dough of the pizza and set the toppings beside

  // Add Timer

  // Add Serve button

  // Drag drop property

  // Once Serve clicked || Time finished >> Stop drag drop property

  // Compare the pizza with the required
  // If they're matching open the next level

  // Otherwise Ask (TRY AGAIN?) >> YES ---> startGame() : NO --->
  // alert(OK! See you in another pizza-making adventure!)
}

document.getElementById('level_1').addEventListener('click', startGame)
