let boxes=document.querySelectorAll(".Box");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector(".new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn=true;//PlayerO if turn==false then PlayerX

let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        
        if(turn){
            //player X
            box.innerText="X";
            turn=false;
        }
        else{
            //player O
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const resetGame=() =>{
    turn=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const diableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner) =>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    diableboxes();
};

const checkWinner= () => {
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
         
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val  === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
resetbtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);