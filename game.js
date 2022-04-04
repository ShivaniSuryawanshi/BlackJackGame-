let nameEntered = false
let cards = []
let sum = 0
let Hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("messageel")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let PlayerName=" "
let SubmitEl =document.getElementById("submit")
let Name= document.getElementById("Name-el")

let NameEl= document.getElementById("player-el")

function submitName(){
  PlayerName = NameEl.value
  Name.textContent = PlayerName
  console.log(PlayerName)
  nameEntered = true
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 11) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}


function startGame() {
    if (nameEntered=== true){

    isalive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard , secondCard]
    sum=firstCard+secondCard
    renderGame()
    }
}

function renderGame() {
    cardEl.textContent = "cards :"

    for (i = 0; i < cards.length; i++) {

        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum :" + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    }
    else if (sum === 21) {
        message = "yeah! you have got the black jack."
        Hasblackjack = true
        isalive = false
    }
    else {
        message = "you are out."
        isalive = false
    }

    messageEl.textContent = message

}
function NewCard() {
    if(isalive===true&&Hasblackjack===false){

    
     let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
} 
}




