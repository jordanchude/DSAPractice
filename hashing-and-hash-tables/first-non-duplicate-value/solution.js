function firstNonDuplicateCharacter(str) {
    // notes
        // use hash table
        // find way to identify which duplicate came first
        // there will be two values that are non-duplicates
        // find non-duplicate values
        // return which one is first in the string
        // need to keep track of two things
            // if value is non-duplicate
            // index
    // variables
        // hashTable
    // pseudocode
        // loop through string
            // initialize key, value pair in hashTable with index
        // loop through hashTable
            // if 
    // edge cases
        // there are two non-duplicate values
}

// Test cases
let desc, actual, expected;

desc = "First non-duplicated character found";
// ... Rest of the test cases and the assertArrayEquals function

// Tests

desc = "First non-duplicated character found";
actual = firstNonDuplicateCharacter("minimum");
expected = "n";
assertArrayEquals(actual, expected, desc);

desc = "First non-duplicated character found in middle";
actual = firstNonDuplicateCharacter("abracadabra");
expected = "c";
assertArrayEquals(actual, expected, desc);

desc = "Only one non-duplicated character";
actual = firstNonDuplicateCharacter("aabbccddeeffg");
expected = "g";
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
    if (a !== b) {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}
