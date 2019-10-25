//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const WIN_NUM = 3;

//*----- app's state (variables) -----
let board, cleanBoard, playBoard, resetGameBtn, xTurn, oTurn;

//*----- cached element references ---
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");

//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame);

//*----- functions -------------------
init();

function makeMove(event){
    //test if it works
    event.target.style.backgroundColor = "red";
    //playBoard = cleanBoard.push(event.target);
    console.log("move " + event.target);
}

function winCheck(){

}

function resetGame(event){
    console.log("reset");
}

function render(){

}
function init(){
    cleanBoard = [[0,0,0],[0,0,0],[0,0,0]];

}

console.log("hello from JS");