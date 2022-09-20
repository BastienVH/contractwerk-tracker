import { Student } from './models.js';
import { webView } from './views.js';

const body = document.querySelector('body');

// Create a small list of students
const studentNames = ['Franske', 'Joske', 'Marietteje'];
const students = [];

for (const index in studentNames) {
  students[index] = new Student(studentNames[index]);
}

// create default tasks object and add it to all students
const defaultTasks = {}

for (let i = 1; i <= 10; i++) {
  defaultTasks[i] = 'verbeteren';
}

for (const student in students) {
  students[student].tasks = {};
  students[student].tasks = defaultTasks;
}

// put web interface on screen
body.appendChild(webView(students));