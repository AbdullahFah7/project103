/* - Object Dest
let student ={
    name : 'Abdullah',
    age : 24
}

let {age: yourAge, name: yourName} = student
console.log(yourName, yourAge)
*/

/*   - extract
let student ={
    name : 'Abdullah',
    age : 24
}

let {name, age} = student
console.log(name, age)
*/

/* - problems solution 
let student ={
    name : 'Abdullah',
    age : 24
}
let name = "saleh" , age = 22;
({name, age} = student)
console.log(name, age)
*/

/* - Nested Objects Dest
let student = {
    name : {
    firstName : 'Abdullah',
    lastName : 'Fahad'
    },
    age : 24
}

let {name:{lastName: yourLastName}} = student
console.log(yourLastName)
*/

/* - String object Dest
let student = {
    name : {
    firstName : 'Abdullah',
    lastName : 'Fahad'
    },
    '@my age' : 24
}

console.log(student['@my age'])
*/

