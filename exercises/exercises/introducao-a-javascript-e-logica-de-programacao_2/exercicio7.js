let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = 0;

for(let index = 0; index < numbers.length; index++){
  if(smallerNumber == 0){
    smallerNumber = numbers[index];
  }
  else if(numbers[index] < smallerNumber){
    smallerNumber = numbers[index];
  }
  else{
    
  }
}

  console.log(smallerNumber);
