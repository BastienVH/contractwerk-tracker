import { Student } from './models.js';
import { webView } from './views.js';

const body = document.querySelector('body');

// Create a small list of students
const studentNames = ['Franske', 'Joske', 'Marietteje'];
const students = [];

for (const index in studentNames) {
  students[index] = new Student(studentNames[index]);
}

body.appendChild(webView(students));