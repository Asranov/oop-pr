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
