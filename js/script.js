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

// var number10 = new Array();

// for (var i = 0; i < 5; i++){
//     number10[i] = parseInt(prompt("Enter a Number"));
// }

// var sum = 0;
// for (var i = 0; i < 5; i++){
//     sum = sum + number10[i];
// }
// document.write("Sum = " + sum);

// var addition = new Array();
// for(var i = 0; i < 5; i++){
//     addition[i] = parseInt(prompt("Enter a Number"));
// }

// var sum = 0;

// for (var i = 0; i < 5; i++){
//     sum = sum + addition[i];

// }
// document.write("Sum = " + sum);

// var names = ["Mohammad", "Ibrahim", "Ohid", "Rafiya", "Kawser"];
// for (var i = 0; i < 5; + i++){
//     console.log(names[i]);
// }
//1D Array
// function hightScore(score) {
//     var max = number[0];
//     for (var i = 1; i < number.length; i++){
//         if(max < number[i]){
//             max = number[i];
//         }
//     }
//     return max;
// }
// var number = [120, 22, 33, 40, 99, 1];
// var maxNumber = hightScore(number);
// console.log(maxNumber);

// class (ES6)

// class Person {
//     constructor(fname, lname, birthday){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.bod = birthday;
//     }
// }

// let person1 = new Person("Mohammad", "Ibrahim", "07-05-1997");
// let person2 = new Person("Rahim", "Ullah", "04-05-1999");
// let person3 = new Person("Rafiya", "Akter", "06-07-2002");

// console.log(person1);
// console.log(person2);
// console.log(person3);

// function Person (fname, lname, age, eye){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = age;
//     this.eyeColor = eye;
// }
// let person1 = new Person ("Mohammad", "Ibrahim", "77", "Blue");
// console.log(person1);

// function Person(fname, lname,age, eye){
//     this.firstName = fname;
//     this.lastName  = lname;
//     this.age = age;
//     this.eyeColor = eye;

//     this.fullName = function (){
//         return this.firstName + " " + this.lastName;
//     }
// }

// let person1 = new Person("Mohammad", "Ibrahim", "25", "Black");
// console.log(person1.fullName());

