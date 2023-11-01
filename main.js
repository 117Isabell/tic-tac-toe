let squares = document.querySelectorAll(".square");
let boardArray = ["", "", "", "", "", "", "", "", ""];
let firstPlayer = "X";
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
}
