//13-9 Function Parameter, multiple parameter, function return

//Make a value double
// function doubleIt(num){
//     var result = num*2;
//     console.log(result);
// }

// doubleIt(5);
// doubleIt(50);
// doubleIt(100);


//make a value double and return to a variable
// function doubleIt(num){
//     var result = num*2;
//     return result;
// }

// var first = doubleIt(5);
// var second = doubleIt(50);
// var total = first + second;
// console.log(total)


//add
function add(num1, num2){
    var result = num1 + num2;
    return result;
}

var sum = add(10, 20);
console.log(sum);