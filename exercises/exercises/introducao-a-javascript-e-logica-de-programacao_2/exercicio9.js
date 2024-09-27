let count = [];

for(let index = 1; index <= 25; index += 1){
    count.push(index);
}


let divided = [];

for(let division = 0; division < count.length; division += 1){
    divided.push(count[division]/2);
}
console.log(divided);