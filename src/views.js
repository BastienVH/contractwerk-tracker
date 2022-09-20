function webView(students) {
  // create table to display everything in
  const table = document.createElement('table');
  const tHeaderRow = document.createElement('tr');
  
  //put names of students in table header
  for (let student in students) {
    const tHeader = document.createElement('th');
    tHeader.textContent = students[student].name;
    tHeaderRow.appendChild(tHeader);   
  }

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
  table.appendChild(tHeaderRow);
  table.appendChild(tBody);

  return table;
}

export {webView};