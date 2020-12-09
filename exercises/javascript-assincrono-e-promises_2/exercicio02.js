const arrayPromise = () => {
  return new Promise((resolved, reject) => {
    
    let randomArray = [];
    let sum = 0;
      for (let i = 1; i <= 10; i += 1) {
        randomArray.push(Math.floor(Math.random() * 50 + 1)**2);
      }
    sum = randomArray.reduce((acc, cur) => acc + cur);
    if (sum < 8000) {
      resolved(sum)
    } else {
      reject ('É mais de oito mil! Essa promise deve estar quebrada!');
    }
    });
};
const arrayDivisor = [2, 3, 5, 10]
arrayPromise()
.then(elem => (arrayDivisor.map((a) => Math.round(elem/a))))
.then(array => array.reduce((a, b) => a+b))
.catch(error => console.log(error))
