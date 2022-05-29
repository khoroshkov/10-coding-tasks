const missingLetters = (string) => {
  let compare = string.charCodeAt(0)
  let missing

  string.split('').map((char, i) => {
    if (string.charCodeAt(i) === compare) {
      ++compare
    } else {
      missing = String.fromCharCode(compare)
    }
  })

  return console.log(missing || 'all there')
}

missingLetters('abce') // 'd'
missingLetters('abcdefhi') // 'g'
missingLetters('abcdefghi') // 'all here'
