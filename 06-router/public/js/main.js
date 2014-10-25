import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';
import HumansList from 'js/app/views/HumansList';
import HumanForm from 'js/app/views/HumanForm';
import $q from 'js/skeleton/selector';

import Router from 'js/skeleton/Router';

let fringeDivision = new Humans();

let humansList = new HumansList(fringeDivision);
let humanForm = new HumanForm(fringeDivision);

fringeDivision.fetch();

let router = new Router();

router
  .add("toggle", (args) => {

    console.log("toggle ->", args)

    switch(args[0]) {
      case "form":
        humanForm.toggle(); // appel de toggle de la classe View
        break;
      case "list":
        humansList.toggle();
        break;
      default:
        //foo
    }
  }).add("hello", (args) => console.log(args));

router.listen()

  /*
    <ul id="menu">
      <li><a href="#/toggle/form">Toggle Form</a></li>
      <li><a href="#/toggle/list">Toggle List</a></li>
      <li><a href="#/hello/bob/morane">Hello</a></li>
    </ul>
   */



