//CHAP-01

//start-Variables

let name = 'Naman';
console.log(name);

// cannot be a reserved keyword
// should be meaningful
// cannot start with number (1name)
// cannot contain space or hypen (-)
// are case-sensitive

//end-variable

//start const
const interestRate = 0.3;
//interestRate = 1;// Error: Assignment to constant variable 
console.log(interestRate); 

//end const

// start primitive types
let name1 = 'Naman'; // String literal
let age = 9 // number literal
let isApproved = false ; // boolean literal
//Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript. 
//Undefined: It means the value does not exist in the compiler.
let firstName = undefined;
let selectedColor = null;
// end primitive types

// start objects
 // Objects is a variable which has propeties like person has a name and a age. 

let person = {
    name: 'naman', age: 9
};

// dot notation

person.name = 'John';

// Bracket notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);
// end objects

// start-Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

// End-Array

// start-functions 
// Types of functions
// performing a task
function greet(name, lastname) {
    console.log('hello ' + name + ' ' + lastname);
}

greet('john', 'smith');


// calculating a value
function square(number) {
    return number * number;
}
result1 = square(5);
result2 = square(6);

console.log(result2);

// end-functions 

//CH-2

// Java script operators

// Arithmatic

let x = 10;
let y = 3;

//console.log(x+y);
//console.log(x-y);
//console.log(x*y);
//console.log(x/y);
//console.log(x%Y);
//console.log(x**y);
 
//Increment (++)
console.log(x++);
console.log(x);

//Decrement (--)

console.log(--x);
console.log(x);

//Assignment operator

let A = 10;

//exmpl 1
A = A+5;  //False method
A += 5;  //True method

//exmpl 2

A = A*5; //False method
A *=5; //True method

//comparizon operators

x = 1;

console.log(x > 0); //true
console.log(x >= 1); //true
console.log(x < 1); //false
console.log(x <= 1); //true

 //Equality

 console.log(x === 1);// true 
 console.log(x == 1);// true
 console.log(x !== 1);//false
 console.log(x != 1);//false

//strict equality (type + value)
console.log('1' === 1); //false
console.log(1 == 1);// true

//lose equality(value)
console.log(1 == 1); // true
console.log('1' == 1);// true
console.log(true == 1);//true

//ternary operator

//if a customer has more than 100 points, they are 'gold' customer, otherwise, they are 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);