// built-in method flat(Infinity)

const flattenArray = (array) => {
  //  SOLUTION #1
  //   const flattenedArray = []
  //   array.forEach((val) => {
  //     if (Array.isArray(val)) {
  //       flattenedArray.push(...val)
  //     } else {
  //       flattenedArray.push(val)
  //     }
  //   })
  // return console.log(flattenedArray)

  // SOLUTION #2
  //const flattenedArray = array.reduce((a, b) => a.concat(b))

  // SOLUTION #3
  const flattenedArray = [];
  flattenedArray.concat(...array);

  return console.log([].concat(...array));
};

const flattenArray = (array) => {
  // Your solution here
};

flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10], 11]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function flatten(oldArr) {
  const newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
