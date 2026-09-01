function student(name, Roll_number, pin_code, city){
    this.name =name;
    this.Roll_number = Roll_number
    this.pin_code = pin_code;
    this.city = city;

    this.display = function() {
        console.log("Name:", this.name);
        console.log("Roll Number:", this.Roll_number);
        console.log("Pin Code:", this.pin_code);
        console.log("City:", this.city);
        console.log("------------------");
    };
}

let s1 = new student("vikas", 101, 201306, "greater noida")
let s2 = new student("lakshya pandey", 104, 201306, "greater noida") 
let s3 = new student("gautam agnihotri", 109, 202013, "modi nagar")
s1.display();
s2.display();
s3.display();