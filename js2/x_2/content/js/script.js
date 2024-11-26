let nummer = Math.floor(Math.random() * 100) + 1;
console.log(nummer);

function check(){
    let gok = document.getElementById("gok").value;
    let resultaat = document.getElementById("resultaat");
    if (gok == "" || isNaN(gok)){
        resultaat.innerHTML = "Vul een nummer in!";
        return;
    }
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