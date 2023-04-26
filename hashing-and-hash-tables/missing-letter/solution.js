function findMissingLetter(str) {
    // notes
        // use hash table to identify missing letter
    // pseudocode
        // loop through string
            // add each character to hash table
        
        // loop through alphabet
            // if character in alphabet returns false in hashTable
            // return character
    // variables
        // hashTable
        // alphabet
    // edge cases
        // more than one letter is missing
        // the string is empty
        // the string has non-alphabetic characters in it

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let hashTable = {};

    // loop through string
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];

        hashTable[currentLetter] = true;
    }

    // loop through alphabet
    for (let i = 0; i < alphabet.length; i++) {
        let currentAlphabetLetter = alphabet[i];

        if (!hashTable[currentAlphabetLetter]) {
            return alphabet[i];            
        }
    }
}

console.log(findMissingLetter("the quick brown box jumps over a lazy dog"))

// Test cases
let desc, actual, expected;

desc = 'Example test case';
actual = findMissingLetter('the quick brown box jumps over a lazy dog');
expected = 'f';
assertEquals(actual, expected, desc);

// Add more test cases here

function assertEquals(a, b, desc) {
    if (a !== b) {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}
