var Human = function Human(name) {
  "use strict";
  this.name = name;
};
($traceurRuntime.createClass)(Human, {sayHello: function() {
    "use strict";
    console.log("Hello, I'm " + this.name);
  }}, {});
var bob = new Human("Bob Morane");
bob.sayHello();
