let frase = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'

const longestWord = string => {
    const array = string.split(' ');
    let longest = "";
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > longest.length) {
            longest = array[i]
        }
    }
    console.log(longest);
}

longestWord(frase);