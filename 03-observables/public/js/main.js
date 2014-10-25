import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';

console.log("ES6 - Observables");

console.log("----- observer: Model -----");


let olivia = new Human({firstName:"Olivia", lastName:"Dunham"})

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

olivia.notifyObservers({message:"hello", from:"Olivia"})


console.log("----- observer: Collection -----");

// initialize collection
let fringeDivision = new Humans([
  new Human({firstName:"Olivia", lastName:"Dunham"}),
  new Human({firstName:"Walter", lastName:"Bishop"}),
  new Human({firstName:"Peter", lastName:"Bishop"})
]);

/* WindMark is an Observer */
let windMark = {
  update: (context) => {
    console.log("WindMark", context);
  }
};

fringeDivision.addObserver(windMark);

fringeDivision.add(new Human({firstName:"Astrid", lastName:"Farnsworth"}));


