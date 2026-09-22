// //method 1----------------------
// let name = "lakshya pandey";
// let rollnumber = 104;
// let data = {
//   name,
//   rollnumber,
// };

// console.log(data.name);
// console.log(data.rollnumber);

// //method 2 ---------------------
// let F = "firstname";
// let L = "lastname";

// let computedData = {
//   [F]: "lakshya",
//   [L]: "pandey",
// };

// console.log(computedData.firstname);
// console.log(computedData.lastname);

//method 3--------------------------
// let F1 = "first";
// let L1 = "last";
// let data2 = {
//     [F1]: "lakshya",
//     [L1]: "pandey",
//     show() {
//         console.log(this.first);
//         console.log(this.last);
//     }
// };
// console.log(data2.show());

let F1 = "first";
let L1 = "last";
let data2={
    [F1]: "lakshya",
    [L1]: "pandey",
    show() {
        console.log(this.first)
        console.log(this.last)
    },
};
console.log(data2.show())
console.log(data2['show']())

