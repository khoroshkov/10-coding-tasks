function averagePair(array, average) {
  // add whatever parameters you deem necessary - good luck!
  if (!array.length || array.length === 1) {
    return false;
  }

  let tempSum = 0;
  let nextInteger = 1;
  let currentInteger = 0;

  while (nextInteger <= array.length) {
    tempSum = array[currentInteger] + array[nextInteger];

    if (tempSum / 2 === average) {
      console.log('array', array);
      return true;
    } else {
      nextInteger += 1;
      currentInteger += 1;
    }
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 10, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
