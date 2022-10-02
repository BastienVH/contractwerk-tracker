import { Student } from './models.js';
import { Table } from './views.js';
import { data } from './data.js';
import './styles.css';

const body = document.querySelector('body');

let dataStorage = new data;
let table1 = new Table;


// Create a small list of students
const studentNames = [ 'Joske', 'Marietteje', 'Dingske', 'Jadyn', 'Odin', 'Larry', 'Kianna', 'Harper', 'Roderick', 'Cecilia', 'Alexander', 'Ferre'];
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
table1.displayTable();
document.addEventListener('DOMContentLoaded', () => dataStorage.restoreStudents());

// buttons to test storing and retrieving from localStorage
let saveBtn = document.createElement('button');
saveBtn.textContent = 'SAVE';
saveBtn.addEventListener('click', () => {
  dataStorage.storeStudents();
})
body.appendChild(saveBtn);

let restoreBtn = document.createElement('button');
restoreBtn.textContent = 'RESTORE';
restoreBtn.addEventListener('click', () => {
  dataStorage.restoreStudents();
})
body.appendChild(restoreBtn);

export {dataStorage, students, table1};