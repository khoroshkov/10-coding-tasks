const seekAndDestroy = (array, ...args) => {
  const result = array.filter((val) => !args.includes(val))

  return console.log(result)
}

seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) // [3,4,'hello']
