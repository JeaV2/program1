// Definieer de variabelen voor de kaartnummers en kaarten
const kaartNummers = ["aas", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "boer", "vrouw", "heer"];
const kaarten = ["harten", "klaver", "ruiten", "schoppen"];
const kaartenHTML = document.getElementById("kaartenHTML");

// Functie om de kaarten en namen van de kaarten in de html pagina te zetten
function maakKaart(kaartNummer, kaart) {
    const card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `<p>${kaartNummer} van ${kaart}</p>`;
    card.innerHTML += `<img src="content/kaarten/${kaart}${kaartNummer}.png" alt="${kaartNummer} van ${kaart}">`;
    card.innerHTML += `<br><br>`;
    kaartenHTML.appendChild(card);
}

// Loop om de kaarten en kaartnummers te combineren en in de functie maakKaart te zetten
for (let i = 0; i < kaarten.length; i++) {
    for (let j = 0; j < kaartNummers.length; j++) {
        maakKaart(kaartNummers[j], kaarten[i]);
    }
}