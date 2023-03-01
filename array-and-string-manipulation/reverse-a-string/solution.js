function reverse(arrayOfChars) {
  
    // loop through string
    // assign first letter to last letter
    // assign last letter to first letter
    
    let left = 0;
    let right = arrayOfChars.length - 1;
    
    while (left < right) {
      let temp = arrayOfChars[left];
      arrayOfChars[left] = arrayOfChars[right];
      arrayOfChars[right] = temp;
      left++;
      right--;
    }
    return arrayOfChars;
  }
  
  // [j, o, r, d, a, n] original
  // [n, o, r, d, a, n] assign first element to last element
  // [n, o, r, d, a, j] assign last element to temp
  // increment left forward one
  // decrement right backwards one