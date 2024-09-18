/*
    24-1 Module Overview, git integration setup
    24-2 Truthy and Falsy values
    24-3 Null Vs Undefined, different ways you will get undefined
    24-4 double vs triple equal, implicit conversion
    24-5 map, filter, find, smart way to run for loop
    24-6-2 Arguments, array like objects, log all array elements
*/


function add (num1, num2) {
    console.log(arguments);
    return num1 + num2;
}

const result = add(10, 10);
console.log(result);