let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; //playerX, playerO
let count = 0; //to Track Draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count=0; //reset the counter
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){ 
            //playerO
            box.innerText = "O";
            turnO = false;
        }else{ 
            //playerX
            box.innerText = "X";
            turnO = true;
        }
       box.classList.add("disabled");
       count++;

      let isWinner = checkWinner();

      if (count === 9 && !isWinner){
        gameDraw();
      }
    });
});

const gameDraw = () =>{
    msg.innerText = "Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () => {
    for (let box of boxes){
        box.classList.add("disabled");
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.classList.remove("disabled");
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if(pos1Value !="" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value=== pos3Value){
                showWinner(pos1Value);
                 return true; // Winner found
            }
        }
    }
     return false; // No winner
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

