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

function greeet(name, lastname) {
    console.log('hello ' + name + ' ' + lastname);
}


function square(number) {
    return number * number;
}
result1 = square(5);
result2 = square(6);

console.log(result2);