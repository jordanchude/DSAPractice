const { countInversions } = require('./solution');

// A helper function to print the test result
function printTestResult(testName, actual, expected) {
    if (actual === expected) {
      console.log(testName + ": Passed");
    } else {
      console.log(testName + ": Failed");
      console.log("Actual: " + actual);
      console.log("Expected: " + expected);
    }
}

// Test cases
let test1 = [5, -3, 1, 4, 0]; // Expected inversions: 5
let test2 = [10, -5, -10, 7, 3]; // Expected inversions: 8
let test3 = [-1]; // Expected inversions: 0
let test4 = []; // Expected inversions: 0
let test5 = [9, -8, 0, 6, -5]; // Expected inversions: 6

// Run the tests and print the results
printTestResult("Test 1", countInversions(test1), 5);
printTestResult("Test 2", countInversions(test2), 8);
printTestResult("Test 3", countInversions(test3), 0);
printTestResult("Test 4", countInversions(test4), 0);
printTestResult("Test 5", countInversions(test5), 6);
