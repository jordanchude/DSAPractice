let mergeSort = (arr) => {
    // pseudocode
    // if input is one or zero, return array

    // split array into two recursively
    // merge halfs using merge function

    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2)

    let leftHalf = arr.slice(0, mid);
    let rightHalf = arr.slice(mid)

    let leftSorted = mergeSort(leftHalf);
    let rightSorted = mergeSort(rightHalf);

    return merge(leftSorted, rightSorted)
}

let merge = (left, right) => {
    // pseudocode
    // initialize result as empty array

    let result = [];

    // while left and right have items
        // if left is less than right, remove left and add left to result
        // if right is less than left, remove right and add right to result
    // endif

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    // append remaining items to result
    if (left.length) result.concat(...left);
    if (right.length) result.concat(...right);

    // return the result
    return result;
}

// NEXT: CHANGE FOR NEGATIVE NUMBERS EDGE CASE

module.exports = { mergeSort };
