/* Math Object 🔰 */

// console.log(Math.floor(3.33));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(2.2));
// console.log(Math.ceil(3.9));
// console.log(Math.round(2.3));
// console.log(Math.round(4.5));
// console.log(Math.max(1,3,7));
// console.log(Math.min(10, 3, 15, 1));

// var num1 = parseInt(prompt("Enter a Number :"));
// var num2 = parseInt(prompt("Enter a Number :"));

// var maximum = Math.max(num1, num2);
// console.log(maximum);

//console.log(Math.random() * 6);
// console.log(Math.floor(Math.random() * 6));



/* Guessing Game 🔰 */

var numofWon = 0;
var numofLost = 0;

for (var i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt("Enter a Number form 1 to 5"));
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    if (guessNumber === randomNumber) {
        console.log(`You Have Won`);
        numofWon++;
    } else {
        console.log(`You Have Lost ${randomNumber}`);
        numofLost++;
    }
}

document.write(`Total Number of Won : ${numofWon} <br>`);
document.write(`Total Number of Lost : ${numofLost}`);









































