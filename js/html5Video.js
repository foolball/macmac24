var myVideo = document.getElementById("player");

window.onload = function () {
    initCanvas();
}
var context;
function initCanvas() {
    video = document.getElementById("player");
    canvas = document.getElementById("canvas1");
    context = canvas.getContext("2d");
    video.addEventListener("timeupdate", paintFrame, false);
}
function paintFrame() {
    context.drawImage(video, 0, 0, 160, 80);
}

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 560;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}

