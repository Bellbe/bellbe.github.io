var set;
var fronts;
var backs;
set = "0" //the set of the current card
n = "idk"; //the index of the current card
dir = "F" //the direction of the cards (back to front or front to back)

//First set
frontsA = ['1', '2', '3'];
backsA = ['*', '**', "***"];

//Second set
frontsB = ['A', 'B', 'C'];
backsB = ['ay', 'bee', 'see'];

//Change the set in use, button's = Set A, Set B
function change(x) {
  n = "idk" //reset index
  document.getElementById("card").innerHTML = ""; //reset card to blank
  set = x; //change set variable
  document.getElementById("heading").innerHTML = "Set "+set; //change the heading
  //change the actual set
  if (dir == "F"){ //if going front-to-back
    fronts = eval('fronts'+set);
    backs = eval('backs'+set);
  }
  else { //if going back-to-front
    fronts = eval('backs'+set);
    backs = eval('fronts'+set);
  }
}

//change direction (front-to-back etc.) button = Forwards/Backwards
function changeDir(){
  if (dir == "B"){ //if currently backwards
    dir = "F"; //go forwards
    document.getElementById("di").innerHTML = "Forward"; //change button text
    fronts = eval('fronts'+set); //swap fronts and backs
    backs = eval('backs'+set);
  }
  else {
    dir = "B";
    document.getElementById("di").innerHTML = "Backward";
    fronts = eval('backs'+set);
    backs = eval('fronts'+set);
  }
}

//show a card button = New Card
function show() {
  if (set == "0"){ //if there isn't a set in use
    window.alert('Select a set first')
  }
  else {
    do { //get a random index for the current set
    y = Math.floor(Math.random() * fronts.length);
    }
    while (y == n); //repeat if that card is already up
    document.getElementById("card").innerHTML = fronts[y]; //change the card showing
    n = y; //change the index of card variable
  }
}

//show the back/front of the current card button = Flip Card
function flip() {
  if (n == "idk") { //If there isn't a card in use
    window.alert('You need to select a card before you can flip it.');
  }
  else if (document.getElementById("card").innerHTML == fronts[n]) {
    document.getElementById("card").innerHTML = backs[n];
  } //if the front is showing, show the back
  else {
    document.getElementById("card").innerHTML = fronts[n];
  } //if the back is showing, show the front
}
