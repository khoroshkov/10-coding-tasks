const maxCharacter = (string) => {
  const charMap = {}
  let maxNum = 0
  let maxChar = ''

  string.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

console.log(maxCharacter('Javascript'))
