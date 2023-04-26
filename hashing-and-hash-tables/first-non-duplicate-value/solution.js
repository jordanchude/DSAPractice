{}
function findFirstDuplicate(arr) {
    // notes
        // hashing to find duplicates
    // pseudocode
        // loop through array
            // if current element doesn't exist in the hash stable
                // add it with a value or true
            // if it does, return the value
    // variables
            // hash table
    // edge cases
        // array is empty
        // there are no duplicates
        // does the array accept all value types
    

        let hashTable = {};

        for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];
            
            if (!hashTable[currentElement]) {
                hashTable[currentElement] = true;
            } else {
                return currentElement;
            }
        }
}


console.log(findFirstDuplicate(["a", "b", "c", "d", "c", "e", "f"]))

// Test cases

let desc = 'First duplicate found';
// ... Rest of the test cases and the assertArrayEquals function

// Tests
let actual, expected;

desc = 'First duplicate found';
actual = findFirstDuplicate(['a', 'b', 'c', 'd', 'c', 'e', 'f']);
expected = 'c';
assertArrayEquals(actual, expected, desc);

desc = 'First duplicate found at beginning';
actual = findFirstDuplicate(['x', 'y', 'z', 'x', 'a', 'b', 'c', 'd']);
expected = 'x';
assertArrayEquals(actual, expected, desc);

desc = 'First duplicate found in middle';
actual = findFirstDuplicate(['1', '2', '3', '2', '4', '5']);
expected = '2';
assertArrayEquals(actual, expected, desc);

desc = 'First duplicate found at end';
actual = findFirstDuplicate(['apple', 'orange', 'banana', 'grape', 'apple']);
expected = 'apple';
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
    if (a !== b) {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}
