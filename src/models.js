class Student {
  constructor(name) {
    this.name = name;
  }
  
  taskValues = ['niet klaar', 'verbeteren', 'klaar'];

  nextTaskValue(task) {
    // get current value of task
    let currentValue = this.tasks[task];
    // find index of current value in taskValues
    let currentValueIndex = this.taskValues.indexOf(currentValue);
    // put value of next value in task list at index task
    let nextIndex = ++currentValueIndex;
    if (nextIndex == 3) {
      nextIndex = 0;
    }
    // set value task to value of taskslist at nextindex
    this.tasks[task] = this.taskValues[nextIndex];
  }
}

export { Student };