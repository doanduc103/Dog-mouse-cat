var Dog = require('./Dog.js');
var Cat = require('./Cat.js')
var Mouse = require('./mouse.js');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();
// try {
   cat.eat(mouse);
// } catch (error) {
//     console.log('Error while eating a Dog');
// }

console.log(cat);