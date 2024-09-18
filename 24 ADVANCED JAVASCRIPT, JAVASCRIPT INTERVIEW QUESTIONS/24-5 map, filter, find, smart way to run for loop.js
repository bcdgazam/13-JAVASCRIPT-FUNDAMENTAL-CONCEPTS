//24-5 map, filter, find, smart way to run for loop

//Square it
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

/*
//Bangla System
output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const square = element * element;
    output.push(square);
}
console.log(output);
*/



//Smart System Es-6: map (will give array)
// ====================================
/*numbers.map(function(element, index, array){ //We can take element, index, array.
    console.log(element, index, array);
});*/

const result = numbers.map(function(element){
    return element * element;
});
console.log(result);

//We can write it by arrow function (Boom it's a magic)
const square3 = numbers.map(x => x * x);
console.log(square3);




//Filter (will give array)

const bigNumber = numbers.filter( x => x > 5);
console.log(bigNumber);

//Find (will give only one element)
const findNumber = numbers.find(x => x > 5);
console.log(findNumber);

//foreach/reduc have to learn