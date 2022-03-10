/////////////// ----- CW17 ------ \\\\\\\\\\\\\\\\
class Person{
    #id;
    #name;
    constructor( id,name){
        this.#id = id
        this.#name = name
    }
    getId(){
        return this.#id
    }
    getName(){
        return this.#name
    }
    toString(){
        return `id:${this.#id} ; name:${this.#name} ;`
    }
}  
const person = new Person (123, 'Mosh')
console.log(`person is ${person}`) 

class Employee extends Person{
    #salary; 
    constructor(id,name,salary){
    super(id, name) // call the constructor of the class Person
    this.#salary = salary
    }
    computeSalary(){
        return this.#salary
    }
    toString(){
        return super.toString() + ` salary: ${this.computeSalary()}`// optimized from: 
        // return super.toString() + ` salary: ${this.#salary}` - it will use toString method of "Emloyee" with 
        //computeSalary of "WageEmployee" class if exists (code optimization)
    }
}
const person2 = new Employee(124, "Sara", 5000 )
console.log(`person2 is: ${person2}`)
console.log(typeof(person2))  // --> object
console.log(person2.constructor.name) // --> Employee

class Child extends Person{
    #kindergarten
    constructor (id,name, kindergarten){
        super(id, name);
        this.#kindergarten = kindergarten;
    }
    getKindergarten(){
        return this.#kindergarten;
    }
    toString(){
        return `${super.toString()} kindergarten: ${this.#kindergarten}`
    }
}
const person3 = new Child(125, "Yakob", "Shalom")
console.log(`iperson3 is: ${person3}`)

class WageEmployee extends Employee{
    #hours
    #wage
    constructor(id,name,salary,hours,wage){
        super(id,name,salary)
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary(){
        return super.computeSalary()+this.#hours*this.#wage
    }
}
const person4 = new WageEmployee(128, 'Asaf',2000, 80, 100);
console.log(`person4 is: ${person4}`)

/************************ ----- HW 17 ----- *********************/

const persons = [
    new Child(100,'Olya','Shalom'),
    new Child(101,'Sergey','Boker'),
    new Child(102,'Kolya','Shalom'),
    new Employee(103,'vasya',1000),
    new WageEmployee(104,'Tolya',1000,10,100)
]
//countOfPersonTypea(persons,type)-returns count of persons of each type,
//ex: countOfPersonType(persons,'WageEmployee') --> 1

function countOfPersonType(persons,type){
}
//computeSalaryBudget(persons)-returns total salary of all employee objects in the given array
// ex: computeSalaryBudget(persons) --> 1000+1000+10*100 = 3000
function computeSalaryBudget(persons){

}
//countChildrenKindergarten(persons,kindergarten) - returns number of kids in given kindergarden
//ex: countChildrenKindergarten(persons,'Shalom') -->2
function countChildrenKindergarten(persons, kindergarten){
    
}