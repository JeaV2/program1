// Opdracht 3
// De 10 regels van het gedicht.
let regel1 = "De zee bruist"
let regel2 = "je stortte je in m'n zee en we waren gelukkig"
let regel3 = "zinnen van de zee"
let regel4 = "maar wat zo'n zin zee"
let regel5 = "dat zegt de zee mij niet"
let regel6 = "een zalig gevoel"
let regel7 = "de zee die ruist"
let regel8 = "dan betekent"
let regel9 = "m'n hart was een rustige zee"
let regel10 = "de zee ruist zinnen"

// Opdracht 4
// Log de lengte van iedere regel en de regel zelf naar de console.
console.log(regel1,regel1.length)
console.log(regel2,regel2.length)
console.log(regel2,regel2.length)
console.log(regel3,regel3.length)
console.log(regel3,regel3.length)
console.log(regel4,regel4.length)
console.log(regel5,regel5.length)
console.log(regel6,regel6.length)
console.log(regel7,regel7.length)
console.log(regel8,regel8.length)
console.log(regel9,regel9.length)
console.log(regel10,regel10.length)

// Opdracht 5 en 6
// Checkt welke zinnen een oneven aantal tekens hebben en zet deze in hoofdletters.
const isOdd = num => num % 2 === 1;
document.addEventListener("DOMContentLoaded", function () {
    if (isOdd(regel1.length)){
        document.getElementById('1').innerHTML = regel1.toUpperCase();
    }
    else{
        document.getElementById('1').innerHTML = regel1;
    }

    if (isOdd(regel2.length)){
        document.getElementById('2').innerHTML = regel2.toUpperCase();
    }
    else{
        document.getElementById('2').innerHTML = regel2;
    }

    if (isOdd(regel3.length)){
        document.getElementById('3').innerHTML = regel3.toUpperCase();
    }
    else{
        document.getElementById('3').innerHTML = regel3;
    }

    if (isOdd(regel4.length)){
        document.getElementById('4').innerHTML = regel4.toUpperCase();
    }
    else{
        document.getElementById('4').innerHTML = regel4;
    }

    if (isOdd(regel5.length)){
        document.getElementById('5').innerHTML = regel5.toUpperCase();
    }
    else{
        document.getElementById('5').innerHTML = regel5;
    }

    if (isOdd(regel6.length)){
        document.getElementById('6').innerHTML = regel6.toUpperCase();
    }
    else{
        document.getElementById('6').innerHTML = regel6;
    }

    if (isOdd(regel7.length)){
        document.getElementById('7').innerHTML = regel7.toUpperCase();
    }
    else{
        document.getElementById('7').innerHTML = regel7;
    }

    if (isOdd(regel8.length)){
        document.getElementById('8').innerHTML = regel8.toUpperCase();
    }
    else{
        document.getElementById('8').innerHTML = regel8;
    }

    if (isOdd(regel9.length)){
        document.getElementById('9').innerHTML = regel9.toUpperCase();
    }
    else{
        document.getElementById('9').innerHTML = regel9;
    }

    if (isOdd(regel10.length)){
        document.getElementById('10').innerHTML = regel10.toUpperCase();
    }
    else{
        document.getElementById('10').innerHTML = regel10;
    }
});
