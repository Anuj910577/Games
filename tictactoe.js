let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turn0 = true;

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
let count=1;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(count++);
        if(turn0===true){
            box.innerText = "0";
            turn0 = false;
            box.style.color = "orange";
        }
        else {
            box.innerText = "X";
            turn0 = true;
            box.style.color = "green";
        }
        box.disabled = true;
        checkWinner();
        
    });
   
});


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
};

const checkWinner = () => {
    for(let pattern of winPattern){
        let status1 = boxes[pattern[0]].innerText;
        let status2 = boxes[pattern[1]].innerText;
        let status3 = boxes[pattern[2]].innerText;

        if(status1 != "" && status2 != "" && status3 != ""){
            if(status1 === status2 && status2 === status3){
                showWinner(status1);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
