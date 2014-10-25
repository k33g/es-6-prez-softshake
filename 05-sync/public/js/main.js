import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';
import HumansList from 'js/app/views/HumansList';
import HumanForm from 'js/app/views/HumanForm';
import $q from 'js/skeleton/selector';

import Request from 'js/skeleton/Request';

/* exmples d'utilisation de Request */

let request = new Request("/about").get()
  .then((data) => {
    console.log("data", data)
  })
  .catch((error) => {})

/*--- create models ---*/

let Olivia = new Human({firstName:"Olivia", lastName:"Dunham"});

Olivia.save().then((data)=>{
  console.log(1, "Olivia", data);
});

let Walter = new Human({firstName:"Walter", lastName:"Bishop"});
Walter.save().then((data)=>{
  console.log(2, "Walter", data);
});

let Peter = new Human({firstName:"Peter", lastName:"Bishop"});
Peter.save().then((data)=>{
  console.log(3, "Peter", data);
});

let Astrid = new Human({firstName:"Astrid", lastName:"Farnsworth"});
Astrid.save().then((data)=>{
  console.log(4, "Astrid", data);
});

let fringeDivision = new Humans();

let humansList = new HumansList(fringeDivision);
let humanForm = new HumanForm(fringeDivision);

fringeDivision.fetch().then((data) => {
  console.log("All humans", data)
});



