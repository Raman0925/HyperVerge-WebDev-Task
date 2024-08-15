const expenses = [
    {
      id: 1,
      name: 'Groceries',
      amount: 150.75,
      date: '2024-08-01',
      category: 'Food'
    },
    {
      id: 2,
      name: 'Electricity Bill',
      amount: 95.20,
      date: '2024-08-05',
      category: 'Utilities'
    },
    {
      id: 3,
      name: 'Internet Subscription',
      amount: 60.00,
      date: '2024-08-10',
      category: 'Utilities'
    },
    {
      id: 4,
      name: 'Gym Membership',
      amount: 45.00,
      date: '2024-08-15',
      category: 'Health'
    },
    {
      id: 5,
      name: 'Restaurant Dinner',
      amount: 78.50,
      date: '2024-08-18',
      category: 'Food'
    }]
    
class Expense {
    constructor(id,name,amount,date,category){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.category = category;
    }
    

}
 function displayExpenses(){
    expenses.forEach(element => {
       console.log(`${expense.name} - $${expense.amount.toFixed(2)}`);
        
    });
 }
 function addExpense(id , name ,amount , date,category){
    const expense = new Expense(id,name,amount,date,category);
    expenses.push(expense);
  console.log(`${name} has been added to the Expense.`);

}

 const updateExpense = (id,amount) => {
   const element = expenses.find((p) => { p.id ===id})
   if (element) {
         element.amount = amount;
    console.log(`element of ${element.name} updated to ${amount}.`);
} else {
    console.log(`Expense with id ${id} not found.`);
}


}

 function removeExpense(id){
    expenses = expenses.filter((p) => {p.id !== id})
   console.log(`${id}Element Removed`)

}