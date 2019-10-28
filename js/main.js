//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0;
const GRID = 3;
const GRID7 = 7;
const GRID13 = 13;


//*----- app's state (variables) -----
let size, board, playboard, boxIdx, resetGameBtn, turn, turnBoxX, turnBoxO;

//*----- cached element references ---
main = document.querySelector("body");
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");
size = document.getElementById("size");
turnBoxX = document.querySelector("#turnBox .xBox");
turnBoxO = document.querySelector("#turnBox .oBox");
//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame);
size.addEventListener("click", resize);

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
    let i = checkHorizonts();
    if(i >= 0) {
        console.log(`win horizontal: ${i}`);
        return;
    }

    i = checkVerticals();
    if(i >= 0) {
        console.log(`win vertical: ${i}`);
        return;
    }
    
    i = checkDiagonals();
    if(i >= 0) {
        console.log(`win diagonal: ${i}`);
        return;
    }
}

function checkHorizonts() {
    for (let i = 0; i < playboard.length; i += GRID) {
        //console.log(`i: ${i}, i + GRID: ${i+GRID}`);
        let sl = playboard.slice(i, i + GRID);

        let sum = sl.reduce(function (acc, curr) {
            if (Number.isInteger(curr)) {
                return acc + curr;
            } else {
                return acc;
            }
        }, 0)

        if (Math.abs(sum) === 3) {
            console.log("WIN ROW")
            return i;
        }
    }
    //no win
    return -1
}

function checkVerticals() {
    for (let i = 0; i < GRID; i++) {
        //console.log(`i: ${i}`);
        let sum = 0;
        for (let j = 0; j < GRID; j++) {
            let idx = i + j * GRID
            let curr = playboard[idx]
            //console.log(`idx: ${idx}`);            
            if (Number.isInteger(curr)) {
                // sum += playboard[i + i * GRID];
                // console.log(`sum is ${sum}`);
                
                sum += curr;
                //console.log(`sum is ${sum}`);

            }
        }
        if (Math.abs(sum) === GRID) {
            console.log("WIN COLUMN")
            return i;
        }
    }

    //no win
    return -1
}

function checkDiagonals() {
    sum = 0
    for (let i = 0; i < GRID*GRID; i+= (GRID+1)) {
        let curr = playboard[i]
        if (Number.isInteger(curr)) {
            sum += curr 
        }
    }

    if (Math.abs(sum) === GRID) {
        console.log("WIN DIAGONAL")
        return 0;
    }

    sum = 0
    for (let i = GRID-1; i < (GRID*GRID-1); i+= (GRID-1)) {
        let curr = playboard[i]
        if (Number.isInteger(curr)) {
            sum += curr 
        }
    }
    if (Math.abs(sum) === GRID) {
        console.log("WIN DIAGONAL")
        return GRID-1;
    }
}

function resetGame(e) {
    board.innerHTML = "";

    init();
    console.log("reset");
}
function resize(e) {
    board.innerHTML = "";
    

    init(size);
    console.log("resize");
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
function init(size) {
    turn = 1;
    //body.className = "";

    build();

    playboard = Array.from(document.getElementById("board").children);
    // playboard.forEach(function(el, idx){
    //     playboard[idx] = 0;
    // })
    //playboard = new Array(9).fill(0);

    render();
}

