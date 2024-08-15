// Define the array of tasks
const tasks = [
    {
      id: 1,
      description: 'Complete homework',
      dueDate: '2024-08-15', // Use ISO 8601 format for dates
      status: 'Pending' // Could also be 'Completed', 'In Progress', etc.
    },
    {
      id: 2,
      description: 'Buy groceries',
      dueDate: '2024-08-10',
      status: 'Completed'
    },
    {
      id: 3,
      description: 'Book dentist appointment',
      dueDate: '2024-08-12',
      status: 'In Progress'
    },
    {
      id: 4,
      description: 'Finish reading novel',
      dueDate: '2024-08-20',
      status: 'Pending'
    },
    {
      id: 5,
      description: 'Prepare presentation for work',
      dueDate: '2024-08-18',
      status: 'Pending'
    },
    {
      id: 6,
      description: 'Call the bank regarding account issues',
      dueDate: '2024-08-14',
      status: 'Completed'
    }
  ];
  
  class Task {
    constructor(id, description, dueDate, status) {
      this.id = id;
      this.description = description;
      this.dueDate = new Date(dueDate); // Convert to Date object
      this.status = status;
    }
  }
  const displayTasks = () => {
    tasks.forEach(task => 
      console.log(`${task.description} - ${task.dueDate.toDateString()} (${task.status})`)
    );
  }
  const addTask = (id, description, dueDate, status) => {
    const newTask = new Task(id, description, dueDate, status);
    tasks.push(newTask);
    console.log(`Task with id ${id} has been added.`);
  }
  const updateTask = (id, newStatus) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.status = newStatus;
      console.log(`Task with id ${id} has been updated.`);
    } else {
      console.log(`Task with id ${id} not found.`);
    }
  }
  const updateTaskWithMap = (id, newStatus) => {
    tasks = tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    );
    console.log(`Task with id ${id} has been updated using map.`);
  }
  const removeTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with id ${id} has been removed.`);
  }
  
  
  
  
  
  