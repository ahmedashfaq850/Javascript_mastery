const firstName = 'ahmed';
const lastName = 'ashfaq'

res = `${firstName} ${lastName}`

// length
console.log(res.length)

// toUpperCase
console.log(res.toUpperCase())

// chartAt return the element that available on 0 index
console.log(res.charAt(0))

// indexOf
console.log(res.indexOf('a'))

// substring is not work with negative, on the other hand slice is worked with negative value

// trim -> remove starting and end spaces
console.log(res.trim())

// replace 
console.log(res.replace('a', 'A'))

//include
console.log(res.includes('ahmed'))

// split 
console.log(res.split(' '))

