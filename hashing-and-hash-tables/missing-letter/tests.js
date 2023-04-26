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