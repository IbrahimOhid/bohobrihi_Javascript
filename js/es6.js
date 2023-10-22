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

/* Arrow Function*/

// function display(){
//     console.log('Hi');
// }
// display();

// const nums = () => console.log(1,2,3);
// nums();

// const para = () => 'Hello';
// console.log(para());

// const add =  (num1, num2) => num1 + num2;
// console.log(add(10, 30));

//  const numbers = (num1, num2, num3) => num1 + num3 * num2;
//  console.log(numbers(10, 20, 4));

// const students = [
//     {
//         id : 101,
//         name : 'ibrahim',
//         gpa : 3.00
//     },
//     {
//         id : 102,
//         name : 'ohid',
//         gpa : 2.00
//     },
//     {
//         id : 103,
//         name : 'ebnol',
//         gpa : 4.21
//     },
//     {
//         id : 104,
//         name : 'mohammad',
//         gpa : 2.50
//     },
//     {
//         id : 105,
//         name : 'rifa',
//         gpa : 4.50
//     }
// ]

// const studentNames = () =>  students.filter((x) => x.gpa > 3).map((y) => y.id);

// console.log(studentNames());

// const allStudents = [
//     {
//         id : 1,
//         name : 'Mohammad',
//         gpa : 3.10
//     },
//     {
//         id : 2,
//         name : 'ohid',
//         gpa : 3.50
//     },
//     {
//         id : 3,
//         name : 'ibrahim',
//         gpa : 2.90
//     },
//     {
//         id : 4,
//         name : 'rahim',
//         gpa : 2.99
//     },
//     {
//         id : 5,
//         name : 'rafiya',
//         gpa : 4.50
//     }

// ]

// const studentInfo = () => allStudents.filter((x) => x.gpa > 3).map((y) => y.name);

// console.log(studentInfo());

// let nums = () => 10;
// console.log(nums());

// const number = (a, b) => a * b;
// console.log(number(10, 5));

// const numbers = (x, y) => {
//     return x / y;
// }
// console.log(numbers(50, 5));

// const javascript = {
//     name: 'javascript',
//     libraries : ['react', 'angular'],
//     printLibraries : function() {
//         this.libraries.forEach((a) => console.log(`${this.name} love ${a}`))
//     }
// }
// javascript.printLibraries();

// const display = () => console.log('Hello Bangladesh');
// display();

// const message = () => 'I love you RIfa';
// console.log(message());

// const num = (a,b) => (5 + 6);
// console.log(num());

// array destructuring *//

// const numbers = [10, 20, 30, 40, 50];
// const [num1, num2, ...x] = numbers;
// console.log(num1);
// console.log(x);

//swap variable*//

// var a = 33, b = 53;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//object destructuring *//

// const studentInfo = {
//     id : 102,
//     fullName : 'Ibrahim',
//     gpa : 5.00
// }
// const {id, gpa} = studentInfo;
// console.log(id);
// console.log(gpa);

//Nested object destructuring *//

// const studentInfo = {
//     id : 102,
//     fullName : 'Ibrahim',
//     gpa : 5.00,
//     languase : {
//         native : 'english',
//         begining : 'bangla'
//     }
// }

// const {fullName, languase} = studentInfo;
// console.log(fullName);
// console.log(languase.begining);

//destructuring function parameter*//

// const studentInfo = ({id, fullName}) => {
//     console.log(`${id}, ${fullName}`);
// }

// const student = {
//     id : 303,
//     fullName : 'Ibrahim'
// }

// studentInfo(student);


// let numbers = [3, 7, 13, 16, 50];

// let findNumbers = (value) => {
//     if(value % 2 === 0)
//     return value;
// } 

// let finalNumber = numbers.find(findNumbers);
// console.log(finalNumber);

// const numbers = [133, 122, 11, 14, 150, 44, 22, 33,];

// const findNumber = (value) => {
//     if(value % 3 === 0)
//     return value;
// }

// const finalOutput1 = numbers.find(findNumber);
// const finalOutput2 = numbers.findIndex(findNumber);

// console.log(finalOutput1);
// console.log(finalOutput2);

// const studentInfo = [
//     {
//         id : 101,
//         gpa : 3.33
//     },
//     {
//         id : 102,
//         gpa : 2.55
//     },
//     {
//         id : 103,
//         gpa : 4.11
//     },
//     {
//         id : 104,
//         gpa : 4.50
//     }
// ]

// console.log(studentInfo.find(x => x.gpa>4));

//string methods *//

//const message = 'Today is saturday';
//console.log(message.startsWith('Today'));
//console.log(message.endsWith('saturday'));
//console.log(message.includes('is'));

// import {text, setText} from '/js/myModule.js';
// console.log(text);

// setText('Good Bye Bangladesh');
// console.log(text);

// class studentInfo {
//     constructor(id, name){
//         this.id = id,
//         this.name = name;
//     }
// }

// const student1 = new studentInfo(101, 'Ibrahim');
// console.log(student1);

// const student2 = new studentInfo(102, 'Ohid');
// console.log(student2);
// console.log(student2.id);
// console.log(student2.name);

// const taskOne = (callback) => {
//     console.log('Task1');
//     callback();
// }

// const taskTwo = (callback) => {
//     setTimeout(() => {
//         console.log('Data Loading');
//         callback()
//     }, 2000);
// }

// const taskThree = (callback) => {
//     console.log('Task3');
//     callback();
// }

// const taskFour = (callback) => {
//     console.log('Task4');
//     callback();
// }

// const taskFive = (callback) => {
//     console.log('Task5');
//     callback();
// }

// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour(() => {
//                 taskFive(() => {

//                 });
//             });
//         });
//     });
// });

console.log('Hi');
document.querySelector('button').addEventListener('click', () =>  {
    console.log('Button Clicked');
})
console.log('Bye');
