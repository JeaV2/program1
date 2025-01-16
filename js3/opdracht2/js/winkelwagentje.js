//maak eerst variabelen aan waarbij je de totaalprijs van de appels, peren en bananen bijhoudt.
let totaalPrijs = 0;
let totaalAppels = 0;
let totaalPeren = 0;
let totaalBananen = 0;
let totaal_appel = document.getElementById("totaal_appel");
let totaalPrijs_appel = document.getElementById("totaalPrijs_appel");
let totaal_peer = document.getElementById("totaal_peer");
let totaalPrijs_peer = document.getElementById("totaalPrijs_peer");
let totaal_banaan = document.getElementById("totaal_banaan");
let totaalPrijs_banaan = document.getElementById("totaalPrijs_banaan");


//maak een functie waar het product wordt gekocht. Gebruik argumenten om door te geven welk fruit gekocht wordt.
function koopProduct(fruit, prijs){
    if(fruit == "appel"){
        totaalAppels++;
        totaalPrijs += prijs;
        totaal_appel.value = totaalAppels;
        totaalPrijs_appel.value = totaalAppels*prijs;
    } else if(fruit == "peer"){
        totaalPeren++;
        totaalPrijs += prijs;
        totaal_peer.value = totaalPeren;
        totaalPrijs_peer.value = totaalPeren*prijs;
    } else if(fruit == "banaan"){
        totaalBananen++;
        totaalPrijs += prijs;
        totaal_banaan.value = totaalBananen;
        totaalPrijs_banaan.value = totaalBananen*prijs;
    }
    return totaalPrijs;
}



//maak een functie waar het product wordt verkocht. Gebruik ook hier argumenten om door te geven om welk fruit het gaat.
function verwijderProduct(fruit, prijs){
    if(fruit == "appel"){
        if(totaalAppels > 0){
            totaalAppels--;
            totaalPrijs -= prijs;
            totaal_appel.value = totaalAppels;
            totaalPrijs_appel.value = totaalAppels*prijs;
        }
    } else if(fruit == "peer"){
        if(totaalPeren > 0){
            totaalPeren--;
            totaalPrijs -= prijs;
            totaal_peer.value = totaalPeren;
            totaalPrijs_peer.value = totaalPeren*prijs;
        }
    } else if(fruit == "banaan"){
        if(totaalBananen > 0){
            totaalBananen--;
            totaalPrijs -= prijs;
            totaal_banaan.value = totaalBananen;
            totaalPrijs_banaan.value = totaalBananen*prijs;
        }
    }
    return totaalPrijs;
}


//maak  een aparte functie waarin je de totaalprijs berekend.
function berekenPrijs(){
    let totaalPrijsOut = document.getElementById("totaalPrijs");
    totaalPrijsOut.value = totaalPrijs;
}