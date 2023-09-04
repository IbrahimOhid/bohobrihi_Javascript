// javascript output start

// window.alert();
// document.write();
// innerHTML
// console.log();

/* <h1 id="ban">i stay cox's Bazar.</h1>

<h1 id="H1"></h1>
<h3 id="H3"></h3> */

// window.alert("I am ibrahim");
// alert("I am learning javascript");

// document.write("Hello Bangladesh!");

// document.getElementById("ban").innerHTML = "I Love Bangladesh. ";

// document.getElementById("H1").innerHTML = "I am H1";
// document.getElementById("H3").innerHTML = "I am H3";

//console.log("I love javascript");

//javascript output end 

//User input start
// var nam = prompt("Enter a Name: ");
// document.write(nam);
//User input end

//variable start
// var a = 10;
// let b = "ibrahim";
// document.write(a);
// document.write(b);

// const a = 10;
// console.log(a);
//variable end

//Arithmetic Operators start
// var a = 5;
// var b = 7;
// a++;
// b++;
// console.log(a);
// console.log(b);
//Arithmetic Operators end

// var tem = prompt("Enter a celcius: ");
// var result = parseInt(9/5 * tem + 32);
// alert(result);

//string  start
// x = "Hello \' world";
// console.log(x);

//x = "hello \t world"
//console.log(x);

// x = "hello \nbangladesh";
// console.log(x);

// var x = "hello world";
// console.log(x.length);

// var x = "ibrahim";
// console.log(x[3]);

// var x = "ibrahim";
// var y = x.toUpperCase();
// console.log(y);

// var x = "OHID";
// var y = x.toLowerCase();
// console.log(y);

// var x = "   Mohammad";
// console.log(x);
// console.log(x.trim());

// var x = "Bangladesh";
// var y = x.slice(2, 5);
// console.log(y);

// var x = "Ibrahim";
// var y = x.substr(3);
// console.log(x);

// var x = "bangladesh";
// var y = x.replace("ba", "Ma");
// console.log(y);

// var x = "Mohammad ";
// var y = x.concat("123 ", "Ibrahim ", "ohid");
// console.log(y);

//string  end

//boolean start
// var x = "Ibrahim";
// console.log(Boolean(x));

// var y ;
// console.log(Boolean(y));

// Boolean = undefined null  NaN;
//boolean end

// Array start
// var countries = ["Bangladesh", "America", "Pakistan"];
// countries.push("Oganda");
// console.log(countries);
// "Bangladesh", "America", "Pakistan", "oganda"

// var countries = ["Africa", "USA", "Pakistan"];
// countries.pop();
// console.log(countries);
//Africa", "USA"

// var countries = ["Africa", "USA", "Pakistan"];
// countries.unshift("HOlolo");
// console.log(countries);
// "HOlolo", "Africa", "USA", "Pakistan"

// var countries = ["Africa", "USA", "Pakistan"];
// countries.shift();
// console.log(countries);
//'USA', 'Pakistan' 

// var numbers = [];
// numbers.push(123, "ohid");
// console.log(numbers);
// 123, 'ohid'

// var x = "bangladesh";
// var y = x.split("");
// console.log(y);
// ['b', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h']

// var x = "Mohammad";
// var y = x.split();
// console.log(y);
// [ 'Mohammad' ]

// var a = "Hello World";
// var b = a.split("");
// console.log(b);
// [ 'H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd' ]

// var a = "bangladesh is a country";
// var b = a.split(" ");
// console.log(b);
// [ 'bangladesh', 'is', 'a', 'country' ]

// var a = "bangladesh is a country";
// var b = a.split("n");
// console.log(b);
// [ 'ba', 'gladesh is a cou', 'try' ]

// var a = "bangladesh, usa, china";
// var b = a.split(",");
// console.log(b);
// [ 'bangladesh', ' usa', ' china' ]

// var x = ["Bangladesh", "america", "pakistan"];
// var y = x.toString();
// console.log(y);
// Bangladesh,america,pakistan

