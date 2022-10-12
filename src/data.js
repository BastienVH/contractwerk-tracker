import { setClass } from './views';
import { students, table1 } from './index.js';

class data {
  // stores the tasks array for each student object in students array
  storeStudents() {
    // loop over students array
    // for each student in students array
    for (const student in students) {
      // create a data entry for student name
      const currentStudent = students[student];
      localStorage.setItem(
        currentStudent.name,
        JSON.stringify(currentStudent.tasks)
      );
    }
  }

  restoreStudents() {
    // loop over all studentnames in localstorage
    for (let i = 0; i < localStorage.length; i++) {
      const studentName = localStorage.key(i);
      // find student with that name
      const currentStudent = students.find(
        (element) => studentName == element.name
      );
      // parse value at student name back to array and store that in students where name is the same as name that was retrieved as key
      currentStudent.tasks = JSON.parse(localStorage.getItem(studentName));
      // redraw the table
    }
    table1.refreshTable();
  }
}

export { data };
