for (let i = 0; i < 10; i++) {
    // Maak de div
    let div = document.createElement("div")
    // Geef de div een id
    div.setAttribute("id", `div${i}`);
    // Voeg de div toe aan de body
    document.body.appendChild(div);
    // Geef de div een tekst
    div.innerHTML = `Dit is div ${i + 1}`;

    // Geef de div een hoogte en breedte
    div.style.width = '98vw';
    div.style.height = '9.7vh';
    // Geef de div een border
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    setTimeout(() => {
        location.reload();
    }, 500);
}