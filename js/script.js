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

// const details = document.querySelector("details");
// details.addEventListener("toggle", function(e){
//     //console.log("Toggled");
//     console.log(e.target.open);
// });

// var div = document.querySelector("div");
// div.addEventListener("click", function(e){
//     //console.log("CLicked");
//     //console.log(e.target);
//     //console.log(e.target.className);
//     //console.log(e.target.id);
//     //console.log(e.target.innerHTML);
//     //console.log(e.target.innerText);
//     //console.log(e.target.textContent);
// });

// div.addEventListener("dblclick", function(){
//     console.log("dblclicked");
// });

// div.addEventListener("mousedown", function(){
//     console.log("MouseDownded");
// });

// div.addEventListener("mouseup", function(){
//     console.log("MouseUped");
// });

// div.addEventListener("mouseenter", function(){
//     console.log("MouseEntered");
// });
// div.addEventListener("mouseleave", function(){
//     console.log("MouseLeaved");
// })

// div.addEventListener("mouseover", function(){
//     console.log("MouseOvered");
// });

// div.addEventListener("mousemove", function(e){
//     // console.log("MouseMOved");
//     // console.log("ClientX : " + e.clientX);
//     //console.log("ClientY : " + e.clientY);
//     //console.log("OffsetX = " + e.offsetX);
//     //console.log("OffsetY = " + e.offsetY);
// });

// var buttons = document.querySelectorAll(".btn");

// Array.from(buttons).map((button) => {
//     button.addEventListener("click", function(e){
//         console.log(e.target.innerText);
//     });
// });

// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", function(e){
//     //console.log("keydown");
//     if(e.repeat){
//         alert("Don't Repeat");
//     }
// });
// textarea.addEventListener("keypress", function(){
//     console.log("keypress");
// });
// textarea.addEventListener("keyup", function(e){
//     //console.log(e.key);
//     //console.log(e.keyCode);
//     //console.log(e.code);
//     //console.log(e.shiftKey);
//     if(e.shiftKey){
//         console.log("Shift+ " + e.key);
//     }
// });

// const input = document.querySelector("input");
// input.addEventListener("blur", function(e){
//     //console.log("blur");
//     // input.style.background = "tomato";
//     // input.style.padding = "0";
//     // console.log(e.target.value);
//     //input.value = "";
//     input.value = e.target.value.toUpperCase();
// })
// input.addEventListener("focus", function(){
//     //console.log("focus");
//     // input.style.background = "blue";
//     // input.style.padding = "5rem";
// })
// input.addEventListener("focusin", function(){
//     console.log("focusin");
// })

// input.addEventListener("focusout", function(){
//     console.log("focusout");
// })

// const input = document.querySelector("input");
// const p = document.querySelector("p");
// input.addEventListener("copy", function(){
//     p.innerHTML = "You Have Copyed."
// })
// input.addEventListener("cut", function(){
//     p.innerHTML = "You Have Cuted."
// })
// input.addEventListener("paste", function(){
//     p.innerHTML = "You Have Pasted."
// })

// const div = document.querySelector("div");
// const p = document.querySelector("p");

// p.addEventListener("dragstart", function(e){
//     console.log(e.target.id);
// })

//console.log(window.location);
//console.log(location.href);
//console.log(location.protocol);
//console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

// const locations = document.querySelector(".location");
// const p1 = locations.children[0];
// p1.textContent = location.href;
// const p2 = locations.children[1];
// p2.textContent = location.protocol;
// const p5 = locations.children[2];
// p5.textContent = location.hostname;
// const p3 = locations.children[3];
// p3.textContent = location.port;
// const p4 = locations.children[4];
// p4.textContent = location.pathname;

// const button = document.querySelector("#btn");
// button.addEventListener("click", function(){
//     location.assign("https://anisulislam.netlify.app/");
// });

//alert("Error Here");
//confirm("ERROR");

// function deleteSomething(){
//     let value = confirm("Are you Delete ?");
//     if(value){
//         console.log("YES Delete");
//     }else{
//         console.log("NO Delete");
//     }
// }
// deleteSomething();

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);
// setTimeout(Display, 2000);
// function Display(){
//     console.log("Bangladesh");
// }

// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");
// saveButton.addEventListener("click", function(){
//     message.textContent = "Registration Succesful"; 
//     setTimeout(() => {
//         message.textContent = "";
//         }, 2000);
// })
// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");
// saveButton.addEventListener("click", startCount);

// function startCount(){
//     const count = 1;
//     message.textContent = count;
//     setInterval(() => {
//         count++;
//         message.textContent = count;
//     }, 1000);
// }

// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");
// saveButton.addEventListener("click", startClock);

