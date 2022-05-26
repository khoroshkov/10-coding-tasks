// Change letters  - letter char + 1 and capitalize the vowels
const letterChanges = (str) => {
  let newStr = str.replace(/[a-z]/gi, function (char) {
    if (char === 'z' || char === 'Z') {
      return 'a'
    } else {
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  })

  newStr = newStr.replace(/a|e|i|o|u|y/gi, function (vowel) {
    return vowel.toUpperCase()
  })

  return console.log(newStr)
}

letterChanges('hello there') // Ifmmp UIfsf
