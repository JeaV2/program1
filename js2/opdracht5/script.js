// Arrays met landen
const europa = ["Nederland", "Duitsland", "België", "Spanje",];
const azie = ["China", "Japan", "India", "Indonesië",];
const afrika = ["Nigeria", "Egypte", "Kenia", "Zuid-Afrika",];
const noordAmerika = ["Verenigde Staten", "Mexico", "Canada", "Cuba",];
const zuidAmerika = ["Brazilië", "Argentinië", "Colombia", "Chili",];

// Loop door de arrays heen en voegt de landen toe aan de pagina in een lijst
for (let i = 0; i < europa.length; i++) {
    document.getElementById("europa").innerHTML += `<ul><li>${europa[i]}</li></ul>`;
}
for (let i = 0; i < azie.length; i++) {
    document.getElementById("azie").innerHTML += `<ul><li>${azie[i]}</li></ul>`;
}
for (let i = 0; i < afrika.length; i++) {
    document.getElementById("afrika").innerHTML += `<ul><li>${afrika[i]}</li></ul>`;
}
for (let i = 0; i < noordAmerika.length; i++) {
    document.getElementById("noordAmerika").innerHTML += `<ul><li>${noordAmerika[i]}</li></ul>`;
}
for (let i = 0; i < zuidAmerika.length; i++) {
    document.getElementById("zuidAmerika").innerHTML += `<ul><li>${zuidAmerika[i]}</li></ul>`;
}