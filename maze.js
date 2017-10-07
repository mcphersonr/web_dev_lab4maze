window.onload= function(){
    let lose = document.getElementById("boundary1");
    lose.addEventListener("mouseover", function(){
        lose.classList.add("youlose");
    });
    lose.addEventListener("mouseout", function(){
        lose.classList.remove("youlose");
    });
    
    let other = document.querySelectorAll(".boundary");
    console.log(other);    
    for(let i=1; i<5; i++){
        other[i].addEventListener("mouseover",function(){
            other[i].classList.add("youlose");
        });
        other[i].addEventListener("mouseout",function(){
          other[i].classList.remove("youlose");
        });
    }
}