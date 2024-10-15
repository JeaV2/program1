// verzamel de leeftijd
let leeftijd = parseInt(window.prompt("Wat is je leeftijd?"));
console.log(leeftijd);

document.addEventListener('DOMContentLoaded', function() {
    // Controleert of de leeftijd een getal is en of de leeftijd binnen de grenzen valt.
    if (leeftijd < -1 || isNaN(leeftijd)) { 
        window.alert("Dit is geen geldige leeftijd");
        window.location.reload();
    } 
    if (leeftijd > 122) {
        window.alert("Je zou dan ouder zijn dan de oudste mens ooit. Dat is wel knap!");
        window.location.reload();
    }
    
    // Bepaalt de levensfase van de persoon.
    else if (leeftijd < 1) {
        document.getElementById("uitkomst").innerHTML = "baby";
    } else if (leeftijd >= 1 && leeftijd <= 3) {
        document.getElementById("uitkomst").innerHTML = "peuter";
    } else if (leeftijd >= 3 && leeftijd <= 6) {
        document.getElementById("uitkomst").innerHTML = "kleuter";
    } else if (leeftijd >= 6 && leeftijd <= 12) {
        document.getElementById("uitkomst").innerHTML = "kind";
    } else if (leeftijd >= 12 && leeftijd <= 16) {
        document.getElementById("uitkomst").innerHTML = "puber";
    } else if (leeftijd >= 16 && leeftijd <= 21) {
        document.getElementById("uitkomst").innerHTML = "adolescent";
    } else if (leeftijd >= 21) {
        document.getElementById("uitkomst").innerHTML = "volwassen";
    }
});
