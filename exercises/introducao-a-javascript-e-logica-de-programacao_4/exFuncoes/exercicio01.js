function palindromo(palavra){
    let reverse = ""
    for( let i = 0; i < palavra.length; i++){
         reverse = palavra[i] + reverse;
    }
    
    if(reverse === palavra){
        return palavra + " é um palíndromo"
    }
    else{return palavra + " não é um palíndromo"}
}

console.log(palindromo("arara"));
console.log(palindromo("aviao"));
console.log(palindromo("apos a sopa"));
console.log(palindromo("12321"));
console.log(palindromo("caminhao"));
