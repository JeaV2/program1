let posX = 50
let radius = 10

window.onload = function() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0';
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
        ctx.arc(posX, 75, radius, 0, 2 * Math.PI);
        posX += 50*2.3;
        radius += 5;
    }
    ctx.fill();
    document.body.appendChild(canvas);
};