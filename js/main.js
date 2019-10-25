//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const WIN_NUM = 3;

//*----- app's state (variables) -----
let board, resetGameBtn, xTurn, oTurn;

//*----- cached element references ---
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");
//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame)
//*----- functions -------------------
function makeMove(board){
    console.log("move");
}
function resetGame(){
    console.log("reset");
}
function init(){

}
function winCheck(){

}

console.log("test");