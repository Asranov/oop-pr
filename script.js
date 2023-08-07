//Basic Class and Object

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const cat = new Animal("Cat", "Meaw");
cat.makeSound();

// const createAnimal = (name, sound) => {
//   function makeSound() {
//     console.log(`${name} says ${sound}`);
//   }

//   return makeSound;
// };

// const dog = createAnimal("Dog", "Woof");
// dog();

class Person {
  constructor(name, age, isMaried) {
    this.name = name;
    this.age = age;
    this.isMaried = isMaried;
  }

  speak() {
    console.log(`My name is ${this.name}, i am ${this.age} years old`);
  }

  isMariedPerson() {
    if (this.age > 20 && this.isMaried) {
      console.log(`${this.name} is maried`);
    } else {
      console.log(`${this.name} is not maried`);
    }
  }
}

const person = new Person("John", 20, true);
person.speak();
person.isMariedPerson();

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this._balance = balance; // Private property (_balance)
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }
}

const myAccount = new BankAccount("123456789", 1000);
console.log(myAccount.getBalance());
myAccount.deposit(5000);
console.log(myAccount.getBalance());

// const testBankAccount = (accountNumber, balance) => {
//   return {
//     getBalance: function () {
//       return balance;
//     },
//     deposit: function (amount) {
//       balance += amount;
//     },
//   };
// };

// const testAccount = testBankAccount(123456789, 1200);
// console.log(testAccount.getBalance());
// testAccount.deposit(300);
// console.log(testAccount.getBalance());

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log(
      `Drawing a circle with color ${this.color} and radius ${this.radius}`
    );
  }
}

const redCircle = new Circle("red", 5);

//Task 1: Create a class representing a Person with properties name and age. Add a method to introduce the person.
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

//Task 2: Create a class representing a Car with properties make, model, and year. Add a method to display information about the car.

class CarClass {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.make} ${this.model} was made in ${this.year}`);
  }
}

//Task 3: Create a class representing a Book with properties title, author, and publication year. Add a method to display information about the book.

class BookClass {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayInfo() {
    console.log(
      `${this.title} by ${this.author} was published in ${this.publicationYear}`
    );
  }
}

//Task 4: Create a class representing a Student with properties name and grades (an array of numbers). Add a method to calculate the average grade of the student.

class StudentClass {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  averageGrade() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
}

//Task 5: Create a class representing a Teacher with properties name and subject. Add a method to display the teacher's subject.

class TeacherClass {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  displaySubject() {
    console.log(this.subject);
  }
}

//Task 6: Create a class representing a Bank with properties name and accounts (an array of BankAccount objects). Add methods to open a new account, close an account, and calculate the total balance of all accounts.

class BankAccountClass {
  constructor(name, accounts, balance) {
    this.name = name;
    this.accounts = accounts;
    this.balance = balance;
  }

  openAccount() {
    this.accounts.push(new BankAccount("123456789", 1000));
  }

  closeAccount() {
    this.accounts.pop();
  }

  getBalance() {
    return this.balance;
  }

  totalBalance() {
    let sum = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      sum += this.accounts[i].getBalance();
    }
    return sum;
  }
}

//New Tasks 1
class NewPerson {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}

const newPerson = new NewPerson("John", "20", "USA");
newPerson.displayDetails();

//
class MyNumbers {
  constructor(numbers) {
    this.numbers = numbers;
  }

  displayNumber() {
    for (let i = 0; i < this.numbers.length; i++) {
      console.log(`Number: ${this.numbers[i]}`);
    }
  }
}

const myNumbers = new MyNumbers([1, 2, 3, 4, 5]);
myNumbers.displayNumber();

//
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Price: ${this.price}`);
  }
}
