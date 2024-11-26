function maakRechthoek(){
    let breedte = document.getElementById("breedte").value;
    let hoogte = document.getElementById("hoogte").value;
    let rechthoek = document.getElementById("rechthoek");
    let rechthoekContent = "";
    
    for (let i = 0; i < hoogte; i++) {
        rechthoekContent += "<br>";
        for (let j = 0; j < breedte; j++) {
            rechthoekContent += "&#x25A0;";
        }
    }
    rechthoek.innerHTML = rechthoekContent;
}