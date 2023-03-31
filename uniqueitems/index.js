function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
  }
  
  console.log(removeDuplicates([1, 2, 3, 1, 2, ,3,3]));