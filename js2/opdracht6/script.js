// Wachten tot de DOM geladen is
document.addEventListener('DOMContentLoaded', function() {
    // Array met namen van afbeeldingen
    const images = ["epichacker.png","genericstockimg1.jpg","genericstockimg2.jpg","leethackerbg.jpg","logo.png","meandwho.webp","skills.png","softwaredev.jpg","talen.jpg","wordcloud.jpg"];
    // selecteer de div waar de afbeeldingen in moeten komen
    const gridCont = document.querySelector('.gridCont');
    // Variabele voor de content
    let content = '';

    // Loop door de array heen en voeg de afbeeldingen toe aan de content
    for (let i = 0; i < images.length; i++) {
        content += `<div class="gridI"> <img src="img/${images[i]}" width="200"> <br> ${images[i]} <br><br> </div>`;
    }
    // Voeg de content toe aan de div
    gridCont.innerHTML = content;
});