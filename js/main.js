//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const WIN_NUM = 3;

//*----- app's state (variables) -----
let board, resetGame, xTurn, oTurn;

//*----- cached element references ---
board = document.getElementById("board");

//*----- event listeners -------------
board.addEventListener("click", makeMove);

//*----- functions -------------------
function makeMove(board){
    console.log("move");
}
function winCheck(){

}

console.log("test");