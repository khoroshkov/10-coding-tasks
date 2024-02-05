const reverseString = (word) => {
  // 1. easiest solution with reverse() function
  // return word.split('').reverse().join('')
  // 2. Decreasing loop
  //   let reversedString = ''
  //   for (i = word.length - 1; i >= 0; i--) {
  //     reversedString = reversedString + word[i]
  //   }
  //   return reversedString
  // 3. Increasing loop
  //   let reversedString = ''
  //   for (i = 0; i <= word.length - 1; i++) {
  //     reversedString = word[i] + reversedString
  //   }
  //   return reversedString

  // 4.
  //   let reversedString = ''
  //   for (let char of word) {
  //     reversedString = char + reversedString
  //   }
  //   return reversedString

  // 5 forEach
  //   let reversedString = ''
  //   word.split('').forEach((char) => {
  //     reversedString = char + reversedString
  //   })
  //   return reversedString

  // 6 reduce
  return word.split('').reduce((reversedString, char) => {
    return char + reversedString
  }, '')
}

console.log(reverseString('hello'))

// recursive reverse string
function reverse(str){
 if(str === ''){
    return "";
  }
  return reverse(str.substring(1)) + str.charAt(0);
}

function reverse2(str){
	if(str.length <= 1) return str;
	return reverse2(str.slice(1)) + str[0];
}
