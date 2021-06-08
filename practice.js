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

// console.log(perDetails[button])

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
//less than or greater than operator

let number = 2
let number1 = 3
/* console.log(number > 1)
console.log(number > 2)
console.log(number >= 2)
console.log(number < 2)
console.log(number <= 2) */

//increment and decrement operators

// console.log(number++) //2 next value increment but it will not display
// console.log(number) // value will be displayed with incremented
//this will increment the value first then it will print
// console.log(++number)
//decrement value
// console.log(number--)
// console.log(number)
// number = number - 1

// console.log(--number)

// number = number + 2

//shorthand form
// number = number + 3
// number += 3
// console.log(number)

//this will force to check both value should be same
// console.log(true === false)

//not equaito synbol
//type + value
// console.log(true !== false)
// console.log('3' === 3)
// console.log('3' == 3)

// if (number >= number1) {
//     console.log('Heloooooo')
// } else {
//     console.log('statement is false')
// }

// if (number >= number1) {
//     console.log('Heloooooo')
// } else if(true){
//     console.log('statement is false')
// } else if(true) {

// }else if(true) {

// }

// if (number >= number1) console.log('madhav')

// const finishSomeDocumentationWork = true
// const workOnSomeCustomerIssues = true

// function weekend(documentation, customerIssue) {
//     if (finishSomeDocumentationWork !== documentation) {
//         console.log('Write the documentation you have demo on monday')
//     } else if (workOnSomeCustomerIssues !== customerIssue) {
//         console.log('!Uhh Done? Something is wrong in your code then')
//     } else {
//         console.log('clean your office table then rest')
//     }
// }
// weekend(true, false)

/* console.log('Before')

getuser(1, function (user) {
    console.log(user)
})
console.log('After')

async function getuser(id, callback) {
    setTimeout(() => {
        console.log('Reading data from database')
        callback({ id: id })
    }, 2000)
} */

//Promises
/* function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Hello')
            reject(new Error('Error message here'))
        }, 2000)
    })
}

delay()
    .then((result) => console.log(result))
    .catch((result) => console.log(result)) */

//for loop

/* let namesforteam = ['Phavya', 'Paras', 'prabhu', 'Madhav', 'Hari', 'Rajesh']

for (let i = 1; i < 20; i++) {
    for (let j = 1; j < 5; j++) {
        console.log(`value j is ${j}`)
    }
    console.log(`value i is ${i}`)
}
 */

/* const names = 'Phavya'
const hello = 'Madhav'

if (names === hello) {
    console.log('Hello')
} else if (false) {
    console.log('Hiii')
} else {
    console.log('last statement')
}

if (names === hello) console.log('Hello')
console.log('this is false statement') */

/* let weekName = 'Friday'

switch (weekName) {
    case 'Monday':
        console.log('This is monday')
        break

    case 'Tuesday':
        console.log('This is tuesday')
        break
    case 'Wednesday':
        console.log('This is Wednesday')
        break
    case 'Thursday':
        console.log('This is Thursday')
        break

    default:
        console.log('Week name not found')
        break
} */
