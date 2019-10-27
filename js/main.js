//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const GRID = 3;
const GRID7 = 7;
const GRID13 = 13;


//*----- app's state (variables) -----
let board, playboard, boxIdx, resetGameBtn, turn, turnBoxX, turnBoxO;

//*----- cached element references ---
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");
turnBoxX = document.querySelector("#turnBox .xBox");
turnBoxO = document.querySelector("#turnBox .oBox");
//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame);

//*----- functions -------------------
init();
function build() {
    for (var i = 0; i < Math.pow(GRID, 2); i++) {
        board.innerHTML += "<div></div>";
    }
}

function makeMove(e) {
    let move = event.target;
    //console.log(`move in makeMove 1 ${move}`);
    let boxIdx = playboard.indexOf(move);
    //console.log(`boxIdx ${boxIdx}`);

    if (boxIdx == -1) {
        //the box was already played
        return;
    }

    //replace boxIdx position in array with -1/1
    playboard[boxIdx] = turn;
    turn > 0 ? move.className = "xBox" : move.className = "oBox";

    move.textContent = (turn === 1 ? "x" : "o")
    console.log("turn is " + turn);
    turn = turn * -1;




    winCheck();
    render(move);

}

function winCheck() {
    //console.log(`playboard.length is ${playboard.length}`);
    console.log(`firstBox is ${playboard[0]}`);
    console.log(`secondBox is ${playboard[1]}`);

    for (let i = 0; i < playboard.length; i += GRID) {
        console.log(`i: ${i}, i + GRID: ${i+GRID}`);
        let sl = playboard.slice(i, i + GRID);

        let sum = sl.reduce(function (acc, curr) {
            console.log(`curr is ${curr}`);
            if (Number.isInteger(curr)) {
                console.log(`CURR IS A NUMBER: ${curr}`);
                return acc + curr;
            } else {
                console.log(`not integer`);
                return acc;
            }
        }, 0)

        let aSum = Math.abs(sum)
        console.log(`Sum is ${aSum}`)
        if (Math.abs(sum) === 3) {
            console.log("win")
            return;
        }
        //console.log(`slice length is ${sl.length}`);
        //console.log(`slice is ${sl}`);
    }


}

function resetGame(e) {
    board.innerHTML = "";

    init();
    console.log("reset");
}

function render(m) {

    //display the X or O turn
    if (turn === 1) {
        turnBoxO.className = "oBox";
        turnBoxX.className = "xBox active";
    } else {
        turnBoxX.className = "xBox";
        turnBoxO.className = "oBox active";
    }

    //render win

}
function init() {
    turn = 1;
    build();

    playboard = Array.from(document.getElementById("board").children);
    // playboard.forEach(function(el, idx){
    //     playboard[idx] = 0;
    // })
    //playboard = new Array(9).fill(0);

    render();
}

