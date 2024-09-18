//24-2 Truthy and Falsy values

/*
Falsy: 0, '', undefined, null, NaN, false.
Truthy: '0', ' ', [], {}, 'false', 
*/

//How We Can Write Conditions (true/false)

//Only zero is false (negative and positive all values are true)

const age = 0;
if(age){
    console.log('Condition is true');
}
else{
    console.log('Condition is false');
}

//Empty string is false // other string is true even a single space.
const name = 'programmer';
if(name.length > 0){
    console.log('True');
}
else{
    console.log('False');
}

//undefined is a false;
let name2
console.log(name2);

//null is also a false
let name3 = null;
console.log(name3);