// var x = ["Bangladesh", "america", "pakistan"];
// var y = x.join(" ");
// console.log(y);

// var x = ["Bangladesh", "america", "pakistan"];
// var y = x.join("/");
// console.log(y);

// var x = ["bangladesh", "USA"];
// var y = "I love bangladesh";
// var xy = x.concat(y);
// console.log(xy);
// [ 'bangladesh', 'USA', 'I love bangladesh' ]

// var x = ["Usa", "Oganda", "Africa"];
// var y = ["Hololo", "pakistan"];
// var xy = x.concat(y);
// console.log(xy);
// [ 'Usa', 'Oganda', 'Africa', 'Hololo', 'pakistan' ]

// var countries = ["Bangladesh", "Usa", "Oganda", "Africa"];
// var allCountries = countries.sort();
// console.log(allCountries);

// var countries = ["Bangladesh", "Usa", "Oganda", "Africa"];
// var allCountries = countries.reverse();
// console.log(allCountries);

// Array end

//object start
// var student = {name:"Ibrahim", age: 25, homeTown:"Islamabad"};
// var result = student.homeTown;
// console.log(result);
//Islamabad

// var student = {name:"Ibrahim", age: 25, homeTown:"Islamabad"};
// var result = student["name"];
// console.log(result);
// ibrahim

// var student = {name:"Ibrahim", age: 25, homeTown:"Islamabad"};
// var result = student["occ"] = "student";
// console.log(student);
// { name: 'Ibrahim', age: 25, homeTown: 'Islamabad', occ: 'student' }

// var student = {name:"Ibrahim", age: 25, homeTown:"Islamabad"};
// var result = student.village= "pahashiakhali";
// console.log(student);
// {
//     name: 'Ibrahim',
//     age: 25,
//     homeTown: 'Islamabad',
//     village: 'pahashiakhali'
//   }
//object end

// Template literals (ES6) start
// let a = `first name 
// second name`;
// console.log(a);
// first name 
// second name

// let age = 20;
// console.log(`His age is ${age}`);
// His age is 20

// let name = "Ibrahim";
// let age = "27";
// let dob = "5 May, 1997";
// console.log(`His name is ${name}
// His age is ${age}
// His Date of Birth is ${dob}`);
// His name is Ibrahim
// His age is 27
// His Date of Birth is 5 May, 1997

// Template literals (ES6) end

//if statement start
// var num1 = parseInt(prompt("Enter first Number:"));
// var num2 = parseInt(prompt("Enter second Number:"));
// var num3 = parseInt(prompt("Enter third Number:"));

// if(num1 >= num2 && num1 >= num3){
//     console.log(num1 + "Largest Number")
// }
// else if(num2 >= num1 && num2 >= num3){
//     console.log(num2 + "Second Largent Number")
// }
// else{
//     console.log(num3 + "Small Number")
// }
// var result = parseInt(prompt("Enter a Number"));
// if(result <= 100 && result >= 80){
//     console.log("A+");
// }
// else if(result <= 79 && result >=70){
//     console.log("A");
// }
// else if(result <= 69 && result >= 60){
//     console.log("A-")
// }
// else if(result <= 59 && result >= 50){
//     console.log("B+")
// }
// else if(result <= 49 && result >= 40){
//     console.log("B")
// }
// else if(result <= 39 && result >= 33){
//     console.log("C")
// }
// else{
//     console.log("F")
// }
//if statement end

//switch statement start 
// var letter = prompt("Enter input (a - c) Letter: ");

// switch(letter){
//     case "a":
//         console.log("Option a selected");
//         break;
//         case "b":
//             console.log("Option b Selected");
//             break;
//             case "c":
//                 console.log("Option C Selected");
//                 break;
//                 default:
//                     console.log("No option selected");
// }

//switch statement end

//while loop

// var i = 1;
// var sum = 0;

// while(i <= 10){
//     sum = sum + i;
//     i++;
// }

