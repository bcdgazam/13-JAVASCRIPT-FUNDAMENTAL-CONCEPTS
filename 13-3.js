//13-3 Array advanced, Push, pop, array length

var friendsAge = [12, 14, 17, 18]

//Push
friendsAge.push(22);
friendsAge.push(25);
console.log(friendsAge);

//length: How much person has in an array .length
console.log(friendsAge.length);

//Pop: (put out elements from array"end")
friendsAge.pop()
console.log(friendsAge)

//shift: put out elements from array"Start")
friendsAge.shift()
console.log(friendsAge);

//unshift: put in elements in array"begining")
friendsAge.unshift(39)
console.log(friendsAge);


//special
let arr = [10, 20, 30, 40, 50, 80, 90];

// Remove the element at index 3 (which is 40 in this case)
let newArr = arr.slice(0, 3).concat(arr.slice(4));

console.log(newArr); // The updated array without the middle element