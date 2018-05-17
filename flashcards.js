var cards = []

function addCard(words) {
  cards.push(words);
}

function showCard() {
  document.getElementById("cardFront").innerHTML = cards.length;
}
