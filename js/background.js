function drawBackground() {
    let opacity = 0.1;
    let canvas = document.getElementById("background");
    let ctx = canvas.getContext("2d");
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function drawLine() {
        let x1 = rand(0, width);
        let x2 = rand(0, width);
        let y1 = rand(0, height);
        let y2 = rand(0, height);
        let grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(255, 0, 172, ${opacity})`);
        grad.addColorStop(1, `rgba(255, 0, 43, ${opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = rand(2, 12);
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.beginPath();
    }

    function drawCircle() {
        let x1 = rand(0, width);
        let x2 = rand(0, width);
        let y1 = rand(0, height);
        let y2 = rand(0, height);
        let grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(255, 0, 172, ${opacity})`);
        grad.addColorStop(1, `rgba(255, 0, 43, ${opacity})`);
        ctx.arc(rand(0, width), rand(0, height), rand(10, 400), 0, 2 * Math.PI, false);
        ctx.strokeStyle = grad;
        ctx.lineWidth = rand(2, 11);
        ctx.stroke();
        ctx.beginPath()
    }


    for (let i = 0; i < rand(7, 12); i++) {
        drawLine();
    }

    for (let i = 0; i < rand(5, 10); i++) {
        drawCircle();
    }
}
drawBackground();

let intervalID = window.setInterval(myCallback, 10);
let x = 0;
let val = 2000;
function myCallback() {
 if (x == val / 2) {
    drawBackground();
 } else if (x < val / 2) {
    let canvas = document.getElementById("background");
    let opacity = 1 - x / (val / 2);
    canvas.style.opacity = `${opacity}`;
 } else if (x == val) {
    x = 0;
 } else {
    let canvas = document.getElementById("background");
    let opacity = x / (val / 2) - 1;
    canvas.style.opacity = `${opacity}`;
 }
 x++;
}