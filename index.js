let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let NewGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector("msg-container");
let msg = document.querySelector("#msg");
let turno = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
 const showWinner = (winner)=>{
         msg.innerText =`congrats, the winner is ${winner}`;
         //msgContainer.classList.remove("hide");
         disabledBoxes();
        } 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.innerText ="jai shri ram"
        if(turno){
            box.innerText="o";
            turno = false;
        }  
            else{
                box.innerText ="x";
                turno = true;
            }
        box.disabled = true;
        checkWineer();
       

    });
})
const checkWineer=()=>{
    for(let pattern of winPattern){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if(pos1value!=""&&pos2value!=""&&pos3value!=""){
            if( pos1value===pos2value&&pos2value===pos3value){
                console.log("winner",pos1value);
                showWinner(pos1value);
            }
        }
    }
     

}