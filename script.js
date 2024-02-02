let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        if(turnO){
            box.innerHTML="O"
            turnO = false
        }else{
            box.innerHTML="X"
            turnO=true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();
        if (count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerHTML = `Game was a Draw. Play Again`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };

 const disabledBoxes = () =>{
     for(let box of boxes) {
         box.disabled = true; 
     }
 };
 const enabledBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false; 
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkwinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val !="") {
            if(pos1val === pos2val && pos3val === pos2val){
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




AOS.init({

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});