// Genereer een random nummer tussen 1 en 100
let nummer = Math.floor(Math.random() * 100) + 1;

function check(){
    // Definieer variabelen
    let gok = document.getElementById("gok").value;
    let resultaat = document.getElementById("resultaat");
    // Controleer of de input een getal is
    if (gok == "" || isNaN(gok)){
        resultaat.innerHTML = "Vul een nummer in!";
        return;
    }
    // Controleer of de gok correct is en geef feedback
    let geraden = false
    while(!geraden){
        if (gok == nummer){
            resultaat.innerHTML = "Gefeliciteerd, je hebt het nummer geraden!";
            geraden = true;
        }
        else if (gok < nummer){
            resultaat.innerHTML = "Het nummer is <strong>hoger</strong> dan je gok.";
            return;
        }
        else if (gok > nummer){
            resultaat.innerHTML = "Het nummer is <strong>lager</strong> dan je gok.";
            return;
        }
    }
}