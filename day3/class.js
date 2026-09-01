class student{
    constructor(name, pincode){
        this.name = name;
        this.pincode = pincode;
    }

    display(){
        console.log(this.name);
        console.log(this.pincode);
    }
};

let s1 = new student("lakshya", 201036);
let s2 = new student("vivek", 201032);
s1.display();
s2.display();