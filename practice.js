//Comment the multiple lines use /* */

/*
console.log(`Hii phavya 
how are you
hey
`)

console.log('Hii phavya how are you hey')
*/

// variables to store the values
// var, let, const

// let variable

/* let firstNameAndSurName = 'Hii this is madhav'

console.log(firstNameAndSurName)

firstNameAndSurName = 123

console.log(firstNameAndSurName) */

//const can be assign only once. you can't reassign it
/* const person = 123123

console.log(person) */

// console staement with var keyword

// var person = 'hello'

// person = 1235

// console.log('this is the value', person)
// console.log(`This is the value ${person}`)

//primitive values
// let result
// let result = 'this is the text message' //string literal
// result = 123 //number literal
// result = 12.5 //number literal
// result = true //boolean
// result = undefined // undefined
// result = null //object

// let value = null

// console.log(value)

//function
/* function addition(number1, number2) {
    console.log(number1 + number2)
}
function subtract(number1, number2) {
    console.log(number1 - number2)
}
function multiply(number1, number2) {
    console.log(number1 * number2)
}

addition(1, 5)
subtract(5, 4)
multiply(6, 6)
multiply(7, 6) */

//array

// const persons = [
//     'Madhav',
//     'phavya',
//     'paras',
//     1234,
//     true,
//     false,
//     undefined,
//     null,
// ]
// console.log(persons)
//use square bracket to find a specific value from array
//Ex: person[1]

//objects

const perDetails = {
    firstName: 'Madhav',
    lastName: 'Maddy',
    age: 25,
    city: 'Yanam',
    state: 'Puducherry',
    country: 'India',
}

const button = 'firstName'

console.log(perDetails[button])

//dot operator is to fetch the value from an objects
//square bracket is used to fetch the after user enter (this is dynamic value will change according to the user need)
//to call a object use objectName with dot operator to get the value

//|| (or statement)

const value11 = 0 || '' || 5
undefined
value11
5
const value12 = 0 || 10 || 5
undefined
value12
10
const value13 = 0 || 0 || 0
undefined
value13

// and operator denotes as &&
