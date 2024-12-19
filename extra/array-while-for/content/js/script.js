// Definer variabelen
let array = [1, 2, 3, 4, 5, "hello", "world", "javascript", "array", "while", "for"];
let arrayOutput = document.getElementById("arrayOutput");
let arrayLength = document.getElementById("arrayLength");
let arrayInt = document.getElementById("arrayInt");
let arrayString = document.getElementById("arrayString");

printArray();
telElementen();

function printArray() {
    // Loop over array met een for loop, en print de waardes in de array
    for (let i = 0; i < array.length; i++) {
        arrayOutput.innerHTML += `${array[i]}, `;
    }
    // Print de lengte van de array
    arrayLength.innerHTML = array.length;
}

function telElementen() {
    // Definieer variabelen voor het aantal nummers en strings
    let nummers = 0;
    let strings = 0;
    let i = 0;
    // Loop over de array met een while loop en tel het aantal nummers en strings
    while (i < array.length) {
        if (typeof array[i] === "number") {
            nummers++;
        } else if (typeof array[i] === "string") {
            strings++;
        }
        i++;
    }
    arrayInt.innerHTML = nummers;
    arrayString.innerHTML = strings;    
}

function voegToe() {
    let arrayInput = document.getElementById("arrayInput").value;
    
    if (arrayInput === "") {
        return;
    } 
    // Check of de input een nummer is
    if (!isNaN(arrayInput)) {
        arrayInput = parseInt(arrayInput);
    }
    
    console.log(arrayInput);
    // Voeg een waarde toe aan de array
    array.push(arrayInput);
    // Print de nieuwe array
    arrayOutput.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        arrayOutput.innerHTML += `${array[i]}, `;
    }
    // Print de nieuwe lengte van de array
    arrayLength.innerHTML = array.length;
    telElementen();
}

function verwijder() {
    // Verwijder het laatste element van de array
    array.pop();
    // Print de nieuwe array
    arrayOutput.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        arrayOutput.innerHTML += `${array[i]}, `;
    }
    // Print de nieuwe lengte van de array
    arrayLength.innerHTML = array.length;
    telElementen();
}