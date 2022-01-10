const canvas = document.getElementById('jsCanvas');

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    // console.log(event)
}

let painting = false;

function stopPaintng(event) {
    painting = false;
}


function onMouseDown(event) {
    painting = true;
}


function onMouseUp(event){
    stopPaintng();
}

function onMouseLeave(event) {
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}