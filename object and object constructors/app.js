const budget={
    Rent: 900,
    Groceries: 400,
    Gas: 400,
    Phone: 60,
}

//dot notation
console.log(budget.Rent);

const rent= budget.Rent
console.log(rent)


function Budget(rent, groceries, gas, bills){
    this.rent=rent,
    this.groceries=groceries,
    this.gas=gas,
    this.bills=bills
}


const februaryBudget= new Budget(900,200,300,230)
console.log(februaryBudget);

Budget.prototype.addExpenses=function(){
  return Number(this.rent + this.groceries + this.gas + this.bills)
}

console.log(februaryBudget.addExpenses());

Budget.prototype.reminder=function(){
    console.log('Stop spending so much money!!!')
}

februaryBudget.reminder();

februaryBudget.valentinesDay=700;

console.log(februaryBudget);


