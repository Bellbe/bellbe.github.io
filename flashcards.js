var cards = []

function addCard(words) {
  cards.push(words);
  document.getElementById("cardFront").innerHTML = cards[0];
}

function showCard() {
  document.getElementById("cardFront").innerHTML = cards.length;
}
