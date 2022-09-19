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
  //  - for every tasks in students[index].getTasks();^
  //    - create a table row
  //    - for every student
  //      - get value of current task for this student
  //      - add table data element with textContent for the value of the task for this student
  //    - append this row to the table body
  //  - append table body to table

  //put header in table
  tHeader.appendChild(tHeaderRow);
  table.appendChild(tHeader);

  return table;
}

export {webView};