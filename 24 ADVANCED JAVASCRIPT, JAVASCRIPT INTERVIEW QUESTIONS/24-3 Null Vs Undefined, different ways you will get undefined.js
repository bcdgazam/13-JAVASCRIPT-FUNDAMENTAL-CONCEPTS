//24-3 Null Vs Undefined, different ways you will get undefined

let name; //No value is given here
console.log(name);

function add(number1, number2){
    console.log(number1 + number2);
    //return is nog given here so, it's undefined.
    return //return is written but what will return that is not written it's undefined.
}
const result = add(12, 13);
console.log(result);

//If you do not pass a parameter it will show undefined in this case we will set default value
function addNumber(number3, number4){
    console.log(number4); //Not getting 2nd parameter value from function call.
}
const result2 = addNumber(12);
console.log(result2);


const person = {name: 'programmer', phone: 232323}
console.log(person.age); //age property is not containing the person object. It will show undefined.

let fun = undefined; //It will show undefined it's not recommanded
console.log(fun);



//null means not anything/existing. It will set by developers
