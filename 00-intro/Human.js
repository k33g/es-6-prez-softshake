class Human {
  constructor (name) {
    this.name = name;
  }
  sayHello () {
    console.log("Hello, I'm " + this.name)
  }
}

var bob = new Human("Bob Morane")

bob.sayHello();

//traceur --out out/Human.js --script Human.js