let randomNumberGenerator = Math.floor(Math.random() * 6 + 1);
let randomDiceImage = "dice" + randomNumberGenerator + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumberGenerator2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage2 = "dice" + randomNumberGenerator2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumberGenerator > randomNumberGenerator2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumberGenerator < randomNumberGenerator2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "No one Wins";
}
