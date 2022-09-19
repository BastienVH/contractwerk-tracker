class Student {
  constructor(name) {
    this.name = name;
  }
  
  #tasks = {
    task1: 'waiting',
    task2: 'waiting',
    task3: 'waiting',
    task4: 'waiting',
    task5: 'waiting',
    task6: 'waiting',
    task7: 'waiting',
    task8: 'waiting',
    task9: 'waiting',
    task10: 'waiting',
  }

  get getTasks() {
    return this.#tasks;
  }
}

export { Student };