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
let isApproved = false; // boolean literal
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
A = A + 5;  //False method
A += 5;  //True method

//exmpl 2

A = A * 5; //False method
A *= 5; //True method

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

// Logical operators: &&, ||, !
// Logical AND (&&) -> returns TRUE if both operands are TRUE
// Logical OR (||) -> returns TRUE if either of the operands are TRUE
// Logical NOT (!) -> returns TRUE if operand is FALSE
console.log(true && true);

let highincom = true;
let goodcreditscore = true;
let eligibleforloan = highincom || goodcreditscore;

console.log('Eligible: ', eligibleforloan);

//not operator (!)

let applicationrefused = !eligibleforloan;
console.log('application refused: ', applicationrefused);

// logical operators with non-booleans

// falsy (false)
// undefined
// null
// 0
// false
// ''
// not a number

// (undefined, null, 0, false, '', not a number->NaN) these all things are considered as falsy

// anything that's not falsy is truthy

// short circuiting

let usercolor = undefined;
let defaultcolor = 'blue';
let currentcolor = usercolor || defaultcolor;

console.log(currentcolor);

//bitwise operator-> &, |, !

//     1 ->   1  -> 2^0 * 1
//     2 ->  10  -> 2^1 * 1 + 2^0 * 0
//     3 ->  11  -> 2^1 * 1 + 2^0 * 1
//     4 -> 100  -> 2^2 * 1 + 2^1 * 0 + 2^0 * 1

// 1 & 1 = 1 , 1 & 0 = 0, 0 & 1=0, 0 & 0=0
// 1 | 1 = 1 , 1 | 0 = 0, 0 | 1=0, 0 | 0=0
// !1 = 0 ,  !0 = 1

const readpermission = 4;
const writepermission = 2;
const executepermission = 1;

let mypermission = 0;
mypermission = mypermission | writepermission;

let message = (mypermission & readpermission) ? 'yes' : 'no';

console.log(message);

// operator precedence

let X = (2 + 4) * 8;

console.log(X);

//swapping variables

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a, b);

//ch-3

//if...else

//hour
//if time is between 6 and 12: good morning!
//if time is between 12 and 18: good afetrnoon!
//otherwise: goodevening

let hour = 0;

if (hour >= 6 && hour < 12) {
    console.log('goodmorning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('goodafternoon!');
}
else if (hour >= 18 && hour < 23) {
    console.log('goodnight');
}
else
    console.log('happymidnight');

//switch...case

//exmpl-1
hour = 5;

switch (hour) {
    case 6:
        console.log('five');
        break;
    default:
        console.log('default');
        break;
}

//exmpl-2

name = 'naman';

switch (name) {
    case 'naman':
        console.log('name: naman');
        break;
    default:
        console.log('I do not know');
}

//forloop
for(let index =1; index <= 5; index++) {
    if(index % 2 !== 0) console.log(index);
}

for(let index = 5; index >= 1; index--) {
    if(index % 2 !== 0) console.log(index);
}

//while loop

let index = 0;
while(index <= 5) {
    if (index % 2 !== 0) console.log(index);
    index++;
}

//do-while loops

index = 0;
do{
    if (index % 2 !== 0) console.log(index);
    index++;
} while (index <= 5);

//infinite loops

//exmpl-1

//index = 0;
//while (1 < 5) {
 //   console.log(1);
    //we forgot to i++
//}

//exmpl-2

//while(true) {
//}

//exmpl-3

//X = 0;
//do {
    //x++;
//} while (x > 5);

//for (let index = 0; index > 5;);

//for-in

const person2 = {
    name: 'naman',
    age: 9
};

for(let key in person2)
console.log(key, person2[key]);

//for off

const colors =  ['red', 'blue', 'green'];

for (let color of colors)
  console.log(color);