var loop;
var canvas;
var context;
var cx=200;
var cy=200;
var width=400;
var height=400;
var radius=10;
var vx=5;
var vy=7;
function init() {
    canvas=document.getElementById("game-canvas");
    context=canvas.getContext("2d");
    //context variable is necessary for drawing
}

function begin() {
    loop=setInterval(draw,1);
    console.log("helloworld");
    //set interval implies that draw function is excuted after every one millisecond.it erases the whole canvas and after 1 milliseconds if redraws.
}

function stop() {
    clearInterval(loop);
    //clearInterval actually stops the interval due to which the ball is also stopped here.it actually stops everything
}
function draw() {
    context.clearRect(0,0,width,height);
    //clear rect cleares the canvas
    //beginPath is necessary to start drawing
    //fill styel only gives the color but fill actually fills the shape or object
    context.beginPath();
    context.fillStyle="#0000ff";
    context.arc(cx,cy,radius,0,Math.PI*2,true);
    context.closePath();
    //closePath is necessary to end drawing
    context.fill();
    cx=cx+vx;
    cy=cy+vy;
    if(cx>=width){
        vx=-vx;
    }
    if(cy>=height) {
        vy=-vy;
    }
    if(cx<=0) {
        vx=-vx;
    }
    if(cy<=0) {
        vy=-vy;
    }
}