//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const GRID = 3;
const GRID7 = 7;
const GRID13 = 13;


//*----- app's state (variables) -----
let board, playBoard, boxNum, resetGameBtn, xTurn, oTurn;

//*----- cached element references ---
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");
//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame);

//*----- functions -------------------
init();

function makeMove(event){
    let move = event.target;
    let boxNum = playBoard.indexOf(move);
    move.textContent = "0"
    console.log(boxNum);
    //array of (#board children elements numbered) method indexOf(event.target)
    //for loop through #board 
    //test if it works
    move.style.backgroundColor = "#FE506D";
    //move.textContent = "x";
    //playBoard.push(move);
    //console.log("move " + move);
    //console.log(playBoard);
}

function winCheck(){

}

function resetGame(event){
    init();
    console.log("reset");
}

function render(){

}
function init(){
    // playBoard = new Array();
    for(var i = 0; i < Math.pow(GRID, 2); i++){
        board.innerHTML += "<div class=\"zero\"></div";
    }
    playBoard = Array.from(document.getElementById("board").children);

    console.log(playBoard);
}

console.log("hello from JS");