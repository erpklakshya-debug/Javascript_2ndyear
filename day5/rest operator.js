function sum(...values){
    let sum = 0;
    for(let i in values){
        sum = sum + values[i];
    }
    console.log(sum);
};

let arr = [10,20,30,40]
sum(...arr);


var a1 = [10, 20, 30, 40]
var a2 = [50, 60, 70]

var a3 = [60,...a1,...a2, 80, 90] // way to add two diffrent arrays using rest operator
console.log(a3)
