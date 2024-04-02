//13-4 array add and remove element from the beginning and slice

var ticketLine = ['Rafiq', 'Jabbar', 'Salam', 'Barkat', 'Abir']
console.log(ticketLine);

//shift: put out elements from array"Start"
ticketLine.shift();
console.log(ticketLine);

//unshift: put out elements from array"Start"
ticketLine.unshift('Hablu');
console.log(ticketLine);

//slice: Take specific area from an array
sliceLine = ticketLine.slice(2, 4) //begining index and end index number
console.log(sliceLine);