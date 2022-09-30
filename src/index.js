import { Student } from './models.js';
import { webView } from './views.js';
import { data } from './data.js';
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

// put web interface on screen
body.appendChild(webView(students));
console.log(students);

let dataStorage = new data;

// buttons to test storing and retrieving from localStorage
let saveBtn = document.createElement('button');
saveBtn.textContent = 'SAVE';
saveBtn.addEventListener('click', () => {
  dataStorage.store(document.getElementById('tbody'));
})
body.appendChild(saveBtn);

let restoreBtn = document.createElement('button');
restoreBtn.textContent = 'RESTORE';
restoreBtn.addEventListener('click', () => {
  dataStorage.restore(document.getElementById('tbody'));
})
body.appendChild(restoreBtn);
