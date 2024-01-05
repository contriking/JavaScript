// Object's

const student={
    // Properties or states
    fullName: "Prashant Sahu",
    marks: 90,
    // Methods or Behaviour
    printMarks: function(){
        console.log("marks:",this.marks); // this=student.marks
    },
}

const employee={
    calcTax(){
        console.log("TAx rate is 10%");
    }
};

const karanArjun={
    salary:50000,
    calcTax(){
        console.log("TAx rate is 20%");
    }
}

// Prototype: is is an object that inside an object; every object has a default prototype ans can be used E.G. push,pop commnd in array
// creating a prototype inside an object

karanArjun.__proto__=employee;