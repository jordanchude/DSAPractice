// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */

var mergeIntervals = function(intervals) {
    // input: an array of arrays
    // output: an array of arrays
    // notes: double loop O(n2)

    if (intervals.length === 0) return intervals;

    // pseudocode
    // create output array
    // sort intervals by first number in specific array
    // if the first number in the current array is bigger than the second number in the last added array
    // compare the second element in each array and assign the first array the bigger of the two
    // add the array to the output
    
    let sortedIntervals = intervals.sort((a, b) => {
      return a[0] - b[0];
    })

    let mergedIntervals = [sortedIntervals[0]]

    for (let i = 1; i < sortedIntervals.length; i++) {
      let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
      let currentInterval = sortedIntervals[i];

      if (lastMergedInterval[1] >= currentInterval[0]) {
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        mergedIntervals.push(currentInterval);
      }

    }

    return mergedIntervals;
};

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))

// TESTS

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