// function startClock(){
//     const date = new Date();
//     const hour = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     minutes = formatTime(minutes);
//     seconds = formatTime(seconds);

//     const time = hour + ":" + minutes + ":" + seconds;

//     message.textContent = time;

//     setInterval(startClock, 1000);
// }

// function formatTime(value){
//     if(value < 10){
//         value = "0" + value;
//     }
//     return;
// }

//ERROR HANDLING

// try {
//     alert("Hi Everyone");
//     alert(x);
//     alert("Bye Everyone");
// } catch (err) {
//     console.log(err);
//     // console.log(err.name);
//     // console.log(err.message);
// }finally{
//     alert("Always Show");
// }
// alert("Hi Everyone");
// alert(x);
// alert("Bye Everyone");

// document.querySelector("#btn").addEventListener("click", function(){
//     var num = document.querySelector("#text").value;

//     try{
//         if(num < 5){
//             throw "Input is to Low";
//         }else if(num > 10){
//             throw "Input is to HIgh";
//         }
//     }catch(err){
//         console.log(err);
//     }
// })

// console.log("Before Error");
// try{
//    // test();
// }catch(err){
//     //console.log(err);
//     console.log(err.message);
//     console.log(err.name);
// }finally{
//     console.log("Finally RUn");
// }
// console.log("After Error");


// document.querySelector("#btn").addEventListener("click", function(){
//     var num = document.querySelector("#text").value;
//     try{
//         if(num < 15){
//             throw "To small";
//         }else if(num > 15){
//             throw "To Big";
//         }
//     }catch(err){
//         console.log(err);
//     }
// })

//Regular Expression
// let re;
// let str;

// re = /hello/i;
// str = "i love Hello Bangladesh";
// str = "world";
// // console.log(re);
// // console.log(re.source);

// //let result = re.exec(str);
// let result = re.test(str);
// // result = str.match(re);
// // result = str.search(re);
// console.log(result);
// let re;
// let str;
// re = /hello$/i;
// str = "Hello";
// re = /he[ll]o/;
// str = "helo";

// console.log(re.exec(str));
// reTest(re, str);
// function reTest(re, str){
//     if(re.test(str)){
//         console.log(`"${str}" Matching "${re.source}`);
//     }else{
//         console.log(`"${str}" Not Matching "${re.source}`);
//     }
// }

// let re;
// let str;

// // Postal Code
// // 4700, 4000
// re = /^[0-9]{4}$/
// str = "4730";

// // Phone Number
// // 01717888888 +8801717888888 8801717888888
// re = /^01[0-9]{9}$/;
// str = "01834598999"

// re = /^(\+)?(88)?01[0-9]{9}$/;
// str = "+8801717888888";

// console.log(re.test(str));

// my favourite color is gray. Hex colorrrrr code is	#808080.
// i belived your are not "Color blind"!
// if you are not color blind then tell me what is your favourite 
// Colour?
// or you like multiple color?
// can we make the 'r' silent? Like colo! REGULAR EXPRESSION makes me
// forget all spellings he he!

//Regex IN Javascript

// const text = "#2A2A2A"; //2A2A2A
// const regex = /#?([\da-fA-f]{2})([\da-fA-f]{2})([\da-fA-f]{2})/g;

// const matches = text.match(regex);
// const index = text.search(regex);
// const replaced = text.replace(regex, "#000000");
// const testing = regex.test(text);

// console.log(matches,index,replaced,testing);

// const text = "+88-01834598910";  //+88-01834598910
// const regex = /(\88?)-?01[1-9]\d{8}/g;

// const matches = text.match(regex);
// const index = text.search(regex);
// const replaced = text.replace(regex, "01925425923");
// const testing = regex.test(text);

// console.log(matches,index,replaced,testing);

//JSON 
// var student = {name: "Ibrahim", age: 25, hometown: "Islamabad"};

// var json_stu = JSON.stringify(student);
// console.log(json_stu);

// var person = {
//     name: "Ibrahim",
//     age: 26,
//     hometown: "Eidgaon",
//     dob: 1997-05-07,
//     married: false,
//     test_null: null,
//     test_undefined: undefined,
//     greet: function(){
//         console.log("Hello Bangladesh")
//     }
// }
// var json_person = JSON.stringify(person);
// console.log(json_person);


// document.querySelector("#get_data").addEventListener("click", loadData);
// function loadData(){
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "/txt/data.txt", true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             document.querySelector("#title").innerHTML = this.responseText;
//         }
//     }
//     xhr.send();
// }

// document.querySelector("#get_data").addEventListener("click", loadJoke);
// function loadJoke(){
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
//     xhr.onload = function () {
//         if(this.status === 200){
//             console.log(this.responseText);
//         }
//     }
//     xhr.send();
// }

