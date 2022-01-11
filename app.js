// 선채우기
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");
const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 600;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = INITIAL_COLOR;
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


function handleCanvasClick(event){
    if(filling){
        ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
    }
    
}

// 마우스 이미지 다운 방지
function handleCM(event){
    event.preventDefault();
    console.log(event)
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", stratPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}


// 색상 바꾸기

const colors = document.getElementsByClassName('jsColor');

// console.log(Array.from(colors))

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

function handleColorClick(event){
    // console.log(event.target.style)
    const color = event.target.style.backgroundColor;
    console.log(color)
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


// 선 굵기 바꾸기

const range = document.getElementById('jsRange');

function handleRangeChange(event){
    const size = event.target.value
    ctx.lineWidth = size
}


if(range){
    range.addEventListener("input", handleRangeChange);
}

// 켄버스 채우기

const mode = document.getElementById('jsMode');



let filling = false;
ctx.fillStyle = INITIAL_COLOR;

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"
    }else{
        filling = true;
        mode.innerText = "Paint"
        ctx.fillStyle = ctx.strokeStyle;
    }
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

// 저장하기

const saveBtn = document.getElementById('jsSave');


function handleSaveClick(event){
    const image = canvas.toDataURL('image/jpeg');
    // console.log(image)
    const link = document.createElement('a');
    link.href = image;
    link.download = "PaintJS";
    link.click();
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}


// 리셋 기능

const reset = document.getElementById('jsReset');

function handleResetClick(event){
    window.location.reload()
}

if(reset){
    reset.addEventListener("click", handleResetClick);
}