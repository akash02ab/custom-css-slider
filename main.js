const progressbar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const thumb = document.querySelector(".thumb");
const value = document.querySelector(".value");

let x = 0;

const mousedownhandler = (e) => {
    x = e.clientX;
    document.addEventListener("mousemove", mousemovehandler);
    document.addEventListener("mouseup", mouseuphandler);
}

const mouseuphandler = (e) => {
    document.removeEventListener("mousemove", mousemovehandler);
    document.removeEventListener("mouseup", mouseuphandler);
}

const mousemovehandler = (e) => {
    let dx = e.clientX - x;
    let currentX = thumb.offsetLeft + dx;
    
    if(currentX >= 0 && currentX < (progressbar.offsetWidth - thumb.clientWidth)) {
        thumb.style.left = currentX + "px";
        let percentage = Math.floor(thumb.offsetLeft / (progressbar.clientWidth - thumb.clientWidth - 2) * 100);
        value.innerText = `Value: ${percentage}%`
    }
    
    x = e.clientX;
}

thumb.addEventListener("mousedown", mousedownhandler);