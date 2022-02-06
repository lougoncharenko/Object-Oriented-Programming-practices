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

