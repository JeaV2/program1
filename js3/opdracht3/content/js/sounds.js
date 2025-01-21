// Define variables for the pop sfx
const pop1 = new Audio('content/sfx/pop1.mp3');
const pop2 = new Audio('content/sfx/pop2.mp3');
const pop3 = new Audio('content/sfx/pop3.mp3');
const pop4 = new Audio('content/sfx/pop4.mp3');

// array with pop sfx
const popSounds = [pop1, pop2, pop3, pop4];

// play pop sfx when a, s, d or f keys are pressed
// Stop all sounds when x is pressed
document.addEventListener('keydown', function keyPress(event) {
    if (event.key === 'a'){
        popSounds[0].play();
    }
    if (event.key === 's'){
        popSounds[1].play();
    }
    if (event.key === 'd'){
        popSounds[2].play();
    }
    if (event.key === 'f'){
        popSounds[3].play();
    }
    if (event.key === 'x'){
        for (let i = 0; i < popSounds.length; i++) {
            popSounds[i].pause();
            popSounds[i].currentTime = 0;
        }
    }
});