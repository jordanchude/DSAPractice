 // Test cases for the mergeIntervals function
// Using console.log and JSON.stringify to compare arrays

// Test case 1: intervals = [[1,3], [2,6], [8,10], [15,18]]
let intervals1 = [[1,3], [2,6], [8,10], [15,18]];
let expected1 = [[1,6], [8,10], [15,18]];
let actual1 = mergeIntervals(intervals1);
console.log(JSON.stringify(actual1) === JSON.stringify(expected1)); // true

// Test case 2: intervals = [[1,4], [4,5]]
let intervals2 = [[1,4], [4,5]];
let expected2 = [[1,5]];
let actual2 = mergeIntervals(intervals2);
console.log(JSON.stringify(actual2) === JSON.stringify(expected2)); // true

// Test case 3: intervals = [[1,2], [3,4], [5,6]]
let intervals3 = [[1,2], [3,4], [5,6]];
let expected3 = [[1,2], [3,4], [5,6]];
let actual3 = mergeIntervals(intervals3);
console.log(JSON.stringify(actual3) === JSON.stringify(expected3)); // true

// Test case 4: intervals = [[1,10], [2,3], [4,5], [6,7], [8,9]]
let intervals4 = [[1,10], [2,3], [4,5], [6,7], [8,9]];
let expected4 = [[1,10]];
let actual4 = mergeIntervals(intervals4);
console.log(JSON.stringify(actual4) === JSON.stringify(expected4)); // true

// Test case 5: intervals = []
let intervals5 = [];
let expected5 = [];
let actual5 = mergeIntervals(intervals5);
console.log(JSON.stringify(actual5) === JSON.stringify(expected5)); // true