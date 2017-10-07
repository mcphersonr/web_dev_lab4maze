window.onload= function(){
    let hitcount= 0;
    let startcount = 0;
    let head = document.getElementById("status");
    let lose = document.getElementById("boundary1");
    lose.addEventListener("mouseover", function(){
        lose.classList.add("youlose");
        hitcount++;
        head.innerHTML = "YOU LOSE!";
    });
    
    let otherlosses = document.querySelectorAll(".boundary");
    for(let i=1; i<5; i++){
        otherlosses[i].addEventListener("mouseover",function(){
            otherlosses[i].classList.add("youlose");
            hitcount++;
            head.innerHTML = "YOU LOSE!";
        });
    }
    
    let start = document.getElementById("start");
    start.addEventListener("mouseover",function(){
        startcount=1;
    });

    let restart = start;
    restart.addEventListener("click", function(){
        lose.classList.remove("youlose");
        for(let s=1; s<5; s++){
            otherlosses[s].classList.remove("youlose");
        }
        hitcount = 0;
        head.innerHTML="Move your mouse over the "+"S"+" to begin.";
    })
    
    let end = document.getElementById("end");
    end.addEventListener("mouseover", function (){
        if(hitcount === 0 && startcount ===1){
           head.innerHTML = "YOU WIN!";
        }
    });
}