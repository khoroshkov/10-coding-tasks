const capitalizeLetters = (string) => {
  // 1. classic loop
  //   const stringArray = string.toLowerCase().split(' ')
  //   for (let i = 0; i < stringArray.length; i++) {
  //     stringArray[i] =
  //       stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].substring(1)
  //   }
  //   return stringArray.join(' ')
  // 2. using map
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ')
}

console.log(capitalizeLetters('i love javascript veRY mucH'))


function capitalizeLettersInArray(arr) {
  return arr.map((word) => {
    return word
      .toLowerCase()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  });
}

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}