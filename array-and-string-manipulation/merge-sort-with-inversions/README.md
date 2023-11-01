# Merge Sort with Inversions

## What is Merge Sort?

Merge Sort is a divide-and-conquer sorting algorithm that recursively splits an array into smaller arrays, sorts them, and then merges them back together in sorted order.

## Counting Inversions

In the realm of computer science and algorithms, an "inversion" in an array refers to a pair of elements that are out of order. For instance, in the array [2, 3, 1], (2, 1) and (3, 1) are inversions. Counting inversions is an interesting problem that helps in understanding the "sortedness" of an array. This implementation of Merge Sort will also count the number of inversions as the array is being sorted.

## Input and Output

Input: An array of integers that may be positive, negative, or zero.
Output: The sorted array and the number of inversions found in the input array.

### Additional Features

This implementation of Merge Sort with Inversions is written in JavaScript. It not only sorts the array but also returns the number of inversions found during the sorting process.