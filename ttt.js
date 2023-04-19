const player = "X";
const comp = "O";
let matrix = ["", "", "", "", "", "", "", "", ""];
/* const coLetter = ["a", "b", "c"]
const coNumber = [1,2,3] */

function renderGame() {
  let playground = document.getElementById("startGame");
  let count = 1;
  playground.innerHTML = ``;

  for (let i = 0; i < matrix.length; i++) {
    if (count === 1) {
      playground.innerHTML += `
            <div class="row">
        `;
    }
    playground.innerHTML += `
            <button class="playboard" onclick="clicked(${i})">${matrix[i]}</button>
        `;

    if (count === 3) {
      playground.innerHTML += `
                </div>
                <br>
            `;
      count = 1;
    } else {
      count++;
    }
  }
  playground.innerHTML += `
        <div id="options">
            <button onclick="reset()">Reset</button>
            <button onclick="frontPage()">Quit game</button>
        </div>
    `;
}

function clicked(input) {
  if (matrix[input] === "") {
    matrix[input] = "X";
    console.log("click");
    console.log(matrix);
    renderGame();
    checkForWin();
    compTurn();
  } else {
    console.log("In use. Use another.");
  }
}

function compTurn() {
  let randNum = Math.floor(Math.random() * matrix.length);
  if (matrix[randNum] === "X" || matrix[randNum] === "O") {
    console.log("already in use");
    compTurn();
  } else {
    matrix[randNum] = "O";
    renderGame();
    checkForWin();
  }
}

function checkForWin() {
  let playground = document.getElementById("startGame");
  if (
    (matrix[0] === "X" && matrix[1] === "X" && matrix[2] === "X") ||
    (matrix[3] === "X" && matrix[4] === "X" && matrix[5] === "X") ||
    (matrix[6] === "X" && matrix[7] === "X" && matrix[8] === "X") ||
    (matrix[0] === "X" && matrix[3] === "X" && matrix[6] === "X") ||
    (matrix[1] === "X" && matrix[4] === "X" && matrix[7] === "X") ||
    (matrix[2] === "X" && matrix[5] === "X" && matrix[8] === "X") ||
    (matrix[0] === "X" && matrix[4] === "X" && matrix[8] === "X") ||
    (matrix[6] === "X" && matrix[4] === "X" && matrix[2] === "X")
  ) {
    console.log("You won!");
    playground.innerHTML = `
            <div id ="result">
                <h1>You Won!</h1>
                <button onclick="reset()">Retry?</button>
            </div>

        `;
  } else if (
    (matrix[0] === "O" && matrix[1] === "O" && matrix[2] === "O") ||
    (matrix[3] === "O" && matrix[4] === "O" && matrix[5] === "O") ||
    (matrix[6] === "O" && matrix[7] === "O" && matrix[8] === "O") ||
    (matrix[0] === "O" && matrix[3] === "O" && matrix[6] === "O") ||
    (matrix[1] === "O" && matrix[4] === "O" && matrix[7] === "O") ||
    (matrix[2] === "O" && matrix[5] === "O" && matrix[8] === "O") ||
    (matrix[0] === "O" && matrix[4] === "O" && matrix[8] === "O") ||
    (matrix[6] === "O" && matrix[4] === "O" && matrix[2] === "O")
  ) {
    console.log("You lost!");
    playground.innerHTML = `
            <div id ="result">
                <h1>You lost!</h1>
                <button onclick="reset()">Retry?</button>
            </div>
    `;
  }
}

function reset() {
  matrix = ["", "", "", "", "", "", "", "", ""];
  renderGame();
}

function frontPage() {
  inUseMatrix = [];
  playground = document.getElementById("startGame");
  playground.innerHTML = `
        <h2>The one and only</h2>
        <h1>Tic Tac Toe</h1>
        <button onclick="renderGame()">Play</button>
    
    `;
}
