import { Person, Student} from './tools.js'
//console.log(multiplier(2,3,4,5,6,7,8,9))
let person1 = new Person("Bolu", "Porter", "M")
let student1 = new Student(1, "math", "Teni", "Oluwo", "NA")
console.log(`Object Nggerals- ${person1.firstName} is not ${student1.firstName}. ${person1.firstName} is just a ${person1.classnm}, ${student1.firstName} is a ${student1.classnm}`)