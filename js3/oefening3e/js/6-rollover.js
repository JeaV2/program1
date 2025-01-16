function switchImg(state, ID){
    let img = window.document.images
    if(state == "over"){
        img[ID].src = `images/basset${ID+1}-kleur.jpg`;
    }
    else if(state == "out"){
        img[ID].src = `images/basset${ID+1}-zw.jpg`;
    }
}