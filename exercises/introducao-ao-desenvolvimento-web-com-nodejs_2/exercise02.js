const someMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if(
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number" 
    ) reject('Informe apenas números');

    const result = (a+b)*c;
    
    if(result < 50) reject("Valor muito baixo")

    resolve(result);
  })
}

const randomNumbers = (n) => {
  return new Promise((resolve, reject) => {
    if(typeof n !== 'number') reject("Essa função só aceita números como parâmetro")

    const randomArray = [];

    for(let i = 0; i < n; i += 1) {
      const randomNumber = Math.round(Math.random()*100 + 1)
      randomArray.push(randomNumber)
    }

    resolve(randomArray)
  });
}

randomNumbers(3)
.then(data=> someMath(...data))
.then(resolve => console.log(resolve))
.catch(err=>console.log(err))
