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

const pizza = []
const toppingSelected = null
const destinationSelected = null

const generateRandomPizza = () => {
  // loop through toppings
  for (let i = 0; i < toppings.length; i++) {
    const randomTopping = Math.floor(Math.random() * toppings.length)
  }
  // Generate random index
  // Place toppings element in the loop inside grid[randomIndex]
}

const showPizza = () => {
  // Show final pizza for a moment
}

const addEventListeners = () => {
  // Add click event listeners to all the pizza cells
  // Add click event listeners to all the toppings
}

// ==================================================

// Function that generate an array of each topping img
const toppingsContainer = document.getElementById('toppingsContainer')
function toppingsContainerArray() {
  for (let i = 0; i < toppings.length; i++) {
    let img = document.createElement('img')
    img.src = toppings[i].imageUrl
    toppingsContainer.appendChild(img)
  }
}

// Function to scatter the toppings randomly
function randomToppings(num) {
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * toppings.length)
  }

  const playPileImg = document.getElementById('card1')
  playPileImg.src = currentCard.img
}

// Start Game
function startGame() {
  // Add img of the required pizza ingredients by putting plain dough and scattering the topings randomly
  // plain doug img
  const plainPizza = document.getElementById('plainPizza')
  let plainPizzaImg = document.createElement('img')
  plainPizzaImg.src = 'pic/plainpizza.png'
  plainPizza.appendChild(plainPizzaImg)

  // add 2 toppings randomly by calling randomToppings()
  // randomToppings()
  toppingsContainerArray()
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
