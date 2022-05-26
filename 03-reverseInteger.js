const reverseInteger = (int) => {
  const reversedString = int.toString().split('').reverse().join('')

  return parseInt(reversedString) * Math.sign(int)
}

console.log(reverseInteger(198))
console.log(reverseInteger(521))
console.log(reverseInteger(-12345))
