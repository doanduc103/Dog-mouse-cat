var mouse = require('./mouse.js')


function Cat() {

    this.stomach = []
}
Cat.prototype.eat = function (animal) {
    if (animal instanceof mouse) {
        this.stomach.push(animal);
    } else {
        throw new Error('Cat can only eat Mouse !!!');
    }

}
module.exports = Cat;