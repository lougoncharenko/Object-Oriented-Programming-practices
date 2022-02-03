const factoryFunction= (name, age) => {
    const sayHello= () => console.log('hello');
    return {name, age, sayHello};
};

const louisa = factoryFunction('Louisa', 25);

console.log(louisa.name)

louisa.sayHello();
console.log(louisa.sayHello());

//scope and closure
//scope ===variable access
//conext === this


const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
  const counter = counterCreator();
  
  counter(); // 0
  counter(); // 1
  counter(); // 2
  counter(); // 3


  //closure allows us yo create private variables and functions

  const Player = (name, level) => {
      let health= level *2;
      const getLevel= () => level;
      const getName =() => name;
      const die =() => {
          console.log('Uh oh!')
      };
      const damage= x => {
          health -= x;
          if (health <= 0){
              die();
          }
      };
      const attack = enemy => {
          if (level < enemy.getLevel()) {
              damage(1);
              console.log(`${enemy.getName()} has damaged ${name}`);
          }
          if (level >= enemy.getLevel()){
              enemy.damage(1);
              console.log(`${name} has damaged ${enemy.getName()}`);
          }
      };
      return {attack, damage, getLevel, getName};
  }

  const joe =Player ('Joe', 10);
  const badguy = Player ('Tom', 6);
  joe.attack(badguy);
  badguy.attack(joe);
  //joe.die() can't access this property due to closures

  const Person = (name) => {
      const sayName = () => console.log(`My name is ${name}`);
      return {sayName};
  }

  const Nerd = (name) => {
      const {sayName} = Person (name);
      const doSomethingNerdy = () => console.log('nerd stuff');
      return {sayName, doSomethingNerdy};
  }

  const Jeff = Nerd('jeff')

  Jeff.sayName();
  Jeff.doSomethingNerdy();