// console.log(sum);

//for loop

// for(i = 1; i <= 5; i++){
//     console.log(i);
// }

// for (i = 5; i >= 1; i--){
//     console.log(i);
// }

//break statement

// for (i = 1; i <= 5; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(i);

// }

// for(i = 1; i <= 10; i++){
//     if(i % 2 == 1){
//         continue;
//     }
//     console.log(i);
// }

// let name = "Mohammad";
// for(i = 0; i <= 7; i++){
//     console.log(`index of: ${i}`)
//     console.log(name[i]);
// }

// let name = "Mohammad Ibrahim";
// let len = name.length;
// for (i = 0; i < len; i++){
//     console.log(`index: ${i}`);
//     console.log(name[i]);
// }


// let name = "Mohammad Ibrahim Ohid";

// for(var x in name){
//     console.log(`index ${x} and item ${name[x]}`);
// }

// let name = "Ibrahim";
// for(var x of name){
//     console.log(x);
// }
// let food = ["apple", "cake", "orange"];

// for (var x in food){
//     console.log(x);
// }

// let food = ["apple", "cake", "orange"];

// for (var x in food){
//     console.log(`index: ${x}; and item: ${food[x]}`);
// }

// var num = parseInt(prompt("Enter a Number: "));

// for(i = 1; i<= num; i++){
//     console.log(i*i);
// }

//function start

// function saySomething(){
//     console.log("Mohammad");
//     console.log("Ibrahim");
//     console.log("ohid");
// }
// saySomething();
// console.log("======");
// saySomething();

// saySomething();
// console.log("Ohid");

// function saySomething(){
//     console.log("Mohammad Ibrahim");
// }

// function saySomething(){
//     alert("Hello Bangladesh");
// }
// saySomething();

// function saySomething(para1){
//     console.log(`Hello ${para1} ?`);
// }
//     saySomething("Ibrahim");

// function saySomething(para1){
//     console.log(`Hello ${para1}`);
// }
//     let name = "Ibrahim";
//     saySomething(name);

// function myName(fname, lname){
//     console.log(`Hello ${fname} ${lname} Bodda!`)
// }
// let fname = "Mohammad";
// let lname = "Ibrahim";
// myName(fname, lname);

// function studentNum(a, b){
//     console.log(`${a} + ${b} = ${a +  b}`)
//     return(a-b);
// }
// let num = studentNum(4, 3);
// console.log(num);

// let fullName = function(){
//     console.log("Mohammad Ibrahim");
// }
// fullName();

// let myName = function(name){
//     console.log(`Hello ${name}`);
// }
// myName("Ibrahim");

// let myCode = (code1, code2) => {
//     console.log(`I love   ${code1} and ${code2}`)
// }
// myCode("Javascript", "ES6")

//array forEach start ⤵
// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array

// let food = ["cake", "biscuit", "ice cream", "honey"];


// // food.forEach(function(item,index, array,){
// //     // console.log(item);
// //     // console.log(index);
// //     // console.log(array);
// //     console.log(`index: ${index}, item: ${item}, arry: ${array}`);
// // })

// let allPrint = function(item, index, array){
//     console.log(`index: ${index}, item: ${item}, arry: ${array}`);
// }
// food.forEach(allPrint);

//array mapping start ⤵
let food = ["cake", "biscuit", "ice cream", "honey"];
let num = [1, 33, 32, 11];

// function addAll(item){
//     return `${item} is a food`
// }
// let add_food = food.map(addAll);
// console.log(add_food);

// function allNum(addNum){
//     return `${addNum}*${addNum}`;
// }
// let squareNum = num.map(allNum);
// console.log(squareNum);

//object Method ⤵

// let person = {name: "Ibrahim", lastName: "ohid", age: 25,
//                 fullName: function(){
//                     return `${this.name} ${this.lastName}`;
//                 }
//             };
// console.log(person.fullName());

//math object ⤵

