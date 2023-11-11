let squares = document.querySelectorAll(".square");
let boardArray = ["", "", "", "", "", "", "", "", ""];
let firstPlayer = "X";
let winningMessage = document.createElement("p");
let body = document.getElementById("body");
console.log(body);

const winComs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// let secondPlayer = "O";
// let currentPlayer = firstPlayer;

squares.forEach((square) => square.addEventListener("click", handleClick));

function handleClick(e) {
  let clickedSquare = e.target;
  let clickedSquareIndex = e.target.getAttribute("squareIndex");

  if (!boardArray[clickedSquareIndex]) {
    console.log(firstPlayer);
    // console.log("klhh");
    // console.log(boardArray);
    handleSquare(clickedSquareIndex, clickedSquare);
  }

  // boardArray[clickedSquare]
}

function handleSquare(clickedSquareIndex, clickedSquare) {
  console.log(firstPlayer);
  boardArray[clickedSquareIndex] = firstPlayer;
  clickedSquare.innerHTML = firstPlayer;

  firstPlayer = firstPlayer === "X" ? "O" : "X";
  checkWins();
}

function checkWins() {
  console.log(boardArray);
  winComs.forEach((winCom) => {
    {
      if (
        (boardArray[winCom[0]] !== "" && boardArray[winCom[0]]) ===
          (boardArray[winCom[1]] !== "" && boardArray[winCom[1]]) &&
        boardArray[winCom[1]] !== "" &&
        (boardArray[winCom[1]] === boardArray[winCom[2]]) !== "" &&
        boardArray[winCom[2]]
      ) {
        // alert(`The winner is ${boardArray[winCom[0]]} `);
        winningMessage.innerHTML = `The winner is ${boardArray[winCom[0]]} `;
        body.appendChild(winningMessage);
      }
    }
  });
}

// [[0,1,2], [3,4,5]......]
// 1st iteratrion ->  [0,1,2,]  board[0] => X loop through all values in wincom= [1,2,3] and find if there is a match
// 2nd iteration ->
