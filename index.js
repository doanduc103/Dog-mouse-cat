var Dog = require('./Dog.js');
var Cat = require('./Cat.js')

var scooby = new Dog('Tom');
scooby.sayHi();

var tom = new Cat('Tom');
scooby.eat(tom);
console.log(scooby);