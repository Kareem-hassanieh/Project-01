let firstCard = 10;
let secondCard = 10;
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardsEl=document.getElementById('cards-el');

function startGame(){
  renderGame();

}



function renderGame() {
  //render out first card and second card
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent=message;
  //render out ALL the cards we have
  sumEl.textContent='Sum:'+sum;

}

function newCard(){
   let card=1;
   cards.push(card);
   sum+=card;
   startGame();
 
}