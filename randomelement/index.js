function extractElements(arr) {
    const [first, second, , , last] = arr;
    return [first, second, last];
  }
  

  console.log(extractElements([1, 2, 3, 4, 5]));