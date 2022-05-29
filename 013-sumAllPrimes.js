function sumAllPrimes(num) {
  let total = 0

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false
      }
    }
    return true
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i
    }
  }

  return console.log(total)
}

sumAllPrimes(100) //1060
