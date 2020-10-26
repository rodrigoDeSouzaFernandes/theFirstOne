let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = [];

for(let index = 0; index < numbers.length; index += 1){
    result.push(numbers[index]*numbers[index + 1]);
}

console.log(result);