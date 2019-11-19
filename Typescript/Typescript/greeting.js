var Student = /** @class */ (function () {
    function Student(firstName, middleinitial, lastName) {
        this.firstName = firstName;
        this.middleinitial = middleinitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleinitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Shaw', "H", "Hung");
console.log(greeter(user));
