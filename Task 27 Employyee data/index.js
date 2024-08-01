class Employee {
    constructor(name, email, age, department, position, salary) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.department = department;
      this.position = position;
      this.salary = salary;
    }
  
    introduce() {
      console.log(`Hello, I am ${this.name}, ${this.position}.`);
    }
  
    displaySalary() {
      console.log(`Salary: $${this.salary}`);
    }
  }
  

  const newEmployee = new Employee("Sam", "sam@example.com", 28, "Development", "Software Developer", 5000);
console.log(newEmployee);

const manager = new Employee("Alice", "alice@example.com", 35, "Management", "Project Manager", 8000);
console.log(manager);

newEmployee.introduce();       // Logs: Hello, I am Sam, Software Developer.
newEmployee.displaySalary();   // Logs: Salary: $5000.

manager.introduce();           // Logs: Hello, I am Alice, Project Manager.
manager.displaySalary();       // Logs: Salary: $8000.

