const isPalindrome = (str) => {
  // 1. with .reverse()
  // return str === str.split('').reverse().join('')

  // 2.
  let reversedString = ''
  str.split('').forEach((element) => {
    reversedString = element + reversedString
  })

  return str === reversedString
}

console.log(isPalindrome('hello'))
console.log(isPalindrome('racecar'))
