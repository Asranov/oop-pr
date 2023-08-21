//ООП Класс

// Определение класса "Person"
class Person1 {
  // Конструктор класса
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Метод класса
  greet() {
    // console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

// Создание объекта на основе класса "Person"
const person1 = new Person1("Анна", 25);

// Вызов метода объекта
person1.greet(); // Выведет: "Привет, меня зовут Анна и мне 25 лет."

// Абстрактный класс "Shape"
class Shape {
  constructor() {
    if (new.target == Shape) {
      throw new Error("Нельзя создать экземпляр абстрактного класса");
    }
  }

  calculateArea() {
    throw new Error("Метод должен быть реализован в подклассах");
  }
}

//SRP - Single Responsibility Principle

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  saveToDatabase() {
    // Код для сохранения информации о сотруднике в базе данных
  }

  calculateSalary() {
    // Код для расчета зарплаты с учетом должности и других факторов
  }
}

const employee = new Employee("John", "Developer", 50000);
employee.saveToDatabase();
employee.calculateSalary();

//ISP - Interface Segregation Principle

class Worker {
  constructor(name) {
    this.name = name;
  }

  work() {
    // Общая реализация работы
  }

  eat() {
    // Общая реализация приема пищи
  }
}

class Manager extends Worker {
  // Менеджеры не работают, только управляют
}

class Developer extends Worker {
  // Разработчики работают и могут перерывать работу для еды
}

//private, protected, public
class Example {
  #privateField = "This is private";
  publicField = "This is public";

  getPrivateField() {
    return this.#privateField;
  }
}

const instance = new Example();
// console.log(instance.getPrivateField());
// console.log(instance.publicField);
// console.log(instance.#privateField);

class Parent {
  protectedField = "This is protected";
}

class Child extends Parent {
  showProtectedField() {
    return this.protectedField;
  }
}

const childInstance = new Child();
// console.log(childInstance.showProtectedField());
// console.log(childInstance.protectedField);

//private, protected, public

//Private (Для безопасности)
class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  getName() {
    return this._name;
  }
}

const Anton = new Person("Anton", 20);
console.log(Anton.getName());

//protected
class Parent2 {
  constructor() {
    this._privateField = 42;
    this._protectedField = 99;
  }

  getPrivateField() {
    return this._privateField;
  }

  getProtectedField() {
    return this._protectedField;
  }

  getTest() {
    return 1;
  }
}

class Child2 extends Parent2 {
  constructor() {
    super();
  }

  useField() {
    console.log(this._protectedField);
  }
}

const child2 = new Child2();
const parent2 = new Parent2();

//

//Public
const myObject = {
  name: "Parwinder",
  sayMyName: function () {
    return this.name;
  },
};

console.log(myObject);

class MyClass {
  name = "Parwinder";

  sayMyName() {
    return this.name;
  }
}

const myClass = new MyClass();

//Private
class ObjectCreator {
  #meaningOfLife = "Hello life"; // private
  _name = "OBJECT_CREATOR"; // protected

  constructor() {}

  returnMeaningOfLife() {
    return this.#meaningOfLife;
  }
}

const objCrator = new ObjectCreator();
console.log(objCrator.returnMeaningOfLife());
console.log("Protected:", objCrator._name);

//Private (#private), protected (_protected), public (public)
// interface Animal {
//   speak(): string;
//   eat(food: string): string
// }

// class Dog implements Animal {
//   speak(){
//       return "Woof!";
//   }

//   eat(food: string){
//       return "";
//   }
// }

// const dog = new Dog();
// console.log(dog.speak()); // Вывод: Woof!
// console.log(dog.eat("bone")); // Вывод: Dog is eating bone

//Generics
// Обобщенная функция, которая возвращает первый элемент массива
// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// const stringArray: string[] = ["apple", "banana", "cherry"];
// const numberArray: number[] = [1, 2, 3];

// const firstString = getFirstElement(stringArray); // Тип: string | undefined
// const firstNumber = getFirstElement(numberArray); // Тип: number | undefined

// console.log(firstString); // Вывод: apple
// console.log(firstNumber); // Вывод: 1
