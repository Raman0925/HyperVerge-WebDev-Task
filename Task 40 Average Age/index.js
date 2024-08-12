// Define an array called people
const people = [
    { name: 'Raman', age: 25 },
    { name: 'Sonam', age: 30 },
    { name: 'Siya', age: 35 },
    { name: 'Riya', age: 40 }
  ];
  
  
  function calculateAverageAge(people) {
    let totalAge = 0;
  
    people.forEach(person => {
      totalAge += person.age;
    });
  
    const averageAge = totalAge / people.length;
  
    return averageAge;
  }
  
  const averageAge = calculateAverageAge(people);
  
  console.log(`The average age is ${averageAge}`);
  