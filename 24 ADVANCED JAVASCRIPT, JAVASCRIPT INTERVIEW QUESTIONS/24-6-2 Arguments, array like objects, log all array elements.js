//24-6-2 Arguments, array like objects, log all array elements

function add(num1, num2){
    console.log(arguments);
    return num1 + num2;
}

const result = add(2,3,5);
console.log(result);