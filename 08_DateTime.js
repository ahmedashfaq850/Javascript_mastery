// Dates

let myDate = new Date()

//type of date 
console.log(typeof myDate)

// convert date to string for proper understanding
console.log(myDate.toString())

// onvert in this method Tue Sep 26 2023
console.log(myDate.toDateString())

// convert into this format 9/26/2023
console.log(myDate.toLocaleDateString())

// timeStamps
let myTimeStamp = new Date()
console.log(Math.floor(myTimeStamp/1000))

// functions
console.log(myTimeStamp.getDay());
console.log(myTimeStamp.getMonth() + 1);
console.log(myTimeStamp.getYear());