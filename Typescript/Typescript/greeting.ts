class Student{
    fullName:string;
    constructor(public firstName,public middleinitial,public lastName){
        this.fullName = firstName + ' ' + middleinitial + ' ' + lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person:Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student('Shaw',"H","Hung");

console.log(greeter(user));