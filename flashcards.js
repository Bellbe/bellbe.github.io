var cards = []

function addCard(words) {
  <!--cards.push(words);-->
  document.getElementById("cardFront").innerHTML = words;
}

function showCard() {
  document.getElementById("cardFront").innerHTML = cards.length;
}
