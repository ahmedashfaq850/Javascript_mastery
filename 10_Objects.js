// if object created with constructor than it will called singleton 


// object creation using literals
const obj = {
    name: 'Ahmed',
    age: 18,
    location: 'Pakistan'
}

// Access objects
console.log(obj.name)
console.log(obj['age']) // recommended way

// update value
obj.name = 'ahmed'

// freeze method 
//Object.freeze(obj)

obj.greeting = function (){
    return `hello ${this.name}`
}

console.log(obj.greeting) // return function 
console.log(obj.greeting()) // print function


// constructor 
const obj2 = Object.create({})

// combined objects

const objA = {1: 'a'}
const objB = {2: 'b'}

// both are same ways to combine objects
res = {...objA, ...objB}
res2 = Object.assign({}, objA, objB)

console.log(res)
console.log(res2)


console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty('phone'))


// Destructuring 
const course = {
    courseName: 'Next js 13.5',
    price: '$58',
    courseInstructor: 'JS Mastery'
}


const {courseName, price, courseInstructor} = course
console.log(courseName)
console.log(price)
console.log(courseInstructor)
