let player = {
    name:"Mridul",
    chips:200
}

let cards = []
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("msg-el")
let cards_El = document.getElementById("cards-el")
let sum_EL = document.getElementById("sum-el")
let player_EL =document.getElementById("player-el")


function startGame()
{
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard , secondCard]
   sum = firstCard + secondCard
   renderGame()
}
 function renderGame()
 {
cards_El.textContent = "Cards:" + " " 
for (let i = 0 ; i< cards.length ; i++ )
{
    cards_El.textContent += cards[i] + " "
}
sum_EL.textContent = "Sum:"+ " " + sum 
if (sum <=20 )
{
    message ="Do you want to draw a new card?"
}
else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
    player_EL.textContent = "Player :" + " " + player.name + " " + "Chips"+"" +"$"+ player.chips
 }  
 else{
    message = "You're out of the game!"
    isAlive = false
   // cards_El.textContent = "Cards:" + 0
   // sum_EL.textContent = "Sum:"+ " " + 0
 } 
 messageEl.textContent = message
}

function getRandomCard()
{
   let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber ===1)
    {
        return 11
    }
    else
    {
        return randomNumber
    }
}
function newCard()
{
    if (isAlive=== true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum +=card
        cards.push(card)
        renderGame()
    }
}






