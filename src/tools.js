var logger = function(output){
    console.log(output)
    }

export var dummFunctions = () =>{
    return "isnd"
}
const multiplier = (...numbers) => {
    let product = 1
    for(let number of numbers){
        product = product * number;
    }
    return `the product is ${product}`
}
export default multiplier
export const Person = class {
    constructor(firstName, lastName, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.classnm = "Person"    
    }
    getFirstName(){
        return toTitleCase(this.firstName)
        } 
    getLastName(){
        return toTitleCase(this.lastName)
    }
   }
export class Student extends Person{
    constructor(matricnumber, course, firstName, lastName, gender){
        super(firstName, lastName, gender);
            this.matricnumber = matricnumber;
            this.course = course;
            this.classnm = "Student"
    }
}
