// Definieer de teams 
const teamsThuis = ["Team1", "Team2", "Team3", "Team4", "Team5"];
const teamsUit = ["Team1", "Team2", "Team3", "Team4", "Team5"];

// Pak het element met de id 'output' en maak deze leeg
const outputElement = document.getElementById('output');
outputElement.innerHTML = ''; 

// Loop door de teams en maak voor elk team een wedstrijd tegen elk ander team
for (let i = 0; i < teamsThuis.length; i++) {
    for (let j = 0; j < teamsUit.length; j++) {
        if (teamsThuis[i] !== teamsUit[j]) { 
            const wedstrijd = `${teamsThuis[i]} VS ${teamsUit[j]}`;
            const wedstrijdElement = document.createElement('div');
            wedstrijdElement.textContent = wedstrijd;
            outputElement.appendChild(wedstrijdElement);
        }
    }
    // Voeg een horizontale lijn toe na een team
    const hrElement = document.createElement('hr');
    outputElement.appendChild(hrElement);
}
