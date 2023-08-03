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
