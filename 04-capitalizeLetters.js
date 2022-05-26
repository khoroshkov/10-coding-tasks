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
