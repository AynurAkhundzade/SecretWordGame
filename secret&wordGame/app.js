const log = console.log;
const qSel = (selector) => document.querySelector(selector);
const getById = (id) => document.getElementById(id);
const word = getById("word");
const score = getById("score");
const game = getById("game").classList;
const card = getById("card").classList;
const checkBtn = qSel("#checkBtn");
const clearBtn = qSel("#clearBtn");
const newGameBtn = qSel("#newGame");
let point = 0;
let bool = false;
let words = ["bool", "teach", "book"];

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
newGameBtn.addEventListener("click", newGame);

function check() {
  words.forEach((element) => {
    if (element.toLowerCase() == word.value.toLowerCase()) {
      bool = true;
    }
    return;
  });
  if (bool) {
    victory();
    bool = false;
  } else {
    gameOver();
  }
  show();
}

function clear() {
  word.value = "";
}

function victory() {
  point += 10;
  score.innerHTML = point.toString();
}
function gameOver() {
  point -= 10;
  score.innerHTML = point.toString();
}
function newGame() {
  window.location.reload();
}

function show() {
  if (point >= 50) {
    game.toggle("victory");
    checkBtn.setAttribute("disabled", "disabled");
  } else if (point <= -50) {
    game.toggle("gameOver");
    checkBtn.setAttribute("disabled", "disabled");
  }
}
