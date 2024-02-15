let outline
let currentSlider = 0;
let translateValue 
function changeSlide(currentslider){
   slider(currentSlider+1);
}

let slider = (moveto) => {
    
    translateValue = -100
    outline = document.querySelectorAll(".outline");
    outline[moveto].style.transform = `translateX(${moveto * translateValue}%)`;
    outline[moveto].style.transition = 'transform 1s linear 1s'
    if( moveto  >= outline.length -1){
        moveto = 0;
    }
    currentSlider = moveto;
}

let intervalID = setInterval(changeSlide,10000,currentSlider);
// clearInterval(intervalID);








