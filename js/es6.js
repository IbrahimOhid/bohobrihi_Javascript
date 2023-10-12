// let x = 10;
// for(let x=1; x<10; x++){
//     console.log(x);
// }
// console.log(x);


// let name = 'Ibrahim';
// let message = `i am ${name}. i am learning Javascript.`;
// console.log(message);


// const add = (x,y) => {
//     let sum = x + y;
//     console.log(sum);
// }
// add(20, 35);

// x = 10;
// console.log(x);
// var x;

// function name(text = 'Hello') {
//     console.log(`${text}`);
// }
// name();
// name('Hello Mohammad');

// function sum(x, y, ...z){
//     console.log(`x = ${x}, y = ${y}, z = ${z}`);
// }
// sum(10, 20, 30, 40, 50, 60);

// function addNumbers(x, y, z){
//     return x + y + z;
// }
// let num = [1,2,3];
// //console.log(addNumbers(...num));
// let num1 = [4, ...num, 5];
// console.log(num1);

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let numbers = [...num1, ...num2];
// console.log(numbers);

let p1 = {
    Name: 'ibrahim',
    age: 26
}
let p2 = {
    nationality: 'Bangladesh',
    Union: 'Islamabad'
}

let p = {...p1, ...p2};
console.log(p);