import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';
import Title from 'js/app/views/Title';
import HumansList from 'js/app/views/HumansList';
import HumanForm from 'js/app/views/HumanForm';

import $q from 'js/skeleton/selector';

//$q("#my-title").innerHTML = "<h1>Hello World!</h1>"
new Title("Hello World!!!")

let fringeDivision = new Humans([
  new Human({firstName:"Olivia", lastName:"Dunham"}),
  new Human({firstName:"Walter", lastName:"Bishop"}),
  new Human({firstName:"Astrid", lastName:"Farnsworth"}),
  new Human({firstName:"Peter", lastName:"Bishop"})
]);

let humansList = new HumansList(fringeDivision);
let humanForm = new HumanForm(fringeDivision);

fringeDivision.notifyObservers({event:"loaded"})









