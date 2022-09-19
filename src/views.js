function webView(students) {
  // create table to display everything in
  const table = document.createElement('table');

  for (let student in students) {
    let thead = document.createElement('th');
    thead.textContent = students[student].name;

    table.appendChild(thead);   
    //  -put value of tasks on screen
  }
  return table;
}

export {webView};