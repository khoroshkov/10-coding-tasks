const sortByHeight = (array) => {
  const negativeNumberPosition = []
  const values = []

  array.forEach((val, i) => {
    if (val === -1) {
      negativeNumberPosition.push(i)
    } else {
      values.push(val)
    }
  })

  const sortedValues = values.sort((a, b) => a - b)
  negativeNumberPosition.forEach((val, i) =>
    sortedValues.splice(negativeNumberPosition[i], 0, -1)
  )

  return console.log(sortedValues)
}

sortByHeight([-1, 198, 189, 174, -1, -1, 123, 196, 156, -1, 76]) // [-1, 76, 123, 156, -1, -1, 174, 189, 196, -1, 198]
