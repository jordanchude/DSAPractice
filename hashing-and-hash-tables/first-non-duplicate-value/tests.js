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