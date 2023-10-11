
let mergeSort = (arr) => {
    // pseudocode
    // if input is one or zero, return array

    // split array into two recursively
    // merge halfs using merge function

    if (arr.length === 0 || arr.length === 1) { // one operation
        return arr;
    }

    let mid = Math.floor(arr.length / 2) // one operation
    let leftHalf = arr.slice(0, mid); // n/2 operations (you're copying half the array)
    let rightHalf = arr.slice(mid) // n/2 operations (you're copying the other half)


    let leftSorted = mergeSort(leftHalf); // T(n/2) operations (You're recursively sorting half of the array)
    let rightSorted = mergeSort(rightHalf); // T(n/2) operations (Same for the other half)

    return merge(leftSorted, rightSorted) // O(n) operations
}

let merge = (left, right) => {
    // pseudocode
    // initialize result as empty array

    let result = []; // 1 operation

    // while left and right have items
        // if left is less than right, remove left and add left to result
        // if right is less than left, remove right and add right to result
    // endif

    while (left.length && right.length) { // O(n) operations (you're iterating through the entire array)
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    // append remaining items to result
    return result.concat(left, right) // O(n) operations

    // return the result
    return result; // 1 operation
}

// total operations:

module.exports = { mergeSort };
