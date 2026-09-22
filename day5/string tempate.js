let firstname = "lakshya";
let lastname = "pandey";

// console.log("my firstname is " + firstname);
// console.log("my lastname is " + lastname);

// console.log(`my firstname is ${firstname}`);
// console.log(`my lastname is ${lastname}`);
// console.log(`my full name is ${firstname} ${lastname}`);


// function fullname(firstname, lastname){
//     return `${firstname} ${lastname}`
// }

// let name = `Hello, my full name is ${fullname(firstname, lastname)}`;
// console.log(name);

//arrow function-----
// hello = () => console.log("hello lakshya");
// hello();

// //common way to write function:
// function physics(marks){
//     return `${marks} is the marks of physics`;
// }
// console.log(physics(90));

// //way to write arrow function:
// chemistry = marks => `${marks} is the marks of chemistry`;
// console.log(chemistry(88)); 

// fullname = (firstname, lastname) => `${firstname} ${lastname}`;
// console.log(`my full name is ${fullname(firstname, lastname)}`)

//nested loops functions in javascript:
// const pattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";

//         for (let j = 1; j <= i; j++) {
//             row += j + " ";
//         }

//         console.log(row);
//     }
// };

// pattern(5);


function sum(...value){
    let total = 0
    for(let n of value){
        total += n;
    }
    return total;
}
sum(1, 2, 3, 4, 5);
console.log(sum(1, 2, 3, 4, 5));

sum(name, ...value)
    let total = 0;
    for(let n of value){
        total += n
    }

    console.log()

