window.onload= function(){
    let hitcount = 0;
    let startcount = 0;
    let head = document.getElementById("status");
    let lose = document.getElementById("boundary1");
    let otherlosses = document.querySelectorAll(".boundary");
    let start = document.getElementById("start");
    let restart = start;
    let maze = document.getElementById("maze");
    let end = document.getElementById("end");
    
    //Changes the first boundary from the left to red when the mouse moves over it
    lose.addEventListener("mouseover", function(){
        lose.classList.add("youlose");
        hitcount++;
        head.innerHTML = "YOU LOSE!";
    });
    
    //Changes the other boundaries when the mouse moves over it
    for(let i=1; i<5; i++){
        otherlosses[i].addEventListener("mouseover",function(){
            otherlosses[i].classList.add("youlose");
            hitcount++;
            head.innerHTML = "YOU LOSE!";
        });
    }
    
    //Set the counter to know that the user has started the game
    start.addEventListener("mouseover",function(){
        startcount =1;
    });
    
    //Prevents the user from exiting the game once they have started
   maze.addEventListener("mouseleave",function(){
        if(startcount ===1){
            head.innerHTML = "YOU LOSE!";
            lose.classList.add("youlose");
            for(let l=1; l<5; l++){
                otherlosses[l].classList.add("youlose");
            }
            startcount=0;
        }
    })

    //Resets all the wall colours when the start block is clicked
    restart.addEventListener("click", function(){
        lose.classList.remove("youlose");
        for(let s=1; s<5; s++){
            otherlosses[s].classList.remove("youlose");
        }
        hitcount = 0;
        head.innerHTML="Move your mouse over the "+"S"+" to begin.";
    })
    
    //Displays message when the user moves the mouse over the "E"
    end.addEventListener("mouseover", function (){
        if(hitcount === 0 && startcount ===1){
           head.innerHTML = "YOU WIN!";
           startcount=0;
        }
    });
}