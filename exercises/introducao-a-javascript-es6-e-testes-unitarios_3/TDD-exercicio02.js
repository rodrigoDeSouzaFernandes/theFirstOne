const assert = require('assert');

const wordLengths = (array) => {
  let result = []
  for(let i in array) {
    result.push(array[i].length) 
  }
  return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);