// let val;
// val = Math.PI;
// val = Math.E;
// val = Math.round(3.5);
// val = Math.ceil(1.2);
// val = Math.floor(3.9);
// val = Math.sqrt(49);
// val = Math.abs(-8);
// val = Math.pow(3, 5);
// val = Math.min(2, 3, 5, 9);
// val = Math.max(3, 8, 1, 11, 0,);
// val = Math.random();
// val = Math.random() * 10;
// val = Math.floor(Math.random() * 88); 


// console.log(val);

//Date Object

// let val;
// today = new Date();
// let birthday = new Date(`08-07-1997 12:07:33`);
// val = today;
// val = today.toString();
// val = birthday.toString();
// val = today.getMonth();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();
// // console.log(val);

//Global Scope

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(`Global Scope: `, a, b, c);

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6
//     console.log(`Function Scope: `, a, b, c);
// }
// test();

// console.log(`Global Scope: `, a, b, c);


// if(true){
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`if Scope: `, a, b, c);
// }

// console.log(`Global Scope: `, a, b, c);

// for (let a = 1; a < 10; a++){
//     console.log(`for scope: `, a);
// }
// console.log(`Global Scope: `, a, b, c);

//javascript classes (ES6)

// class person {
//     constructor (fname, lname, birthday){
//         this.firstName = fname,
//         this.lastName = lname,
//         this.dob = birthday
//     }
// }

// let person1 = new person("Mohammad", "Ibrahim", "07-05-1997");
// let person2 = new person("Ebna", "Osman", "02-02-2001");
// let person3 = new person("rafiya", "kawser", "02-02-2001");


// console.log(person1);
// console.log(person2);
// console.log(person3);


// function allNum(num1, num2){
//     var result = num1 * num2;
//     document.write( `${num1} * ${num2}`+ "= " + result + "<br>");
// }
// allNum(5,6);
// allNum(10, 3);

// //add function
// function addition(a,b){
//     var result = a + b;
//     document.write(`${a} + ${b} `+ "= " + result + "<br>")
// }

// // sub function
// function subtraction(a,b){
//     var result = a - b;
//     document.write(`${a} - ${b} ` + "= " + result + "<br>");
// }

// function into(a,b){
//     var result = a * b;
//     document.write(`${a} * ${b} ` + "= " + result + "<br>");
// }

// function vag(a,b){
//     var result = a / b;
//     document.write(`${a} / ${b} ` + "= " + result + "<br>")
// }


// addition(3,2);
// subtraction(10,2);
// into(8, 22);
// vag(120, 60);

// function display(){
//     document.write("Hello");
// }
// display();

// (function display(hello){
//     document.write(hello)
// })("Bangladesh");

// (function add(num1, num2){
//     sum = num1 + num2;
//     document.write(`${num1} + ${num2} ` + "= " + sum + "<br>");
// })(10, 20);



// var sub = function subtraction(num1 , num2){
//     result = num1 - num2;
//     document.write(result);
// }
// sub(30,3)

//array

// var names = ["MOhammd", "Ibrahim", "Ohid", "Ebna", "Osman"];
// names.push("Jisan");
// names.pop();
// names.unshift("Bhai");
// names.shift();
// document.write(names);

// var country1 = ["Bangladesh", "Pakistan", "Oman"];
// var country2 = ["America", "Afganistan", "Nepal"];

// var allCountries = country1.concat(country2);
// document.write(allCountries);

// var number = [1, 33, 33, 44, 55, 88];

// for(var i = 0; i < 6; i++){
//     document.write(number[i]);
// }

// var number = [10, 20, 30, 40];
// var sum = 0;

// for (var i = 0; i < 4; i++){
//     sum = sum + number[i];
    
// }
// document.write(sum);

var number10 = new Array();

for (var i = 0; i < 5; i++){
    number10[i] = parseInt(prompt("Enter a Number"));
}

var sum = 0;
for (var i = 0; i < 5; i++){
    sum = sum + number10[i];
}
document.write("Sum = " + sum);