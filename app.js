const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;
ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    // console.log(event)
}

let painting = false;

function stopPainting(event) {
    painting = false;
}

function stratPainting(event){
    painting = true;
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
    canvas.addEventListener("mousedown", stratPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}