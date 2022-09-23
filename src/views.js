import { Student } from './models.js';

function webView(students) {

  // create table with header row to display everything in
  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const tHeaderRow = document.createElement('tr');
  tHead.appendChild(tHeaderRow);
  table.appendChild(tHead);
  
  //put names of students in table header
  for (let student in students) {
    const tHeaderCell = document.createElement('th');
    tHeaderCell.textContent = students[student].name;
    tHeaderRow.appendChild(tHeaderCell);
  }
  
  // put content of each students tasks in table
  const tBody = document.createElement('tbody');
  drawTable();

  
  // watch for clicks in table
  table.addEventListener('click', (e) => {
    let target = e.target.closest('td');
    let student = Number(target.dataset.student);
    let task = Number(target.dataset.task);
    students[student].nextTaskValue(task);
    // redraw the (updated) table
    removeTable();
    drawTable();
  });

  function removeTable () {
    // remove tbody element
    const tBody = document.querySelector('tbody');
    while (tBody.children[0]) {
      tBody.removeChild(tBody.children[0]);
    }
  }

  function drawTable () {
    for (let i = 1; i <= 10; i++){
      let row = document.createElement('tr');
      for (let j = 0; j < students.length; j++) {
        let value = students[j].tasks[i];
        let cell = document.createElement('td');
        cell.textContent = value;
        cell.setAttribute("data-student", j);
        cell.setAttribute('data-task', i);
        row.appendChild(cell);
      }
      tBody.appendChild(row);
    }
  }
  
  table.appendChild(tBody);
  return table;
}

export {webView};