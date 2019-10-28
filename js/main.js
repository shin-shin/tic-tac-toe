//*----- constants -------------------
const XBOX = 1;
const OBOX = -1;
const EMPTY = 0; 
//const grid = 3;
// const grid7 = 7;
// const grid13 = 13;


//*----- app's state (variables) -----
let grid, size, board, playboard, boxIdx, resetGameBtn, turn, turnBoxX, turnBoxO, win;

//*----- cached element references ---
main = document.querySelector("body");
header = document.querySelector("h1");
board = document.getElementById("board");
resetGameBtn = document.getElementById("resetBtn");
size = document.getElementById("size");
threeBtn = size.querySelector("#size .three");
sevenBtn = size.querySelector("#size .seven");
thirteenBtn = size.querySelector("#size .thirteen");
turnBoxX = document.querySelector("#turnBox .xBox");
turnBoxO = document.querySelector("#turnBox .oBox");
//*----- event listeners -------------
board.addEventListener("click", makeMove);
resetGameBtn.addEventListener("click", resetGame);
size.addEventListener("click", resize);

//*----- functions -------------------
init();
function build() {
    for (var i = 0; i < Math.pow(grid, 2); i++) {
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

    let who = (turn === 1 ? "x" : "o")
    move.textContent = who;
    console.log("turn is " + turn);
    turn = turn * -1;

    winCheck();
    render(move, who);

}

function winCheck() {
    let i = checkHorizonts();
    if(i >= 0) {
        console.log(`win horizontal: ${i}`);
        win = true;
        return;
    }

    i = checkVerticals();
    if(i >= 0) {
        console.log(`win vertical: ${i}`);
        win = true;
        return;
    }
    
    i = checkDiagonals();
    if(i >= 0) {
        console.log(`win diagonal: ${i}`);
        win = true;
        return;
    }

    win = false;
    return;
}

function checkHorizonts() {
    for (let i = 0; i < playboard.length; i += grid) {
        //console.log(`i: ${i}, i + grid: ${i+grid}`);
        let sl = playboard.slice(i, i + grid);

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
    for (let i = 0; i < grid; i++) {
        //console.log(`i: ${i}`);
        let sum = 0;
        for (let j = 0; j < grid; j++) {
            let idx = i + j * grid
            let curr = playboard[idx]
            //console.log(`idx: ${idx}`);            
            if (Number.isInteger(curr)) {
                // sum += playboard[i + i * grid];
                // console.log(`sum is ${sum}`);
                
                sum += curr;
                //console.log(`sum is ${sum}`);

            }
        }
        if (Math.abs(sum) === grid) {
            console.log("WIN COLUMN")
            return i;
        }
    }

    //no win
    return -1
}

function checkDiagonals() {
    sum = 0
    for (let i = 0; i < grid*grid; i+= (grid+1)) {
        let curr = playboard[i]
        if (Number.isInteger(curr)) {
            sum += curr 
        }
    }

    if (Math.abs(sum) === grid) {
        console.log("WIN DIAGONAL")
        return 0;
    }

    sum = 0
    for (let i = grid-1; i < (grid*grid-1); i+= (grid-1)) {
        let curr = playboard[i]
        if (Number.isInteger(curr)) {
            sum += curr 
        }
    }
    if (Math.abs(sum) === grid) {
        console.log("WIN DIAGONAL")
        return grid-1;
    }
}

function resetGame(e) {
    board.innerHTML = "";
    header.textContent = "Tic Tac Toe";
    main.setAttribute("id", "")
    win = false;

    //size buttons rest
    threeBtn.className ="three";
    sevenBtn.className ="seven";
    thirteenBtn.className ="thirteen";
    

    //console.log(size.children);
    init();
    console.log("reset");
}
function resize(e) {
    board.innerHTML = "";
    main.setAttribute("id", "")
    console.log(e.target);
    if(e.target.className === "thirteen"){
        size = 13;
        console.log(`size ${size}`);
    } else if (e.target.className === "seven"){
        size = 7;
        console.log(`size ${size}`);
    } else {
        size = 3;
        console.log(`size ${size}`);
    }
    threeBtn.className ="three";
    sevenBtn.className ="seven";
    thirteenBtn.className ="thirteen";
    e.target.className = "active";
    

    init(size);
    console.log("resize");
}

function render(m, w) {
    //display the X or O turn
    if (turn === 1) {
        turnBoxO.className = "oBox";
        turnBoxX.className = "xBox active";
    } else {
        turnBoxX.className = "xBox";
        turnBoxO.className = "oBox active";
    }

    //render win
    if(win){
        // let who = turn == 1 ? "X" : "O";
        header.textContent = `${w} won!`;
        header.style.textTransform = "uppercase";
    }
}
function init(size = 3) {
    turn = 1;
    grid = size;
    if (size === 7){
        main.setAttribute("id", "seven")
    } 
    if (size === 13){
        main.setAttribute("id", "thirteen")
    } 

    build();

    playboard = Array.from(document.getElementById("board").children);
    // playboard.forEach(function(el, idx){
    //     playboard[idx] = 0;
    // })
    //playboard = new Array(9).fill(0);
    //threeBtn.className ="three active";

    render();
}

