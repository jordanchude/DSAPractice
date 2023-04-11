## Merged Sorted Arrays

You have two friends, Bob and Carol, who are selling candies for a school fundraiser. They have lists of candies they've sold, represented by their "candy id" (an integer). Both lists are sorted numerically.

Write a function to merge their lists of candies into one sorted array.

For example:
```
const bobsCandies = [2, 4, 5, 7, 9, 13];
const carolsCandies = [1, 3, 6, 8, 10, 11, 12];

console.log(mergeCandyLists(bobsCandies, carolsCandies));
// logs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
```

Remember, you should aim to solve this problem in O(n) time and space.