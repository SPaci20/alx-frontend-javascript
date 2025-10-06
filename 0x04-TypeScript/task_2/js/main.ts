// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// isDirector function - type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases
console.log(createEmployee(200));
// Should output: Teacher

console.log(createEmployee(1000));
// Should output: Director

console.log(createEmployee('$500'));
// Should output: Director

// Test executeWork function
console.log(executeWork(createEmployee(200)));
// Should output: Getting to work

console.log(executeWork(createEmployee(1000)));
// Should output: Getting to director tasks

// Additional test to verify methods work
const employee1 = createEmployee(200);
if (isDirector(employee1)) {
  console.log(employee1.workDirectorTasks());
} else {
  console.log(employee1.workTeacherTasks()); // Should output: Getting to work
}

const employee2 = createEmployee(1000);
if (isDirector(employee2)) {
  console.log(employee2.workDirectorTasks()); // Should output: Getting to director tasks
} else {
  console.log(employee2.workTeacherTasks());
}