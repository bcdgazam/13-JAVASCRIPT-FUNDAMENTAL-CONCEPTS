//Practice file

/*
    13-2 Array, index, set by index, indexOf
    13-3 Array advanced, Push, pop, array length (splice , concat)
    13-4 array add and remove element from the beginning and slice
    13-5 While loop, debug javascript code, less or equal
    13-6 For loop loop, run a loop for each element of an array
    13-7 Javascript Switch Case Break And Default
    13-8 Function, call function
    13-9 Function Parameter, multiple parameter, function return
    13-10 Comment, multiple lines comment
    13-11 Object, key value pair, get object property, set value
*/

//special
let arr = [10, 20, 30, 40, 50, 80, 90];

// Remove the element at index 3 (which is 40 in this case)
let newArr = arr.slice(0, 3).concat(arr.slice(4));

console.log(newArr); // The updated array without the middle element