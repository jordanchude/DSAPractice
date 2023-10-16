const { karatsubaMultiply } = require('./solution');

function testKaratsubaMultiplication() {
    function checkResult(x, y, expectedOutput) {
        const result = karatsubaMultiply(x, y);
        if (result === expectedOutput) {
            console.log(`Test passed for input: ${x} * ${y} = ${result}`);
        } else {
            console.error(`Test failed for input: ${x} * ${y}. Expected ${expectedOutput} but got ${result}`);
        }
    }

    // Note: Given our assumption, the test numbers are of equal length

    // Test case 1: Regular two-digit numbers
    checkResult(56, 12, 672);

    // Test case 2: Larger numbers
    checkResult(5678, 1234, 7006652);

    // Test case 3: Both numbers are single digit
    checkResult(6, 7, 42);

    // Test case 4: Testing with zeros
    checkResult(1000, 5678, 5678000);

    // Test case 5: Very large numbers
    checkResult(987654321, 123456789, 121932631112635269);
}

testKaratsubaMultiplication();
