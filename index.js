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


function greeet(name, lastname) {
    console.log('hello ' + name + ' ' + lastname);
}


function square(number) {
    return number * number;
}
result1 = square(5);
result2 = square(6);

console.log(result2);