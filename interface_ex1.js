//classes that are derived from interface must follow the structure provided by interface.
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
var otherPerson = {
    firstName: "muni",
    lastName: "krishna",
    sayHi: function () { return "vakkali pongada anguttu"; }
};
console.log("that 3rd person");
console.log(otherPerson.firstName);
console.log(otherPerson.lastName);
console.log(otherPerson.sayHi());
