//the class synthax
class myClass{
   //classmethods
constructor(){

} 
method1(){}
method2(){}
method3(){}
}

//example
class User{
    constructor(name){
        this.name=name;
    }

    sayHi(){
        console.log(this.name)
    }
}

let user= new User('John')
user.sayHi();

console.log(typeof User) //function

//rewriting class user in pure functions
function User1(name){
    this.name=name;
}
User1.prototype.greeting=function(){
    console.log(`Hello! I am ${this.name}`);
}


let user1= new User1('Cory');
user1.greeting();


//class declarations
class Rectangle{
    constructor(height, width){
        this.height=height;
        this.width=width;
    }

    //getter
    get area(){
        return this.calcArea();
    }

    //method
    calcArea(){
        return this.height * this.width;
    }
};

const square= new Rectangle(10,10)
console.log(square.area);

//generator methods
class Polygon{
    constructor(...sides){
        this.sides=sides;
    }
    //method
    *getSides(){
        for(const side of this.sides){
            yield side;
        }
    }
}

const pentagon =new Polygon(1,2,3,4,5);
console.log(([...pentagon.getSides()]));


//static methods and properties

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static displayName= "Point";
    static distance(a,b){
        const dx=a.x-b.x;
        const dy= a.y-b.y;

        return Math.hypot(dx, dy);
    }
}

const p1= new Point(5,5);
const p2= new Point(10,10)
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined
console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755


// Binding this with prototype and static methods
class Animal{
    speak(){
        return this;
    }
    static eat(){
        return this;
    }
}

let obj= new Animal();
obj.speak(); // the Animal object
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined

//Instance properties
//Instance properties must be defined inside of class methods:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//public field declarations
class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  //privage field declaration
  class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }