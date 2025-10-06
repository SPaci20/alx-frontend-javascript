// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Director interface that extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// printTeacher function implementation - FIXED RETURN
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example from previous task
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example for Director interface
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Should output: J. Doe