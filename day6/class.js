// class hello{
//     constructor(name){
//         this.empname = name
//         console.log(this.empname)
//     }
// }
// let obj = new hello("lakshya pandey")



// class teacher{
//     fauclty = "vikas chaudary"
// }
// let n = new teacher()
// console.log(n.fauclty)


class student{
    constructor(rollno, name, year){
        this.rollno = rollno;
        this.name = name;
        this.year = year;

        console.log(this.rollno)
        console.log(this.name)
        console.log(this.year)
    }
}

let student1 = new student()
let student2 = new student(104, "lakshya pandey", "2nd year")
let student3 = new student(108, "manav dixit", "2nd year" )

class Studentnew {

    fname = "lakshya";
    lname = "chandra";

    display() {
        console.log(this.fname);
        console.log(this.lname);
    }
}

let s1 = new Studentnew();

s1.display();