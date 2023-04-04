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

var merge = function(intervals) {
    // input: an array of arrays
    // output: an array of arrays
    // notes: double loop O(n2)

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

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))