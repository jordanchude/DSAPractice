// [ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ];
// [ 'l', 'a', 'e', 't', 's', ' ', 'd', 'n', 'u', 'o', 'p', ' ','e', 'k', 'a', 'c']
[ ' ', 's', 't', 'e', 'a', 'l', ' ', 'p','o', 'u', 'n', 'd', 'e', 'k', 'a', 'c']

const reverseWords = (array) => {
    // input: array of strings
    // output: array of strings

    if (array.length === 0) return array;

    // pseudocode
    // variables: beginningOfReversal;

    array = reverseSingleWord(0, array.length - 1, array)

    let beginningOfReversal = 0;

    for (let i = 0; i <= array.length; i++) {
        if (i === array.length || array[i] === ' ') {
            reverseSingleWord(beginningOfReversal, i - 1, array)
            beginningOfReversal = i + 1;
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
