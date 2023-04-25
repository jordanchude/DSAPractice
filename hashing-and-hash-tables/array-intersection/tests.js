  let desc = 'Non-empty intersection';
  let actual = findIntersection([1, 3, 5, 7, 9], [2, 3, 5, 7, 11]);
  let expected = [3, 5, 7];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'Empty intersection';
  actual = findIntersection([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
  expected = [];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'One empty array';
  actual = findIntersection([1, 2, 3, 4, 5], []);
  expected = [];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'Both arrays are empty';
  actual = findIntersection([], []);
  expected = [];
  assertArrayEquals(actual, expected, desc);
  
  function assertArrayEquals(a, b, desc) {
    const arrayA = JSON.stringify(a);
    const arrayB = JSON.stringify(b);
    if (arrayA !== arrayB) {
      console.log(`${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`);
    } else {
      console.log(`${desc} ... PASS`);
    }
  }