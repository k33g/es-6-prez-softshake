import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';

console.log("ES6 - Les Collections");

let john = new Human();
let bob = new Human({
  firstName:"Bob",
  lastName:"Morane"
});

let humans = new Humans([john, bob]);

humans.add(new Human({ firstName: "Jane", lastName: "Doe"}));

console.log(humans);

/*=== observers ===*/

// initialize collection
let fringeDivision = new Humans([
  new Human({firstName:"Olivia", lastName:"Dunham"}),
  new Human({firstName:"Walter", lastName:"Bishop"}),
  new Human({firstName:"Peter", lastName:"Bishop"})
]);

/* September is an Observer */
console.log("----- observer -----");

let september = {
  update: (context) => {
    console.log("September", context);
  }
};

fringeDivision.addObserver(september);

fringeDivision.add(new Human({firstName:"Astrid", lastName:"Farnsworth"}));


/*=== each ===*/
console.log("----- each -----");

let team = "";

fringeDivision.each(
  (human) => team += human.get("firstName")
);

console.log("Team", team);

/*=== filter ===*/
console.log("----- filter -----");

let bishopFamily = fringeDivision.filter(
  (human) =>  human.get("lastName") == "Bishop"
);
console.log("Bishop Family", bishopFamily);

