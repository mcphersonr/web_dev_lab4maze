window.onload= function(){
    let hitcount= 0;
    let startcount = 0;
    let lose = document.getElementById("boundary1");
    lose.addEventListener("mouseover", function(){
        lose.classList.add("youlose");
        hitcount++;
        console.log(hitcount);
    });
    
    let otherlosses = document.querySelectorAll(".boundary");
    for(let i=1; i<5; i++){
        otherlosses[i].addEventListener("mouseover",function(){
            otherlosses[i].classList.add("youlose");
            hitcount++;
            console.log(hitcount);
        });
    }

    let restart = document.getElementById("start");
    restart.addEventListener("click", function(){
        lose.classList.remove("youlose");
        for(s=1; s<5; s++){
            otherlosses[s].classList.remove("youlose");
        }
        hitcount = 0;
        console.log(hitcount);
        startcount = 1;
        restart.innerHTML="S";
    })
    
    let end = document.getElementById("end");
    end.addEventListener("mouseover", function (){
        if(hitcount === 0){
            alert("You win!");
        }
    });
}