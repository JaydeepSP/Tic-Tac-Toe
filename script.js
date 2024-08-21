let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let trunOfO = true;
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    newGame.classList.add("hide");
    msg.classList.add("hide");
  }
};

const resetGame = () => {
  enableBtn();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunOfO) {
      box.innerText = "O";
      box.style.color = "#1E90FF"; 
      trunOfO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#FF6347";
      trunOfO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner} `;
  msg.classList.remove("hide");
  newGame.classList.remove("hide");
  disableBtn();
};

const checkWinner = () => {
  for (let pattern of winningPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let posValue1 = boxes[pattern[0]].innerText;
    let posValue2 = boxes[pattern[1]].innerText;
    let posValue3 = boxes[pattern[2]].innerText;

    if (posValue1 != "" && posValue2 != "" && posValue3 != "") {
      if (posValue1 === posValue2 && posValue2 === posValue3) {
        // console.log("Winner");
        showWinner(posValue1);
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);