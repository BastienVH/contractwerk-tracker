import { student } from './models.js';

console.log('Welcome to the tracker');

let student1 = new student('Franske');
console.log(student1.name);
console.log(student1.getTasks);