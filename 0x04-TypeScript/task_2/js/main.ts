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

// createEmployee function - FIXED VERSION
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Test cases
console.log(createEmployee(200));
// Should output: Teacher

console.log(createEmployee(1000));
// Should output: Director

console.log(createEmployee('$500'));
// Should output: Director

// Additional test to verify methods work
const employee1 = createEmployee(200);
if ('workTeacherTasks' in employee1) {
  console.log(employee1.workFromHome()); // Should output: Cannot work from home
  console.log(employee1.getCoffeeBreak()); // Should output: Cannot have a break
  console.log(employee1.workTeacherTasks()); // Should output: Getting to work
}

const employee2 = createEmployee(1000);
if ('workDirectorTasks' in employee2) {
  console.log(employee2.workFromHome()); // Should output: Working from home
  console.log(employee2.getCoffeeBreak()); // Should output: Getting a coffee break
  console.log(employee2.workDirectorTasks()); // Should output: Getting to director tasks
}