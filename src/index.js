import { Student } from './models.js';
import { webView } from './views.js';
import './styles.css';

const body = document.querySelector('body');

// Create a small list of students
const studentNames = ['Franske', 'Joske', 'Marietteje', 'Dingske', 'Joske', 'Marietteje', 'Dingske', 'Joske', 'Marietteje', 'Dingske', 'Joske', 'Marietteje', 'Dingske', 'Joske', 'Marietteje', 'Dingske', 'Joske', 'Marietteje', 'Dingske', 'Joske', 'Marietteje', 'Dingske'];
const students = [];

for (const index in studentNames) {
  students[index] = new Student(studentNames[index]);
}

// create default tasks object and add it to all students
const defaultTasks = {}
const taskValues = ['niet klaar', 'verbeteren', 'klaar'];

for (let i = 1; i <= 10; i++) {
  defaultTasks[i] = taskValues[0];
}

for (const student in students) {
  students[student].tasks = {};
  students[student].tasks = Object.assign({}, defaultTasks);
}

function nextTaskValue(student, task) {
  const value = students[student].tasks[task];
  const currentIndex = taskValues.indexOf(value);
  let nextIndex;

  if (currentIndex == 2) {
    nextIndex = 0;
  } else {
    nextIndex = currentIndex++;
  }
  // update the students task
  students[student].tasks[task] = taskValues[nextIndex];
}

// put web interface on screen
body.appendChild(webView(students));
console.log(students);