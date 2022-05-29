function addAll(...numbers) {
  const result = numbers.reduce((sum, number) => {
    return (sum += number)
  }, 0)

  return console.log(result)
}

addAll(3, 5, 2, 2, 7, 1) // 20
addAll(5, 3, 6, 4, 2, 1) // 21
