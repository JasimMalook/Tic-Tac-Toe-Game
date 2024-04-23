
let cell = document.querySelectorAll(".cell");
let resetbtn = document.querySelector(".reset");
let playerO = document.querySelector(".playerO");
let playerX = document.querySelector(".playerX");
let turnO = true;
playerO.style.backgroundColor = "#3cff00";

let winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cell.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.innerHTML == "") {
      if (turnO) {
        e.target.innerHTML = "O";
        turnO = false;
        document.querySelector(".player-click").innerHTML = "O's Was Clicked";
        playerO.style.backgroundColor = "";
        playerX.style.backgroundColor = "#3cff00";
      } else {
        e.target.innerHTML = "X";
        turnO = true;
        document.querySelector(".player-click").innerHTML = "X's Was Clicked";
        playerX.style.backgroundColor = "";
        playerO.style.backgroundColor = "#3cff00";
        // document.querySelector(".player-turn").innerHTML = "O's turn";
      }
    }

    for (let i = 0; i < winArray.length; i++) {
      let x = winArray[i][0];
      let y = winArray[i][1];
      let z = winArray[i][2];
      if (
        cell[x].innerHTML == "X" &&
        cell[y].innerHTML == "X" &&
        cell[z].innerHTML == "X"
      ) {
        alert("X Wins");
        location.reload();
      } else if (
        cell[x].innerHTML == "O" &&
        cell[y].innerHTML == "O" &&
        cell[z].innerHTML == "O"
      ) {
        alert("O Wins");
        location.reload();
      }
    }
  });
});

resetbtn.addEventListener("click", () => {
  location.reload();
});
