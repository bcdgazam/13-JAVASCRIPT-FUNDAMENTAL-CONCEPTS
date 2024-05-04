let arr = [10, 20, 30, 40, 50, 60, 70, 80];
arr[3] = 800;
arr.pop();
arr.push(4000)
let newarr = arr.slice(0, 4).concat(arr.slice(5));
console.log(newarr);