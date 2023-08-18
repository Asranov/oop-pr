//ООП Класс

// Определение класса "Person"
class Person {
  // Конструктор класса
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Метод класса
  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

// Создание объекта на основе класса "Person"
const person1 = new Person("Анна", 25);

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
