function randomCapitalize(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (Math.random() < 0.5) {
            result += word[i].toUpperCase();
        } else {
            result += word[i];
        }
    }
    return result;
}


let word = 'im very hungry!';
let randomizedWord = randomCapitalize(word);
console.log(randomizedWord);



function lower(word){
    let result = "";
    for(let i=0; i < word.length; i++){
        result += word[i].toLowerCase();

    }
    return result;
}