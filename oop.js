//Принципы ООП

//1.Парадигмы программирования
// Парадигма программирования - это общий стиль написания программ, который определяет подходы к структурированию кода, организации данных и выполнению операций.

//1.1 Императивное программирование
// Пример: Сумма всех четных чисел от 1 до 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum); // Выведет: 30

//1.2 Функциональное программирование:
// Пример: Сумма всех четных чисел от 1 до 10 с использованием функциональных подходов
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
const sumEven = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);
console.log(sumEven); // Выведет: 30

//1.3 Объектно-ориентированное программирование
// Пример: Определение класса "Person" и создание объекта на его основе
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

const person1 = new Person("Анна", 25);
person1.greet(); // Выведет: "Привет, меня зовут Анна и мне 25 лет."

//2 Введение ООП
//Объектно-ориентированное программирование (ООП) - это методология разработки программного кода, основанная на концепции объектов и их взаимодействии.

//3 Обектный подход
// Пример: Реализация банковского счета с помощью объектно-ориентированного подхода
// Определение класса "BankAccount"

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `${this.owner}, вы внесли ${amount} денег. Новый баланс: ${this.balance}`
      );
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `${this.owner}, вы сняли ${amount} денег. Новый баланс: ${this.balance}`
      );
    } else {
      console.log(`Недостаточно средств для снятия ${amount} денег.`);
    }
  }

  getBalance() {
    console.log(`${this.owner}, текущий баланс: ${this.balance}`);
  }
}

//4 Наследование и композиция

//4.1 Наследование

// Базовый класс "Vehicle"
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} - ${this.model}`;
  }
}

// Подкласс "Car", наследующий от "Vehicle"
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Вызов конструктора суперкласса
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

//4.2 Композиция:

// Класс "Engine"
class Engine {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log("Двигатель запущен");
  }
}

// Класс "Car" с композицией "Engine"
class Car2 {
  constructor(make, model, year, engineType) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = new Engine(engineType);
  }

  start() {
    this.engine.start();
    console.log(`${this.make} ${this.model} начал движение`);
  }
}

//5 Принципы SOLID
// Принципы SOLID - это набор пяти базовых принципов объектно-ориентированного программирования и проектирования, которые помогают создавать более гибкий, расширяемый и поддерживаемый код.

// Пример нарушения принципа SRP
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  saveToDatabase() {
    // Сохранение пользователя в базу данных
  }
}

// Пример, соблюдающий принцип SRP
class User2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class UserRepository {
  saveToDatabase(user) {
    // Сохранение пользователя в базу данных
  }
}
