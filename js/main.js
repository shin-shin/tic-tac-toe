//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const grid = 3;


//*----- app's state (variables) -----
let board, playBoard, resetGameBtn, xTurn, oTurn;

//*----- cached element references ---
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");
boxes = document.getElementById("board").children;
//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame);

//*----- functions -------------------
init();

function makeMove(event){
    let move = event.target;

    //array of (#board children elements numbered) method indexOf(event.target)
    //for loop through #board 
    //test if it works
    move.style.backgroundColor = "#FE506D";
    move.textContent = "x";
    //playBoard = cleanBoard.push(event.target);
    console.log("move " + event.target);
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
    playBoard = new Array();
    for(var i = 0; i <= Math.pow(grid, 2); i++){
        board += "<div>0</div";
    }
}

console.log("hello from JS");