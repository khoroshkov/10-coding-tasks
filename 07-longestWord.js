const longestWord = (sen) => {
  //   const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g)
  const wordArray = sen.split(' ')
  const sorted = wordArray.sort((a, b) => {
    return b.length - a.length
  })

  return console.log(sorted[0])
}

longestWord("I'm trying to find longest word in this sentence") // sentence
