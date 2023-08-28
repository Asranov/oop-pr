//Перегрузка функций в JS

// getRectangleArea(x1, y1, x2, y2) или
// getRectangleArea(width, height)
function getRectangleArea(x1, y1, x2, y2) {
  if (arguments.length == 2) return x1 * y1;
  return x1 + y1 + x2 + y2;
}

console.log("Second function", getRectangleArea(1, 2, 3, 4));
console.log("First function", getRectangleArea(2, 3));

function squareOrSum(a, b, c) {
  return arguments.length == 2 ? a * b : a + b + c;
}

console.log("Square function", squareOrSum(2, 3));
console.log("Sum function", squareOrSum(2, 3, 4));

//Public, Private, Protected
class User {
  name = "Bill"; // Public
  #age = 20; // Private
  _isMarried = false; // Protected

  constructor() {}

  introduce() {
    return `My name is ${this.name}, I am ${this.#age} years old, and I am ${
      this._isMarried ? "married" : "not married"
    }.`;
  }
}

const user = new User();

console.log("Name:", user.name); //Bill
console.log("Age:", user.age); //undefined
console.log("IsMaried:", user._isMarried); //false

class Person {
  #name; //Private

  constructor(name) {
    this.#name = name;
  }

  sayHello() {
    return `Hello, my name is ${this.#name}`;
  }
}

const person = new Person("Alex");
console.log(person.sayHello());

class Employee extends Person {
  _position; //Protected

  constructor(name, position) {
    super(name);
    this._position = position;
  }

  introduce() {
    return `${super.sayHello()}. I work as a ${this._position}.`;
  }
}

const employee = new Employee("Ali", "Software engineer");
console.log(employee.sayHello());
console.log(employee.introduce());
console.log(employee._position);
console.log(employee.name); // undefined

class Manager extends Employee {
  constructor(name, position, department) {
    super(name, position);
    this.department = department;
  }

  getDepartmentInfo() {
    return `${super.sayHello()}, ${this._position} in the ${
      this.department
    } department`;
  }
}

const manager = new Manager("Manager", "Manager position", "Business Center");
console.log(manager._position);
console.log(manager.getDepartmentInfo());

//Generics
