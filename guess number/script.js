let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 15;
let highScore = 0;
console.log(randomNumber);
function checkNumber() {
  let userNumber = Number(document.querySelector(".input_number").value);

  // when field is empty
  if (!userNumber) {
    document.querySelector(".state_number").textContent = "یک عدد وارد کن 🙃😁";
  }
  // when player is win
  else if (randomNumber === userNumber) {
    document.querySelector(".state_number").textContent = "آفرین برنده شدی🎉";
    document.querySelector(".box").style.backgroundColor = "#18bc18";
    document.querySelector(".title").style.backgroundColor = "#13e313";
    document.querySelector(".check").style.backgroundColor = "#13e313";
    document.querySelector(".restart").style.backgroundColor = "#13e313";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high_score").textContent = highScore;
    }
  }
  // when user number is bigger than random number
  else if (userNumber > randomNumber) {
    document.querySelector(".state_number").textContent = "عددتو کمتر کن";

    if (score > 1) {
      score--;
      document.querySelector(".score_chance").textContent = score;
    } else {
      document.querySelector(".score_chance").textContent = 0;
      document.querySelector(".state_number").textContent = "باختی 🙁";
      document.querySelector(".box").style.backgroundColor = "#ff0000";
      document.querySelector(".title").style.backgroundColor = "#ee3a3a";
      document.querySelector(".check").style.backgroundColor = "#ee3a3a";
      document.querySelector(".restart").style.backgroundColor = "#ee3a3a";
    }
  }
  // when user number is lower than random number
  else if (userNumber < randomNumber) {
    document.querySelector(".state_number").textContent = "عددتو بیشتر کن";

    if (score > 1) {
      score--;
      document.querySelector(".score_chance").textContent = score;
    } else {
      document.querySelector(".score_chance").textContent = 0;
      document.querySelector(".state_number").textContent = "باختی 🙁";
      document.querySelector(".box").style.backgroundColor = "#ff0000";
      document.querySelector(".title").style.backgroundColor = "#ee3a3a";
      document.querySelector(".check").style.backgroundColor = "#ee3a3a";
      document.querySelector(".restart").style.backgroundColor = "#ee3a3a";
    }
  }
}
function restart() {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);
  score = 15;
  document.querySelector(".score_chance").textContent = score;
  document.querySelector(".box").style.backgroundColor = "#FFDDD2";
  document.querySelector(".title").style.backgroundColor = "#FF8DC7";
  document.querySelector(".check").style.backgroundColor = "#FF8DC7";
  document.querySelector(".restart").style.backgroundColor = "#FF8DC7";
  document.querySelector(".state_number").innerHTML = "&nbsp;";
  let val = document.querySelector(".input_number");
  val.value = "";
}
document.querySelector(".check").addEventListener("click", checkNumber);
document.querySelector(".restart").addEventListener("click", restart);
