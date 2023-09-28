// const data = require("./friends_data.json");
// //console.log(data);
// //console.log(data.friends[0].age);
// //data.friends[0].name = "Mohammad";
// // console.log(data.friends[0].name);
// delete data.friends[0].name;
// console.log(data);

// const studentData = require("./student_data.json");
// const sData = studentData.sutdents[1].languages[0];
// console.log(sData);

// const data = require("./friends_data.json");
// for(x in data){
//     console.log(x);
//     console.log(data[x]);
// }

const data2 = {
    name : "Ibrahim",
    age : 25
}

const data_1 = JSON.stringify(data2);
const data_2 = JSON.parse(data_1);
console.log(data_2);
