const assert = require('assert');

const findTheNeedle = (array, word) => {
  let result = null;
  for(let i = 0; i < array.length; i += 1) {
    if(array[i] == word) {
      result = i;
    }
  }
  if(result == null) {return -1;} 
  else{return result;}
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);