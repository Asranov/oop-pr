class Alien {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }

  fly() {
    console.log("Zzzzzziiiiiinnnnnggggg!!");
  }

  sayPhrase() {
    console.log(this.phrase);
  }
}

class Bug {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
  sayPhrase = () => console.log(this.phrase);
}

class Robot {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
  sayPhrase = () => console.log(this.phrase);
}

class Enemy {
  constructor(power) {
    this.power = power;
  }

  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
  constructor(name, phrase, power) {
    super(power);
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}
