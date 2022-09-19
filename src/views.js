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

  //put header in table
  tHeader.appendChild(tHeaderRow);
  table.appendChild(tHeader);

  return table;
}

export {webView};