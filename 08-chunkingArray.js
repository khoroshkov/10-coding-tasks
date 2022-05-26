const chunkingArray = (array, chunkLength) => {
  const chunkedArray = []
  let i = 0

  while (i < array.length) {
    chunkedArray.push(array.slice(i, i + chunkLength))
    i += chunkLength
  }

  return console.log(chunkedArray)
}

chunkingArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
