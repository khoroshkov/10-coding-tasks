const isAnagramme = (str1, str2) => {
  return console.log(formatString(str1) === formatString(str2))
}

function formatString(str) {
  return str
    .replace(/[ˆ/w]g/, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

isAnagramme('below', 'elbow') // true
isAnagramme('Debit card', 'Bad credit') // true
