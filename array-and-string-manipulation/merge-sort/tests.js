const { mergeSort } = require('./solution');

// A helper function to check if two arrays are equal
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
let test1 = [5, -3, 1, 4, 0];
let test2 = [10, -5, -10, 7, 3];
let test3 = [-1];
let test4 = [];
let test5 = [9, -8, 0, 6, -5];

// Expected outputs
let expected1 = [-3, 0, 1, 4, 5];
let expected2 = [-10, -5, 3, 7, 10];
let expected3 = [-1];
let expected4 = [];
let expected5 = [-8, -5, 0, 6, 9];

// Assuming your merge sort function is named "mergeSort"
// Run the tests and print the results
printTestResult("Test 1", mergeSort(test1), expected1);
printTestResult("Test 2", mergeSort(test2), expected2);
printTestResult("Test 3", mergeSort(test3), expected3);
printTestResult("Test 4", mergeSort(test4), expected4);
printTestResult("Test 5", mergeSort(test5), expected5);

