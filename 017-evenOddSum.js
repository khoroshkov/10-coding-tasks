const evenOddSum = (arr) => {
  let oddSum = 0
  let evenSum = 0

  arr.forEach((el) => {
    el % 2 === 0 ? (oddSum += el) : (evenSum += el)
  })

  return console.log([evenSum, oddSum])
}

evenOddSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [25, 30]
