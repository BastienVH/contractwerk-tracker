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

assignDefaultTasks();

// put web interface on screen
table1.displayTable();
document.addEventListener('DOMContentLoaded', () => dataStorage.restoreStudents());

// reset button
let resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.classList.add('resetBtn');
resetBtn.addEventListener('click', () => {
  assignDefaultTasks();
  dataStorage.storeStudents();
  table1.refreshTable();
})
body.appendChild(resetBtn);

function assignDefaultTasks() {
  for (const student in students) {
    if (!students[student].tasks) {
      students[student].tasks = {};
    }
    students[student].tasks = Object.assign({}, defaultTasks); 
  }
}

export {dataStorage, students, table1};