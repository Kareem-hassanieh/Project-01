let player={
  name:'kareem',
  chips:190

}


let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el'); 

let playerEl=document.getElementById('player-el');
playerEl.textContent=player.name+': $'+player.chips;




function startGame() {
  isAlive=true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards=[firstCard,secondCard]
  sum=firstCard+secondCard;

  renderGame();

}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
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
  messageEl.textContent = message;
  //render out ALL the cards we have
  sumEl.textContent = 'Sum:' + sum;

}

function newCard() {
  if(isAlive && hasBlackJack===false){


    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();

  }
 
}