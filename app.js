let isGameOver = false;
let winningScore = 3;

const p1 = {
  score: 0,
  name: "Player1",
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  name: "Player2",
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const winnerList = document.querySelector("#winnerList");

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      const newLi = document.createElement("li");
      newLi.append(`${player.name}`);
      winnerList.append(newLi);
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
  isGameOver = false;
}
