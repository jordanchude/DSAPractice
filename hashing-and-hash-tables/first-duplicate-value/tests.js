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