// class Person {
//     constructor(fname, lname) {
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     fullName() {
//        return `${this.firstName} ${this.lastName}`;
//     }
// }
// class Customer extends Person{
//     constructor(fname,lname,phone,membership){
//         super(fname,lname);
//         this.phone = phone;
//         this.membership = membership;
//     }
// }

// let person1 = new Person("Mohammad", "Ibrahim");
// let customer = new Customer("Ebna", "Osman", "083333", "2332");

// console.log(person1);
// console.log(person1.fullName());
// console.log(customer);
// console.log(customer.fullName());

//static function

// class Person{
//     constructor(fname, lname){
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     static text(){
//         console.log("I am Mohammad Ibrahim Ohid");
//     }
// }

// let person1 = new Person("Mohammad", "Ibrahim");
// console.log(person1);
// console.log(Person.text());

// object
// var student = {
//     fname: "Mohammad",
//     lname: "Ibrahim",
//     age: "26",
//     lang: ["Bangla", "English", "Urdu"]
// }
// console.log(student.lname);

// function Student(name, age, cgpa, lang){
//     this.fullName = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.language = lang;
// }

// let student1 = new Student("MOhammad", "26", "3.05", ["Bangali", "English", "Urdu"]);
// console.log(student1.language);

// function Student(fname, lname, cgpa, lang){
//     this.fname = fname;
//     this.lname = lname;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     this.display = function() {
//         console.log(this.fname);
//         console.log(this.lname);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }

// let student1 = new Student("Mohammad", "Ibrahim", "3.22", ["Bangla", "English", "Urdu"]);
// let student2 = new Student("Ebna", "Osman", "3.22", ["Bangla", "English", "Urdu"]);

// student1.display();
// student2.display();


// var num1 = parseInt(prompt("Enter a Number 1"));
// var num2 = parseInt(prompt("Enter a Number 2"));
// var num3 = parseInt(prompt("Enter a Number 3"));

// var maximum = Math.max(num1, num2, num3);
// var minimum = Math.min(num1, num2, num3);

// document.write("Maximum Number = " + maximum + "<br>");
// document.write("Maximum Number = " + minimum);

// Math.floor(Math.random() * 6) + 2;

// Guessing Game

// var guessNumber = parseInt(prompt("Enter a number from 1 to 5"));

// var randomNumber = Math.floor(Math.random() * 5) + 1;

// if(guessNumber == randomNumber){
//     console.log("Youe Have Won")
// }else{
//     console.log("You Have localStorage. Random number was " + randomNumber);
// }
// var wonNum = 0;
// var lostNum = 0;
// for (var i = 1; i <= 5; i++) {
//     var guessNumber = parseInt(prompt("Enter a Number from 1 to 5"));
//     var randomNumber = Math.floor(Math.random() * 5) + 1;

//     if (guessNumber == randomNumber) {
//         console.log("You Have Won");
//         wonNum++;
//     } else{
//         console.log("You Have lost. Random number was " + randomNumber);
//         lostNum++;
//     }
// }

// document.write("Total Won = " + wonNum + "<br>");
// document.write("Total Loss = " + lostNum);

//Date Object
// var date = new Date();
// console.log(date);

// var year = date.getFullYear();
// console.log(year);

// var month = date.getMonth();
// console.log(month);

// var currDate = date.getDate();
// console.log(currDate);

//DOM

// var myHeading = document.getElementById("heading1");
// myHeading.innerHTML = "Ibrahim Ohid";

// document.getElementById("para").innerHTML = "MOhammad";

// document.getElementsByTagName("h1")[1].innerHTML = "MOhammad Ibrahim";
// document.getElementsByClassName("para1")[0].innerHTML = "I am a Web Developer";

// document.getElementById("title").style.background = "pink";
// document.getElementById("title").style.color = "green";
// document.getElementById("title").style.padding = "20px";

//query selector 
// document.querySelector("#title").innerHTML = "Hello Bangladesh";

// document.querySelector(".name").style.background = "green";
// document.querySelector(".name").style.color = "white";
// val = document.querySelector("ol li:last-child");
// val.style.background = "cyan";
// val.style.color = "white";

// val = document.querySelector("ul li:nth-child(2)");
// val.style.background = "hotpink";
// val.style.color = "white";
// val.style.padding = "10px";

// document.querySelector("#para1").innerHTML = "I love Bangladesh";

// document.querySelectorAll("ol li")[0].innerHTML = "React";
// document.querySelectorAll("ul li")[3].style.background = "cyan";

let olItem = document.createElement('li');
olItem.className = "React";
// olItem.id = "React baba";
// olItem.setAttribute("title", "React is good");
// olItem.appendChild(document.createTextNode("React"));
// document.querySelector("ol").appendChild(olItem);

// console.log(olItem);

// let ulItem = document.createElement("li");
// ulItem.className = "Linkedin";
// ulItem.id = "Linkedin Baba";
// ulItem.setAttribute("title", "Linkedin is Good");
// ulItem.appendChild(document.createTextNode("Linkedin"));
// document.querySelector("ul").appendChild(ulItem);
// console.log(ulItem);

// let newHeading = document.createElement("h1");
// newHeading.appendChild(document.createTextNode("I Love Bangladesh"));

// let oldHeading = document.querySelector("h1");

// let parent = document.querySelector(".container");
// parent.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
// console.log(parent);

// let list = document.querySelector("ul li:nth-child(1)");

// list.classList.add("ohid");
// console.log(list);

// document.getElementById("btn-1").addEventListener("click", ohid);

// function ohid(){
//     document.write("Mohammad Ibrahim");
// }

// document.getElementById("btn-1").addEventListener("dblclick", ibrahim);

// function ibrahim(){
//     document.write("Mohammad Ibrahim");
// }
// var para = document.querySelector("#para");
// function button1() {
//     para.innerHTML = "I am Button1";
// }
// function button2() {
//     para.innerHTML = "I am Button2";
// }

// var picture = document.querySelector("#picture1");
// function picture1(){
//     picture.src = "/img/CSDU Family.jpg"
// }
// function picture2(){
//     picture.src = "/img/CSDU Logo Design White BG-01.jpg"
// }

// var button = document.querySelector("#para");
// function button1 () {
//     button.innerHTML = "I am button1";
// }
// function button2 () {
//     button.innerHTML = "i am button2"
// }

// var image = document.querySelector("#img1");
// function picture1() {
//     image.src = "/img/CSDU Family.jpg";
// }

// function picture2() {
//     image.src = "/img/CSDU Logo Design White BG-01.jpg";
// }

// var link = document.getElementsByTagName("a")[3];
// link.innerHTML = "Ibrahimohid";
// link.style.background = "blue";
// link.style.textDecoration = "none";
// link.style.color = "#ffff";
// link.style.padding = "10px";
// link.style.fontSize = "19px";
// link.href = "https://studywithanis.com";

// console.log(link);

// var heading = document.getElementsByTagName("h1")[0];
// heading.innerHTML = "Pakistan";
// console.log(heading);

// var heading0 = document.createElement("h1");
// var text = document.createTextNode("Hello World!");
// heading0.insertBefore(text);

// var mydiv = document.querySelector("#contianer");
// mydiv.insertBefore(heading0);

// const studentList = document.querySelector(".student-list");
// const studentA = studentList.children[2]; 

// console.log(studentA);

// const studentList = document.querySelector("li");
// const studentAll = studentList.parentElement;
// console.log(studentAll);

// var photos = ["/img/1.png", "/img/2.png", "/img/3.png"];
// var imgTag = document.querySelector("img");

// var count = 0;

// function next() {
//     count++;
//     if (count >= photos.length) {
//         count = 0;
//         imgTag.src = photos[count];
//     } else {
//         imgTag.src = photos[count];
//     }
// }

// function prev() {
//     count--;
//     if (count < 0) {
//         count = photos.length - 1;
//         imgTag.src = photos[count];
//     } else {
//         imgTag.src = photos[count];
//     }
// }

// function addStyle(){
//     var myPara = document.querySelector("#para");
//     myPara.classList.add("para");
// }

// function removeStyle(){
//     var myPara = document.querySelector("#para");
//     myPara.classList.remove("para");
// }
// var mypara = document.querySelector("#para");
// function addStyle(){
//     mypara.classList.add("para");
// }

// function removeStyle(){
//     mypara.classList.remove("para");
// }
//var photos = ["/img/1.png", "/img/2.png", "/img/3.png"];
// var myTag = document.querySelector("img");

// var count = 0;
// function next(){
// count++;

// if(count >= photos.length){
//     count = 0;
//     myTag.src = photos[count];
// }else{
//     myTag.src = photos[count];
// }
// }

// function prev(){
//     count--;
//     if(count < 0){
//         count = photos.length -1;
//         myTag.src = photos[count];
//     }else{
//         myTag.src = photos[count];
//     }
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("Ibrahim OHid");
// })

// var heading = document.querySelector("h1");

// heading.addEventListener("mouseover", function(){
//     heading.classList.add("heading");
// })

// heading.addEventListener("mouseout", function(){
//     heading.classList.remove("heading");
// })

// var para1 = document.querySelector("p");

// function click1(){
//     para1.classList.add("para");
// }

// var button1 = document.querySelector(".btn1");
// var button2 = document.querySelector(".btn2");
// var button3 = document.querySelector(".btn3");
// button1.addEventListener("click", function(){
//     document.querySelector("h1").innerHTML = "Red Button Clicked";
// });

// button2.addEventListener("click", function(){
//     document.querySelector("h1").innerHTML = "Blue Button Clicked";
// });

// button3.addEventListener("click", function(){
//     document.querySelector("h1").innerHTML = "Orange Button Clicked";
// });

// for (i = 0; i < 5; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         audioPlay(text);
//         selectButton(text);
//     })
// }

// function audioPlay(text) {
//     switch (text) {
//         case "a":
//             var audio = new Audio("/sound/Letter_a.mp3");
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio("/sound/Letter_B.mp3");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio("/sound/Letter_c.mp3");
//             audio.play();
//             break;
//         case "d":
//             var audio = new Audio("/sound/Letter_D.mp3");
//             audio.play();
//             break;
//         case "e":
//             var audio = new Audio("/sound/Letter_e.mp3");
//             audio.play();
//             break;
//     }
// }

// function selectButton(text){
//     var selectBtn = document.querySelector("." + text);
//     selectBtn.classList.add("btnani");

//     setTimeout( function(){
//         selectBtn.classList.remove("btnani");
//     },1000);
// }

// document.addEventListener("keypress", function(event){
//     var text = event.key;
//     audioPlay(text);
//     selectButton(text);
// })

// document.addEventListener("keypress", function(event){
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You Have Pressed : " + text;
// })

// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function(event){
//     count++;
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You Have Pressed: " + count;
// })

// var input = document.querySelector("input[name=Name]");
// input.addEventListener("change", inputChange);

// function inputChange(e) {
//     // console.log(e);
//     //console.log(e.type);
//     //console.log(e.target);
//     //console.log(e.target.id);
//     //console.log(e.target.className);
//     //console.log(e.target.value);
// }

// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandler);

// function changeHandler(e){
//     //console.log(e);
//     //console.log(e.type);
//     //console.log(e.target);
//     //console.log(e.target.className);
//     //console.log(e.target.id);
//     console.log(e.target.value);

// }

// const programs = document.querySelectorAll("input[name=program]");
// Array.from(programs).map((program) => {
//     program.addEventListener("change", programHandeler);
// })

// function programHandeler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

// var select = document.querySelector("#department");
// select.addEventListener("change", selectHandeler);
// function selectHandeler(e){
//     console.log(e.target.value);
// }

// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");

// form.addEventListener("submit", submitHandeler);

// function submitHandeler(e) {
//     e.preventDefault();
//     // console.log(name.value);
//     // console.log(email.value);
//     // console.log(password.value);
//     const userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     }
//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
// }

// const video = document.querySelector("video");
// video.addEventListener("volumechange", canplayHandeler);

// function canplayHandeler(e){
//     //console.log("canplay");
//     //console.log("play");
//     //console.log("pause");
//     //console.log("playing");
//     //console.log("Thanks for watching");
//     console.log("Volume Changed");
// }

// window.addEventListener("load", function(){
//     console.log("Loaded");
// });
// window.addEventListener("unload", function(){
//     console.log("Unloaded");
// });
// window.addEventListener("scroll", function(){
//     console.log("Scrolled");
// });
// window.addEventListener("resize", function(){
//     console.log("Resized");
// });
// window.addEventListener("resize", function(){
//     const height = window.outerHeight;
//     const width = window.outerWidth;
//     console.log(`Height: ${height}, Width: ${width}`);
// });

const details = document.querySelector("details");
details.addEventListener("toggle", function(e){
    //console.log("Toggled");
    console.log(e.target.open);
});
