"use strict";
/** Classes
 *
 */
class Zoo {
    constructor(a, e, c) {
        this.animal = a;
        this.enviorment = e;
        this.count = c;
    }
    format() {
        return `Animal: ${this.animal} live in ${this.enviorment}. Amount in the zoo: ${this.count}`;
    }
}
const animalOne = new Zoo('Giraffe', 'land', 5);
const animalTwo = new Zoo('Fish', 'sea', 42);
const allAnimals = [];
allAnimals.push(animalOne);
allAnimals.push(animalTwo);
console.log(allAnimals);
