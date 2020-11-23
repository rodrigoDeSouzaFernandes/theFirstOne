const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortFunction  = (a, b) => (a - b);
 
console.log(`Os números ${oddsAndEvens.sort(sortFunction)} se encontram ordenados de forma crescente!`);