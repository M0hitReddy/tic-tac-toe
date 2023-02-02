const playerX = "X";
const playerO = "O";
let playerXO = document.getElementById("xo");
let boxes = Array.from(document.getElementsByClassName("box"));
let currentPlayer = playerX;
let winTurn = document.querySelector("#win-turn");
let count = 0;
let x = 0,
  y = 0,
  z = 0;
let boxArr = Array(9).fill(null);
let resetBtn = document.getElementById("resetBtn");
function startGame() {
  // boxes.forEach(box => box.addEventListener("click", boxClicked));
  for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClicked);
  }
}
resetBtn.addEventListener("click", reset);
function boxClicked(e) {
  let id = e.target.id;
  // boxes[id].style.transition = "1.5s";
  count++;
  if (boxArr[id] == null) {
    boxArr[id] = currentPlayer;
    if (count % 2 != 0) {
      currentPlayer = playerX;
      playerXO.textContent = playerO;
      boxes[id].textContent = currentPlayer;
      // playerXO.style.backgroundColor="#00ffd91d";
      playerXO.style.color = "#00ccff";
      playerXO.style.textShadow = "3px 3px red";
      boxes[id].style.color = "red";
      boxes[id].style.textShadow = "4px 4px #00ccff";
    } else {
      currentPlayer = playerO;
      playerXO.textContent = playerX;
      boxes[id].textContent = currentPlayer;
      // playerXO.style.backgroundColor="#ff000032";
      playerXO.style.color = "red";
      playerXO.style.textShadow = "3px 3px #00ccff";
      boxes[id].style.color = "#00ccff";
      boxes[id].style.textShadow = "4px 4px red";
    }
    boxArr[id] = currentPlayer;
    if (
      isWin(0, 1, 2) ||
      isWin(3, 4, 5) ||
      isWin(6, 7, 8) ||
      isWin(0, 3, 6) ||
      isWin(1, 4, 7) ||
      isWin(2, 5, 8) ||
      isWin(0, 4, 8) ||
      isWin(2, 4, 6)
    ) {
      boxes[x].style.backgroundColor = "#50536b";
      boxes[y].style.backgroundColor = "#50536b";
      boxes[z].style.backgroundColor = "#50536b";
      playerXO.textContent = currentPlayer;
      playerXO.style.backgroundColor = "#50536b";
      if (playerXO.textContent == "X") {
        playerXO.style.color = "red";
        playerXO.style.textShadow = "#00ccff 3px 3px";
      } else {
        playerXO.style.color = "#00ccff";
        playerXO.style.textShadow = "red 3px 3px";
      }
      winTurn.textContent = "won";
      boxArr.fill(0);
    }
  }
}
function reset() {
  
  boxArr.fill(null);
  for (i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    // boxes[i].style.transition = "10s";
  }
  playerXO.textContent = playerX;
  count = 0;
  playerXO.style.backgroundColor = "";
  playerXO.style.color = "red";
  playerXO.style.textShadow = "3px 3px #00ccff";
  boxes[x].style.backgroundColor = "black";
  boxes[y].style.backgroundColor = "black";
  boxes[z].style.backgroundColor = "black";
  winTurn.textContent = "turn";
}
function isWin(a, b, c) {
  if (boxArr[a] == playerX && boxArr[b] == playerX && boxArr[c] == playerX) {
    x = a;
    y = b;
    z = c;
    return true;
  } else if (
    boxArr[a] == playerO &&
    boxArr[b] == playerO &&
    boxArr[c] == playerO
  ) {
    x = a;
    y = b;
    z = c;
    return true;
  }
}
startGame();
