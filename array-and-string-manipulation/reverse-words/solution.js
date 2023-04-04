// [ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ];
// [ 'l', 'a', 'e', 't', 's', ' ', 'd', 'n', 'u', 'o', 'p', ' ','e', 'k', 'a', 'c']
[ ' ', 's', 't', 'e', 'a', 'l', ' ', 'p','o', 'u', 'n', 'd', 'e', 'k', 'a', 'c']

const reverseWords = (array) => {
    // input: array of strings
    // output: array of strings

    if (array.length === 0) return array;

    // pseudocode
    // variables: beginningOfReversal;

    let beginningOfReversal = 0;
    array = reverseSingleWord(0, array.length - 1, array)

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === ' ') {
            reverseSingleWord(beginningOfReversal, i - 1, array)
            beginningOfReversal = i + 1;
        } else if (i === array.length - 1) {
            reverseSingleWord(beginningOfReversal, i, array);
        }
    }
    return array;
}

const reverseSingleWord = (left, right, array) => {

    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }

    return array;
}

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ])); // [ ' ', 's', 't', 'e', 'a', 'l', ' ', 'p','o', 'u', 'n', 'd', ' ','e', 'k', 'a', 'c']
