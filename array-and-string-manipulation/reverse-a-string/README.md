## Reverse String In Place

Write a function that takes an array of characters and reverses the letters in place. The function should modify the input array and return it.

```
const input1 = ['h','e','l','l','o'];
reverseStringInPlace(input1);
console.log(input1); // should log ['o','l','l','e','h']

const input2 = ['w','o','r','l','d'];
reverseStringInPlace(input2);
console.log(input2); // should log ['d','l','r','o','w']
```

Note that the function takes an array of characters instead of a string. The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable type like an array, instead of JavaScript's immutable strings.