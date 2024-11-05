function bereken() {
    // Variabelen definiëren
    let getal = parseFloat(document.getElementById("getal").value);
    let getal2 = parseFloat(document.getElementById("getal2").value);
    let som;
    let verschil;
    let product;
    let deling;
    let modulo;
    let output;

    // Pak de getallen uit de inputvelden en controleer of er iets is ingevuld
    if (isNaN(getal) || isNaN(getal2)) {
        alert("Vul beide getallen in!");
        return;
    }
    // Bereken de som van de getallen
    som = `${getal} + ${getal2} = ${getal + getal2}`;
    // Bereken het verschil van de getallen
    verschil = `${getal} - ${getal2} = ${getal - getal2}`;
    // Bereken het product van de getallen
    product = `${getal} * ${getal2} = ${getal * getal2}`;
    // Bereken de deling van de getallen
    deling = `${getal} / ${getal2} = ${getal / getal2}`;
    // Bereken de modulo van de getallen
    modulo = `${getal} % ${getal2} = ${getal % getal2}`;

    // Maak de output
    output = document.getElementById("outputBerekening");
    output.innerHTML = `
    ${som}<br>
    ${verschil}<br>
    ${product}<br>
    ${deling}<br>
    ${modulo}
    `;
}