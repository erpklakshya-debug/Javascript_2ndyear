function sum(...values){
    console.log(values)
}
function sum(name, ...values){
    console.log(name, values)
}
function sum(name, rollno, ...values){
    console.log(name, rollno, values)
}

sum(10, 20, 30, 40)
sum("vikas", 10, 20, 30)
sum("lakshya", 200675, 10, 20, 30)
let arr = [ 10, 20, 30]
sum(...arr)
arr.push(40)
console.log([...arr]);