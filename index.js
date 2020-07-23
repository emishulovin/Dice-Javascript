// on refresh, create random variable for each die, 1-6.
// associate the picture with the random variable, change with toggle or st.
// change text on top depending who won. Put flag next to it.


window.onload = function() {
  let rand1 = Math.floor((Math.random() * 6) + 1);
  let rand2 = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img1").src = `images/dice${rand1}.png`
  document.querySelector(".img2").src = `images/dice${rand2}.png`
  let header = rand1 > rand2 ? "Player1 Won!" : rand2 > rand1 ? "Player2 Won!" : "Tie"
  document.querySelector("h1").innerHTML = header
}
