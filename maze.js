window.onload= function(){
    let lose = document.getElementById("boundary1");
    lose.addEventListener("mouseover", mouseOver);
    lose.addEventListener("mouseout", mouseOut);
}


function mouseOver(){
    let lose = document.getElementById("boundary1");
    lose.classList.add("youlose");
}

function mouseOut(){
    let lose = document.getElementById("boundary1");
    lose.classList.remove("youlose");
}