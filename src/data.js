import { setClass } from './views';

class data {
  
  //function to store current data in localStorage
  store(tbody) {
    let tableFields = tbody.children;
    let amountOfColumns = tableFields[0].children.length;
    let arrayOfRows = [];
    // for every line
    for (let rowNmb = 0; rowNmb < tableFields.length; rowNmb++) {
      // create an array at the number of the line
      let row = [];
      // for every cell inside that line
      for (let columnNmb = 0; columnNmb < amountOfColumns; columnNmb++) {
        // read the value and store it in the array at the index that the loop is currently at
        row[columnNmb] = tableFields[rowNmb].children[columnNmb].textContent;
      }
      arrayOfRows[rowNmb] = row;
      // stringify that array
      let stringifiedArray = JSON.stringify(arrayOfRows);
      // store that stringified array inside localStorage
      localStorage.setItem('arrayOfData', stringifiedArray);
    }
  }
  // function to retrieve current data from localstorage
  restore(tbody) {
    //check if localStorage is present
      // if not: return
    // retrieve and parse the stored array into an array of arrays
    let dataArray = JSON.parse(localStorage.getItem('arrayOfData'));
    let tableFields = tbody.children;
    for (let rowNmb = 0; rowNmb < dataArray.length; rowNmb++) {
      for (let columnNmb = 0; columnNmb < dataArray[rowNmb].length; columnNmb++) {
        // set cell value to retrieved value
        let value = dataArray[rowNmb][columnNmb];
        let cell = tableFields[rowNmb].children[columnNmb];
        cell.textContent = value;
        setClass(tableFields[rowNmb].children[columnNmb], value);
      }
    }
  }
}

export { data };