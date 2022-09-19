function webView(students) {
  // create table to display everything in
  const table = document.createElement('table');
  const tHeader = document.createElement('th');
  const tHeaderRow = document.createElement('tr');
  
  //put names of students in table header
  for (let student in students) {
    const tdata = document.createElement('td');
    tdata.textContent = students[student].name;
    tHeaderRow.appendChild(tdata);   
  }

  // put state of tasks in table rows:
  //  - create a table body
  //  - for every tasks in students[0].getTasks();^
  //    - create a table row
  //    - for every student
  //      - get value of current task for this student
  //      - add table data element with textContent for the value of the task for this student
  //    - append this row to the table body
  //  - append table body to table

  const tBody = document.createElement('tbody');
  for (let task in students[0].getTasks) {
    let row = document.createElement('tr');
    for (let student in students) {
      let value = students[student].getTasks[task];
      let cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    }
    tBody.appendChild(row);
  }

  //put header in table
  tHeader.appendChild(tHeaderRow);
  table.appendChild(tHeader);
  table.appendChild(tBody);

  return table;
}

export {webView};