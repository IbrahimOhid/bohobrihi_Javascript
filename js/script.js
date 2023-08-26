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