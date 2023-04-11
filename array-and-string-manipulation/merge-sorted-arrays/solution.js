function mergeArrays(firstArray, secondArray) {

    let mergedArray = [];
    let i = 0;
    let j = 0;
    let currentMerge = 0;

      while (mergedArray.length < (firstArray.length + secondArray.length)) {

        let firstArrayExhausted = i >= firstArray.length;
        let secondArrayExhaused = j >= secondArray.length;
        
        if (!secondArrayExhaused && (firstArrayExhausted || firstArray[i] > secondArray[j])) {
          mergedArray[currentMerge] = secondArray[j];
          j++;
        } else {
          mergedArray[currentMerge] = firstArray[i];
          i++;
        }

        currentMerge++
      }

    
  
    return mergedArray;
  }

  const myArray = [3, 4, 6, 10, 11, 15];
  const alicesArray = [1, 5, 8, 12, 14, 19, 20, 21];

  console.log(mergeArrays(myArray, alicesArray));
  // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'both arrays are empty';
  let actual = mergeArrays([], []);
  let expected = [];
  assertDeepEqual(actual, expected, desc);
  
  desc = 'first array is empty';
  actual = mergeArrays([], [1, 2, 3]);
  expected = [1, 2, 3];
  assertDeepEqual(actual, expected, desc);
  
  desc = 'second array is empty';
  actual = mergeArrays([5, 6, 7], []);
  expected = [5, 6, 7];
  assertDeepEqual(actual, expected, desc);
  
  desc = 'both arrays have some numbers';
  actual = mergeArrays([2, 4, 6], [1, 3, 7]);
  expected = [1, 2, 3, 4, 6, 7];
  assertDeepEqual(actual, expected, desc);
  
  desc = 'arrays are different lengths';
  actual = mergeArrays([2, 4, 6, 8], [1, 7]);
  expected = [1, 2, 4, 6, 7, 8];
  assertDeepEqual(actual, expected, desc);
  
  function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
      console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
      console.log(`${desc} ... PASS`);
    }
  }