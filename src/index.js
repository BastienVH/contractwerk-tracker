import { Student } from './models.js';

// Create a small list of students
const studentNames = ['Franske', 'Joske', 'Marietteje'];
const students = [];

for (const index in studentNames) {
  students[index] = new Student(studentNames[index]);
}