// document.querySelector("#get_data").addEventListener("click", getData);
// function getData() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(res) {
//         return res.json();
//     })
// }

// const inputBox = document.querySelector("#input_box");
// const btn = document.querySelector("#add_btn");
// const lists = document.querySelector("#lists");

// btn.addEventListener("click", function(){
//     if(inputBox.value === ''){
//         alert("You Must Write Something");
//     }else{
//         const li = document.createElement('li');
//         li.innerHTML = inputBox.value + " ";
//         lists.appendChild(li);
//         const link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = 'x';
//         li.appendChild(link);
//     }
//     inputBox.value = '';
// })

// lists.addEventListener("click", function(e){
//     if(e.target.hasAttribute('href')){
//         const ele = e.target.parentElement;
//         ele.remove();
//     }
// })


// const inputBox = document.querySelector('#input_box');
// const addList = document.querySelector('#add_list');
// const lists = document.querySelector('#lists');
// const clearList = document.querySelector('#clear_btn');

// addList.addEventListener('click', addLists);
// lists.addEventListener('click', removeList);
// clearList.addEventListener('click', clearBtn);


// function addLists(){
//     if(inputBox.value === ''){
//         alert("Write Something");
//     }else{
//         const li = document.createElement('li');
//         li.innerHTML = inputBox.value + " ";
//         lists.appendChild(li);
//         const link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = 'x';
//         li.appendChild(link);
//     }
//     inputBox.value = " ";
//     saveData();
// }

// function removeList(e){
//     if(e.target.hasAttribute('href')){
//         const ele = e.target.parentElement;
//         ele.remove();
//         saveData();
//     }
// }

// function clearBtn(e){
//     lists.innerHTML = "";
// }

// function saveData(){
//     localStorage.setItem('data', lists.innerHTML);
// }
// function showList(){
//     lists.innerHTML = localStorage.getItem('data');
// }
// showList();


// const inputList = document.querySelector('#input_list');
// const addList = document.querySelector('#add_list');
// const taskList = document.querySelector('#task_list');
// const clearList = document.querySelector('#clear_list');

// addList.addEventListener('click', addLists);
// taskList.addEventListener('click', removeList);
// clearList.addEventListener('click', clearLists);


// function addLists(){
//     if(inputList.value === ''){
//         alert('Write a Something');
//     }else{
//         const li = document.createElement('li');
//         li.innerHTML = inputList.value + ' ';
//         taskList.appendChild(li);  
//         const link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = 'x';
//         li.appendChild(link); 
//     }
//     inputList.value = '';
//     saveData();
// }

// function removeList(e){
//     if(e.target.hasAttribute('href')){
//         const ele = e.target.parentElement;
//         ele.remove();
//         saveData();
//     }
// }

// function clearLists(e){
//     taskList.innerHTML = '';
// }

// function saveData(){
//     localStorage.setItem('data', taskList.innerHTML);
// }

// function showLists(){
//     taskList.innerHTML = localStorage.getItem('data')
// }
// showLists();


// 

// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const year = document.querySelector('#year');
// const addBook = document.querySelector('#add-book');
// const bookList = document.querySelector('#book-list');

// addBook.addEventListener('click', addBooks);
// bookList.addEventListener('click', removeLists);


// function addBooks(e){
//     e.preventDefault();
//     if(title.value === '' && author.value === '' && year.value === ''){
//         alert('Please Fill up Form');
//     }else{
//         const newRow = document.createElement('tr');

//         const newTitle = document.createElement('th');
//         newTitle.innerHTML = title.value;
//         newRow.appendChild(newTitle);

//         const newAuthor = document.createElement('th');
//         newAuthor.innerHTML = author.value;
//         newRow.appendChild(newAuthor);

//         const newYear = document.createElement('th');
//         newYear.innerHTML = year.value;
//         newRow.appendChild(newYear);


//         const delIcon = document.createElement('a');
//         delIcon.setAttribute('href', '#');
//         delIcon.innerHTML = 'X';
//         newRow.appendChild(delIcon);


//         bookList.appendChild(newRow);

//         title.value = '';
//         author.value = '';
//         year.value = '';
//     }
// }

// function removeLists(e){
//     if(e.target.hasAttribute('href')){
//         const ele = e.target.parentElement;
//         ele.remove();
//     }
// }

//ES6

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(`Global Scope : `, a, b, c);

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log(`Function Scope :`, a, b, c);
// }
// test();

// console.log(`Global Scope : `, a, b, c);

// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`If Scope :`, a, b, c)
// }
// console.log(`Global Scope : `, a, b, c);

// for(let a = 0; a < 10; a++){
//     console.log(`Loop Scope :`, a);
// }
// console.log(`Global Scope : `, a, b, c);

