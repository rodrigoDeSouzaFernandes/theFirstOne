let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerNumber = 0
let anothers = []
for(let index = 0; index < numbers.length; index++){
  if(numbers[index] > biggerNumber){
    biggerNumber = numbers[index]
  }
  else{
    anothers.push(numbers[index]);
  }
  
  console.log(biggerNumber);
