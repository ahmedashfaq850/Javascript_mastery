const number = 100;

// explicitly define number type
const age = new Number(24);

// convert number to toString
console.log(age.toString())

// toFixed(number)

console.log(age.toFixed(2))

// toPrecision
const floatNumber = 23.4565
//console.log(floatNumbertoPrecision(3))

// toLocaleString for number formatting
const thousands = 100000
console.log(thousands.toLocaleString())


// ##############  Maths ##############
console.log(Math)

// abs 
console.log(Math.abs(-50))

// round
console.log(Math.round(4.86))

// Ceil -> Top
console.log(Math.ceil(4.1))

// floor -> Lowest
console.log(Math.floor(4.1))

// random 
console.log(Math.round(((Math.random() * 10) + 1)))

// with in specified range 
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min +1)) + min)