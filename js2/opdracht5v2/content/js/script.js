// Definieer variable van de cirkel
let posX = 50
let radius = 10

// Voer de functie uit wanneer de pagina geladen is
window.onload = function() {
    // Maak een canvas element aan
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0';
    // Maak 10 cirkels aan
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
        ctx.arc(posX, 75, radius, 0, 2 * Math.PI);
        posX += 50*2.3;
        radius += 5;
    }
    ctx.fill();
    // Voeg het canvas element toe aan de body
    document.body.appendChild(canvas);
};