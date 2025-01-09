let hond = 5.5;
let gecko = 11;
let olifant = 1.6;
let vlieg = 1216;
let image = document.getElementById("img");
let resultaat = document.getElementById("resultaat");

function leeftijd(dier) {
    resultaat.innerHTML = "";
    let inputLeeftijd = document.getElementById("leeftijd").value;
    if (isNaN(inputLeeftijd) || inputLeeftijd === "") {
        resultaat.innerHTML = "Vul een getal in!";
        return;
    }
    else {
        inputLeeftijd = parseFloat(inputLeeftijd);
        if (dier === "hond") {
            if (inputLeeftijd === hond) {
                image.src = "./img/ok.gif";
                resultaat.innerHTML = `Dat klopt 1 mensenjaar is gelijk aan ${hond} hondenjaren.`;
            } else if (inputLeeftijd < hond) {
                image.src = "./img/arrow-up.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} hondenjaren. Het is meer.`;
            } else if (inputLeeftijd > hond) {
                image.src = "./img/arrow-down.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} hondenjaren. Het is minder.`;
            }
        }
        if (dier === "gecko") {
            if (inputLeeftijd === gecko) {
                image.src = "./img/ok.gif";
                resultaat.innerHTML = `Dat klopt 1 mensenjaar is gelijk aan ${gecko} geckojaren.`;
            } else if (inputLeeftijd < gecko) {
                image.src = "./img/arrow-up.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} geckojaren. Het is meer.`;
            } else if (inputLeeftijd > gecko) {
                image.src = "./img/arrow-down.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} geckojaren. Het is minder.`;
            }
        }
        if (dier === "olifant") {
            if (inputLeeftijd === olifant) {
                image.src = "./img/ok.gif";
                resultaat.innerHTML = `Dat klopt 1 mensenjaar is gelijk aan ${olifant} olifantenjaren.`;
            } else if (inputLeeftijd < olifant) {
                image.src = "./img/arrow-up.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} olifantenjaren. Het is meer.`;
            } else if (inputLeeftijd > olifant) {
                image.src = "./img/arrow-down.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} olifantenjaren. Het is minder.`;
            }
        }
        if (dier === "vlieg") {
            if (inputLeeftijd === vlieg) {
                image.src = "./img/ok.gif";
                resultaat.innerHTML = `Dat klopt 1 mensenjaar is gelijk aan ${vlieg} vliegenjaren.`
            } else if (inputLeeftijd < vlieg) {
                image.src = "./img/arrow-up.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} vliegenjaren. Het is meer.`;
            } else if (inputLeeftijd > vlieg) {
                image.src = "./img/arrow-down.gif";
                resultaat.innerHTML = `Nog niet helemaal, 1 mensenjaar is niet gelijk aan ${inputLeeftijd} vliegenjaren. Het is minder.`;
            }
        }
    }
}