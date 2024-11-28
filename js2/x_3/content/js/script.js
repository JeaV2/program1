function maakRechthoek(){
    // Haal de breedte en hoogte op uit de inputvelden
    let breedte = document.getElementById("breedte").value;
    let hoogte = document.getElementById("hoogte").value;
    // Pak output element en maak deze leeg
    let rechthoek = document.getElementById("rechthoek");
    let rechthoekContent = "";
    
    // Loop om de rechthoek te tekenen
    for (let i = 0; i < hoogte; i++) {
        rechthoekContent += "<br>";
        for (let j = 0; j < breedte; j++) {
            rechthoekContent += "&#x25A0;";
        }
    }
    // Schrijf de rechthoek naar de pagina
    rechthoek.innerHTML = rechthoekContent;
}