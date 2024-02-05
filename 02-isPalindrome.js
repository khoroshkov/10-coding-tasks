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

function isPalindromeRecursive(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1));
  return false;
}
