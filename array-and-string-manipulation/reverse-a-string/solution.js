// ['h','e','l','l','o']

function reverse(arrayOfChars) {
  // input: string
  // output: string

  // loop through the string
  // assign a temp value to the first element
  // swap final element to first element
  // assign last element to temp element

  // variables
  // left, right

  if (arrayOfChars.length === 0) return [];

  let left = 0;
  let right = arrayOfChars.length - 1;

  while (left < right) {
    let temp = arrayOfChars[left];
    arrayOfChars[left] = arrayOfChars[right];
    arrayOfChars[right] = temp;
    left++;
    right--;
  }

  return arrayOfChars;
}

console.log(reverse(['h','e','l','l','o']))

  // Tests
  
  let desc = 'empty string';
  let input = ''.split('');
  reverse(input);
  let actual = input.join('');
  let expected = '';
  assertEqual(actual, expected, desc);
  
  desc = 'single character string';
  input = 'A'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'A';
  assertEqual(actual, expected, desc);
  
  desc = 'longer string';
  input = 'ABCDE'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'EDCBA';
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }