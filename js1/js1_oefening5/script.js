let naam = "Jea vZ "
let hobbies = "Gamen, skaten, lezen, slapen "
let favoGames = "Watch_dogs2, Noita, Otherworld Legends, NIGHT-RUNNERS PROLOGUE"
let concat;

// Using concat
concat = naam.concat('mijn hobbies zijn: ', hobbies, 'en mijn favoriete games zijn: ',favoGames);
console.log(`Mijn naam is ${concat}`)

// Without concat
let newStr = `Mijn naam is ${naam.trimEnd()}. Mijn hobbies zijn: ${hobbies.trimEnd()}. En mijn Favoriete games zijn: ${favoGames.trimEnd()}.`
console.log(newStr)