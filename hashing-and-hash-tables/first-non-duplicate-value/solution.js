function firstNonDuplicateCharacter(str) {

    let hashTable = {};

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];

        if (!hashTable[currentLetter]) {
            hashTable[currentLetter] = 0;
        }

        hashTable[currentLetter] += 1;
    }

    for (element in hashTable) {
        if (hashTable[element] === 1) {
            return element;
        }
    }

}

console.log(firstNonDuplicateCharacter("minimum"))

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
