let baseValue = 11;

function calculateAndDisplaySum(inputValue, correction)
{
    let sum = inputValue + baseValue;
    let total = baseValue + sum + correction;
    document.write(baseValue + ", " + sum + ", " + total);
}

function displayBaseAndInput(inputValue)
{
    document.write(baseValue + ", " + inputValue);
}

calculateAndDisplaySum(1, 0); // Uitvoer: 11, 12, 23
document.write("<br />");

displayBaseAndInput(8); // Uitvoer: 11, 8
document.write("<br />");

//Welke functie met welke parameter moet ik aanroepen om het volgende antwoord te krijgen:
// Uitvoer: 12, 0
baseValue = 12;
displayBaseAndInput(0);
document.write("<br />");

//Welke functie met welke parameter moet ik aanroepen om het volgende antwoord te krijgen:
// Uitvoer: 12, 14, 24
baseValue = 12;
calculateAndDisplaySum(2, -2);
document.write("<br />");


//Welke functie met welke parameter moet ik aanroepen om het volgende antwoord te krijgen:
// Uitvoer: 13, 16, 39
baseValue = 13;
calculateAndDisplaySum(3, 10);
document.write("<br />");

//Welke functie met welke parameter moet ik aanroepen om het volgende antwoord te krijgen:
// Uitvoer: 14, 7
baseValue = 14;
displayBaseAndInput(7);
document.write("<br />");