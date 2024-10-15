// Define de function bereken() en roept deze aan wanneer de button in de HTML wordt geklikt.
function bereken() {
    // Verzamelt de prijs en het aantal en controleert of deze geldig zijn.
    let prijs = document.getElementById("prijs").value;
    let aantal = document.getElementById("aantal").value;
    if (prijs == "" || aantal == "" || isNaN(prijs) || isNaN(aantal)) {
        window.alert("Vul een geldige prijs en aantal in.");
    }
    // Berekent het totaal en zet het op 2 decimalen.
    else {
        let totaal = prijs * aantal;
        totaal = totaal.toFixed(2);
        document.getElementById("totaal").innerHTML = totaal;
    }
}