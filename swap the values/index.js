function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  console.log(swapValues(5, 2));