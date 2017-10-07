window.onload= function(){
    let hitcount=0;
    let lose = document.getElementById("boundary1");
    lose.addEventListener("mouseover", function(){
        lose.classList.add("youlose");
        hitcount++;
        console.log(hitcount);
    });
    lose.addEventListener("mouseout", function(){
        lose.classList.remove("youlose");
    });
    
    let otherlosses = document.querySelectorAll(".boundary");
    for(let i=1; i<5; i++){
        otherlosses[i].addEventListener("mouseover",function(){
            otherlosses[i].classList.add("youlose");
            hitcount++;
            console.log(hitcount);
        });
        otherlosses[i].addEventListener("mouseout",function(){
          otherlosses[i].classList.remove("youlose");
        });
    }
    
    let end = document.getElementById("end");
    end.addEventListener("mouseover", function (){
        if(hitcount === 0){
            alert("You win!");
        }
    });
}