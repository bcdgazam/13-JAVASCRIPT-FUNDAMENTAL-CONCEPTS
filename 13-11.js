//13-11 Object, key value pair, get object property, set value

var student1 = {id:12, phone:017000, name:"Abdul"};
var student2 = {id:10, phone:232, name:"Bolod"};

console.log(student1);
console.log(student2);

//If I want to check student1 Phone
//1st way
var phoneNo = student1.phone;
console.log(phoneNo);

//2nd way
var phoneNo2 = student1['phone'];
console.log(phoneNo2);

//3rd way
var phoneProName = "phone";
var phoneNo3 = student1[phoneProName];
console.log(phoneNo3);




//Update student2 phone number

student2.phone = 420;
student2["phone"] = 423;
//3rd way
var st2PhoneUpdate = "phone"
student2[st2PhoneUpdate] = 999;
console.log(student2);


//Add a property to a object
student2.cinema = "karisma";
console.log(student2);