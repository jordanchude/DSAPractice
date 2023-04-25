function findIntersection(arr1, arr2) {
    // notes
        // hashing to make each element true in a hash table
    // pseudocode
        // loop through array one
            // create a boolean, "true," for each item in the array
        
        // loop through array 2
            // if current item is true in hash table
            // add to intersection array
    // return the intersection array
    
    // variables
        // intersection array
        // hash table

    // edge cases
        // if one of the arrays is empty, return an empty array
        // if there's no intersection, return empty array
        // does it handle different data types?
        // with duplicates, add it twice

    let hashTable = {};
    let intersectionArr = [];

    if (arr1.length === 0 || arr2.length === 0) return []


    for (let i = 0; i < arr1.length; i++) {
        hashTable[arr1[i]] = true;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (hashTable[arr2[i]] === true) {
            intersectionArr.push(arr2[i]);
        }
    }

    return intersectionArr
}

findIntersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8])
  
  // Tests
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
  