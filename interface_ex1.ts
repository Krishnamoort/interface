//classes that are derived from interface must follow the structure provided by interface.

interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}
var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());

var otherPerson: IPerson={
    firstName: "muni",
    lastName: "krishna",
    sayHi:(): string => {return "vakkali pongada anguttu"}

}
console.log("that 3rd person");
console.log(otherPerson.firstName);
console.log(otherPerson.lastName);
console.log(otherPerson.sayHi());
