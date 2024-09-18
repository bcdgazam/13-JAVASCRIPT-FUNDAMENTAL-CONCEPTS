//24-4 double vs triple equal, implicit conversion

//== will check value; === will check value & type;
const first = 2;
const second = '2';

if(first === second){ //== will show true and === will show false
    console.log('Condition is "TRUE"');
}
else{
    console.log('Condition is "FALSE"');
}

//Special: true = 1; & false = 0; Js compares true equal 1; false equal 0;
const third = 1;
const fourth = true;

if(third == fourth){
    console.log('Condition is "TRUE"');
}
else{
    console.log('Condition is "FALSE"');
}