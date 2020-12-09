const arrayPromise = () => {
  return new Promise((resolved, reject) => {
    const arrayDivisor = [2, 3, 5, 10]
    let randomArray = [];
    let sum = 0;
      for (let i = 1; i <= 10; i += 1) {
        randomArray.push(Math.floor(Math.random() * 50)**2);
      }
    sum = randomArray.reduce((acc, cur) => acc + cur);
    if (sum < 8000) {
      resolved(arrayDivisor.map((elem) => Math.round(sum/elem)))
    } else {
      reject ('É mais de oito mil! Essa promise deve estar quebrada!');
    }
    });
};

arrayPromise()
.then(elem => console.log(elem))
.catch(error => console.log(error));
