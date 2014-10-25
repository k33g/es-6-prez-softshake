import Human from 'js/app/models/Human';

console.log("ES6 - Les Modèles");

let john = new Human();

console.log(john);

let bob = new Human({
  firstName:"Bob", 
  lastName:"Morane"
});

console.log(bob);

let jane = new Human();

jane.set("firstName", "Jane").set("lastName", "Doe");

console.log(jane);


/*=== observers ===*/
console.log("----- observer -----");

let olivia = new Human({
  firstName:"Olivia", 
  lastName:"Dunham"
})

/* September is an Observer */
let september = {
  update: (context) => {
    console.log("September", context);
  }
};

/* December is an Observer */
let december = {
  update: (context) => {
    console.log("December", context);
  }
};


olivia.addObserver(september);
olivia.addObserver(december);

console.log("Olivia", olivia);

olivia.notifyObservers({message:"hello", from:"Olivia"})

