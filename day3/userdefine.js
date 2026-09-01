let student = {
    first: "lakshya",last: "pandey",
    city: "greater noida",
    state: "uttar pradesh",
    pincode: 201306,

    salary: function() {
        console.log("salary");
    },

    subject: ["WEB DEVELOPMENT", "C++", "JAVA"]
};

console.log(student.first);
console.log(student.last);
student.salary();

console.log(student.subject[0]);
console.log(student.subject[1]);
console.log(student.subject[2]);