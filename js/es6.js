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

// let p1 = {
//     Name: 'ibrahim',
//     age: 26
// }
// let p2 = {
//     nationality: 'Bangladesh',
//     Union: 'Islamabad'
// }

// let p = {...p1, ...p2};
// console.log(p);

// function student1(name, age){
//     return{
//         name,
//         age
//     }
// }
// console.log(student1('Ibrahim', 25));

// let message = {
//     body (){
//         return 'Hello Bangladesh';
//     }
// }
// console.log(message.body());

//for ... of, for ... in

// const names = ['s1', 's2', 's3'];
// for(name of names){
//     console.log(name);
// }

// let students = {
//     name : 'Ibrahim',
//     id : 27,
//     cgpa : 3.05
// }
// for(x in students){
//     console.log(`${x} : ${students[x]}`);
// }

//for , for each

// var num = [10, 33, 43, 55, 32];
// for(var x = 0; x < num.length; x++ ){
//     console.log(num[x]);
// }

// var numbers = [20, 11, 33, 40, 44, 60];
// numbers.forEach(function(x){
//     console.log(x);
// })

// var num = [10, 20, 30];
// var sqareNum = [];
// num.forEach(function(x){
//     sqareNum.push(x*x);
// })
// console.log(sqareNum);

// var numbers = [10, 20, 30];
// var newNumber = [];
// numbers.forEach(function(x){
//     newNumber.push(x*x);
// })
// console.log(newNumber);

// var numbers = [10, 20, 22, 44];
// console.log(numbers);
// numbers.forEach(function(x, index, arr){
//     arr[index] = x+5;
// })
// console.log(numbers);

// var numbers = [2,3,4,5];
// var sqareNum = [];
// numbers.forEach(function(x){
//     sqareNum.push(x*x);
// })
// console.log(sqareNum);

// var numbers = [2,4,5,6];
// var sqareNum = numbers.map(function(x){
//     return x*x;
// })
// console.log(sqareNum);

// const students = [
//     {
//         name : 'ibrahim',
//         id : 27,
//         cgpa : 3.33
//     },
//     {
//         name : 'mohammad',
//         id : 22,
//         cgpa : 3.223
//     },
//     {
//         name : 'ohid',
//         id : 11,
//         cgpa : 3.10
//     }
    
// ]

// const allStudents = students.map(students => students.cgpa);
// console.log(allStudents);


// const num = [22, 1, 3, 55, 7, 88];
// const numbers = num.filter(function(x){
//     return x < 10;
// })
// console.log(numbers);