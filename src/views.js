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
  for (let task in students[0].tasks) {
    let row = document.createElement('tr');
    for (let student in students) {
      let value = students[student].tasks[task];
      let cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    }
    tBody.appendChild(row);
  }

  table.appendChild(tBody);

  return table;
}

export {webView};