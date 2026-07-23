let awesomeName = "shakeAndBake"
awesomeName = "something" // valid
awesomeName = awesomeName.toUpperCase() // only methods of strings
// awesomeName = 23 // error

let amount = 20
amount = 12 - 1
// amount = "word" // error

let isAwesome = false
isAwesome = true
// isAwesome = "shakeAndBake" // error

// String
let firstName = "Anastasiia"
let lastName = "Brown"

console.log(firstName.concat(lastName))
console.log(firstName.slice(3, 7))

// Number
let num1 = 3
let num2 = 5
console.log(Math.max(num1, num2))

// Boolean
let isAdult = true
// console.log(isAdult == "true") // cannot compare values of different types
console.log(isAdult == true) 
