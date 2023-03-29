function testBubbleSort() {
    function checkResult(input, expectedOutput) {
        const result = bubbleSort(input);
        if (JSON.stringify(result.sortedArray) === JSON.stringify(expectedOutput.sortedArray) &&
            result.swapCount === expectedOutput.swapCount) {
            console.log(`Test passed for input: [${input}]`);
        } else {
            console.error(`Test failed for input: [${input}]. Expected ${JSON.stringify(expectedOutput)} but got ${JSON.stringify(result)}`);
        }
    }

    // Test case 1: Unsorted list of integers
    checkResult([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], {
        sortedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        swapCount: 45
    });

    // Test case 2: Sorted list of integers
    checkResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {
        sortedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        swapCount: 0
    });

    // Test case 3: List with duplicate values
    checkResult([3, 1, 4, 1, 5, 9, 2, 6, 5], {
        sortedArray: [1, 1, 2, 3, 4, 5, 5, 6, 9],
        swapCount: 14
    });

    // Test case 4: List with negative integers
    checkResult([-5, -1, 0, 3, -8, 4, -2], {
        sortedArray: [-8, -5, -2, -1, 0, 3, 4],
        swapCount: 10
    });

    // Test case 5: Single-element list
    checkResult([42], {
        sortedArray: [42],
        swapCount: 0
    });
}

// Run the tests
testBubbleSort();
