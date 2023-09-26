// Arrays

const arr = [1,2,3,4]
const names = ['react js', 'javascript']

// Array Method

arr.push(5)
arr.pop()
arr.unshift(6)
arr.shift()
console.log(arr);
console.log(arr.includes(5));
console.log(arr.indexOf(9));

const newarr = arr.join()
console.log(newarr)


// slice vs splice
const newArr = [0,1,2,3,4,5]
console.log('origianl Arr', newArr)

const sliceArr = newArr.slice(1,3)
console.log('original Arr', newArr)
console.log(sliceArr);

const spliceArr = newArr.splice(1,3)
console.log('original Arr', newArr)
console.log(spliceArr);

// concat function same as spread operator
const firstName = ['Ahmed', 'Bilal']
const lastName = ['Ashfaq', 'Siddique']
const res = [...firstName, ...lastName]
console.log(res)


// work with nested arrays
const nestedArray = [1,2,[3,4],5,[6,[7],[8]],9]
console.log(nestedArray.flat(Infinity))

//isArray
console.log(Array.isArray(nestedArray))

// Array formation
console.log(Array.from('ahmed'))