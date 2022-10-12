import { dataStorage, students } from './index.js';

const body = document.querySelector('body');

class Table {
  constructor(name) {
    this.name = name;
  }

  displayTable() {
    this.createEmptyTable();
    this.fillHeader();
    this.fillBody();
    this.addClickEvent();
  }

  createEmptyTable() {
    const table = document.createElement('table');
    const tHead = document.createElement('thead');
    table.appendChild(tHead);
    const tBody = document.createElement('tbody');
    tBody.id = 'tbody';
    table.append(tBody);
    body.appendChild(table);
  }

  fillHeader() {
    const tHead = document.querySelector('thead');
    const tHeaderRow = document.createElement('tr');
    tHead.appendChild(tHeaderRow);

    // Store tasks header in table header
    const tTaskHeaderCell = document.createElement('th');
    tTaskHeaderCell.textContent = 'Taak';
    tHeaderRow.appendChild(tTaskHeaderCell);

    // put names of students in table header
    for (const student in students) {
      const tHeaderCell = document.createElement('th');
      tHeaderCell.textContent = students[student].name;
      tHeaderRow.appendChild(tHeaderCell);
    }
  }

  fillBody() {
    const tBody = document.querySelector('tbody');
    for (let i = 1; i <= 10; i++) {
      const row = document.createElement('tr');
      // number each row
      const numberCell = document.createElement('td');
      numberCell.textContent = i;
      numberCell.classList.add('tasknumber');
      row.appendChild(numberCell);
      // add values of student tasks to row
      for (let j = 0; j < students.length; j++) {
        const value = students[j].tasks[i];
        const cell = document.createElement('td');
        cell.textContent = value;
        setClass(cell, value);
        cell.setAttribute('data-student', j);
        cell.setAttribute('data-task', i);
        row.appendChild(cell);
      }
      tBody.appendChild(row);
    }
  }

  refreshTable() {
    this.removeBody();
    this.fillBody();
  }

  addClickEvent() {
    const table = document.querySelector('table');
    // watch for clicks in table
    table.addEventListener('click', (e) => {
      const target = e.target.closest('td');
      const student = Number(target.dataset.student);
      const task = Number(target.dataset.task);
      students[student].nextTaskValue(task);
      // redraw the (updated) table
      this.removeBody();
      this.fillBody();
      // save the table
      dataStorage.storeStudents();
    });
  }

  removeBody() {
    // remove tbody element
    const tBody = document.querySelector('tbody');
    while (tBody.children[0]) {
      tBody.removeChild(tBody.children[0]);
    }
  }
}

function setClass(cell, value) {
  if (value == 'niet klaar') {
    cell.classList.add('not-finished');
  } else if (value == 'verbeteren') {
    cell.classList.add('to-correct');
  } else if (value == 'klaar') {
    cell.classList.add('done');
  }
}

export { Table, setClass };
