/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the Window/Global Objecting binding, .this refers to the object of the browser window you're using, so it's the whole of the browser window in which you're working.
* 2. For Implicit Binding, when a function is called/invoked, the object preceding the .(dot) is what .this is referring to.
* 3. For New Binding, in the use of a constructor function, the .this refers to the specific instance of the newly created object by the constructor.
* 4. And for Explicit Binding, the use of all or apply on an object, the .this is explicitly defined when either method is called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
// function sayMyName(bandName){
//     console.log(this);
//     return bandName;
// }
// sayMyName("Destiny's Child");

const sayMyName = obj => {
    obj.sayMyName = function() {
        console.log(`Say my name, Say my name by ${this.name}`);
    };
};
const dc = { name: "Destiny's Child" };

sayMyName(dc);
  // Invoke Methods on our objects
dc.sayMyName();


// Principle 3

// code example for New Binding

function CatHerder(herder) {
    this.name = herder;
    this.herd = function() {
        console.log(`My name is ${this.name} and I'm the best cat herder in the world.`);
    }
}

const gunner = new CatHerder('Gunner');

gunner.herd();

// Principle 4

// code example for Explicit Binding
gunner.herd.call(dc);