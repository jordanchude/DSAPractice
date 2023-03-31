let selectionSort = (array) => {
    // loop through array
    // keep track of lowest number
    // after pass of array, re-assign lowest number and swap lowest number with first index, if necessary
    // if lowestNumberIndex doesn't equal to i, swap i and lowestNumberIndex
    // repeat

    // loop through array
    for (let i = 0; i < array.length; i++) {
        // keep track of lowest number
        let lowestNumberIndex = i;

        // look for lowest number index to swaps
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }

        if (lowestNumberIndex != i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }

    return array;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
  // A helper function to print the test result
  function printTestResult(testName, actual, expected) {
    if (arraysEqual(actual, expected)) {
      console.log(testName + ": Passed");
    } else {
      console.log(testName + ": Failed");
      console.log("Actual: " + actual);
      console.log("Expected: " + expected);
    }
  }
  
  // Test cases
  let test1 = [5, 3, 1, 4, 2];
  let test2 = [10, -5, 0, 7, 3];
  let test3 = [1];
  let test4 = [];
  let test5 = [9, 8, 7, 6, 5];
  
  // Expected outputs
  let expected1 = [1, 2, 3, 4, 5];
  let expected2 = [-5, 0, 3, 7, 10];
  let expected3 = [1];
  let expected4 = [];
  let expected5 = [5, 6, 7, 8, 9];
  
  // Run the tests and print the results
  printTestResult("Test 1", selectionSort(test1), expected1);
  printTestResult("Test 2", selectionSort(test2), expected2);
  printTestResult("Test 3", selectionSort(test3), expected3);
  printTestResult("Test 4", selectionSort(test4), expected4);
  printTestResult("Test 5", selectionSort(test5), expected5);