// function text(){
//     console.log("hello");
// }
// text();

// let hello = (name, dob) => {
//     console.log(name, dob);
// }
// hello('Ibrahim', '05-07-1997');

//let getSqur = num => num*num;
//console.log(getSqur(4));

// let getSqur = num => {return num*num};
// console.log(getSqur(4));

// numbers = [1, 2, 3, 4, 5];
// // let printAll = num => {
// //     console.log(num);
// // }
// // numbers.forEach(printAll);

// let allSqr = numbers.map(item => item * item);
// console.log(allSqr);

// let name = 'Ibrahim';
// let age = '07 may, 1997';
// console.log(`Name: ${name} 
// Age: ${age}`);

// let a = 50;
// let b = 60;
// console.log(`${a} + ${b} = ${a + b}`);

// let fruits = ['Apple', 'Banana', 'Orange'];
// let [friut1, , friut3] = fruits;
// console.log(friut1, friut3);

// let a,b ;
// a = 8; b = 20;

// [a,b] = [b,a];
// console.log(`a = ${a} b = ${b}`);

// let person = {
//     firstName: 'Ibrahim',
//     lastName: 'Ohid',
//     dob: '05-07-1997'
// }
// let {firstName, lastName, dob} = person;
// console.log(firstName, lastName, dob);

// let str = 'IBrahim';
// let newStr = [...str];
// console.log(newStr);

// let fruit1 = ['Apple', 'Banana', 'Orange'];
// let fruit2 = ['Grape', 'Guava'];
// let fruit3 = 'Jackfruit';

// let fruits = [...fruit1, ...fruit2, fruit3];
// console.log(fruits);

// let numbers = [23, 33, 0, -1, 4];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// let person = ["Ibrahim", "Ohid"];

// let name = (fname, lstname) => {
//     console.log(`Hello ${fname} ${lstname}`);
// }
// name(...person);

// let fruits = ['mango', 'banana', 'orange', 'grape', 'jackfruit'];

// let [fruit, ...second] = fruits;
// console.log(fruit);
// console.log(second);

// let person = {
//     fname : 'Ibrahim',
//     lname : 'Ohid',
//     dob : '07-05-1997'
// }
// let {fname, ...lname} = person;
// console.log(fname);
// console.log(lname);

// class Person {
//     constructor(age, name){
//         this.age = age;
//         this.name = name;
//     }
// }

// let person1 = new Person('25', 'Ibrahim');
// console.log(person1)

// let prom = new Promise((resolve, reject)=> {
//     let a = 1 + 3;
//     if(a == 2){
//         resolve('Right');
//     }else{
//         reject('Wrong');
//     }
// })

// prom.then((message) => {
//     console.log(`it's ` + message);
// }).catch((message) => {
//     console.log(`it's ` + message);
// })

// let mySet = new Set([2,1,2,3]);

// mySet.add('Hello');
// mySet.delete(2);

//console.log(mySet.has(5));
// console.log(mySet.size);


// javascript Problem Solving ⬇

// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(1,  6));

//const students = ['ibrahim', 'rahim', 'shihab', 'akash'];
// console.log(students.sort());

// const numbers = [10, 2, 3, 6, 8, 20, 1, 39];
// console.log(numbers.sort(function(a, b){
//     // return a - b;
//     return b - a;
// }));

// function isLeapYear(year){
//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
//         console.log(`${year} is a LeapYear`);
//     }else{
//         console.log(`${year} is not a  LeapYear`);
//     }
// }
// isLeapYear(2028);

//DOM
// const divElement = document.createElement('div');
// divElement.className = 'add-task';
// divElement.setAttribute('id', 'book-list');
// divElement.setAttribute('title', 'added-book');

// const container = document.querySelector('#container');
// container.appendChild(divElement);

//Event listener
// const hello = document.querySelector('#hello');
// hello.addEventListener('click', clickChange);
 
// function clickChange(){
//     return s
// }

// var copyText = document.querySelector('#copy_text');
// var copyButton = document.querySelector('#copy_btn');
 
// copyButton.addEventListener('click', textCopy);

// function textCopy () {
//     navigator.clipboard.writeText(copyText.value);
//     copyText.value = '';
// }

// var cutText = document.querySelector('#cut_text');
// var cutButton = document.querySelector('#cut_btn');

// cutButton.addEventListener('click', textCut);

// function textCut(){
//     navigator.clipboard.writeText(cutText.value);
//     cutText.value = '';
// }

// var pasteText = document.querySelector('#paste_text');
// var pasteButton = document.querySelector('#paste_btn');

// pasteButton.addEventListener('click', textPaste);

// function textPaste() {
//         navigator.clipboard.readText()
//         .then(function(text){
//             pasteText.value = text;
//         })
// }