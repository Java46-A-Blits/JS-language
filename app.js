// /////////////// ----- CW17 ------ \\\\\\\\\\\\\\\\
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
console.log(`person3 is: ${person3}`)

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
//countOfPersonType(persons,type)-returns count of persons of given type,
//ex: countOfPersonType(persons,'WageEmployee') --> 1

function countOfPersonType(persons, type) {
    //return count of persons of the given type
    //Example:
    //countOfPersonType(persons, 'WageEmployee') ---> 1
    return getPersonsType(persons, type).length;
}

function getPersonsType(persons, type) {
    return persons.filter(p => p.constructor.name === type)
}
// computeSalaryBudget(persons)-returns total salary of all employee objects in the given array
// ex: computeSalaryBudget(persons) --> 1000+1000+10*100 = 3000
function computeSalaryBudget(persons){
    const allEmployees = persons.filter(n => !!n.computeSalary)
    const salaryValues = allEmployees.map(n => n.computeSalary())
    return salaryValues.reduce((res,n) => res+n,0)    
}
//countChildrenKindergarten(persons,kindergarten) - returns number of kids in given kindergarden
//ex: countChildrenKindergarten(persons,'Shalom') -->2
function countChildrenKindergarten(persons, kindergarten){
    const allChildren = getPersonsType(persons, "Child")
    return allChildren.reduce((count,n)=> n.getKindergarten() === kindergarten ? ++count: count,0)
}
const type = "WageEmployee";
const kindergarten = "Shalom";
let expected = 1;
console.log(`countOfPersonType for type ${type} expected ${expected} actual result is ${countOfPersonType(persons, type)}`);
expected = 3000;
console.log(`computeBudget  expected ${expected} actual result is ${computeSalaryBudget(persons)}`);
expected = 2;
console.log(`countChildrenKindergarten for kindergarten ${kindergarten} expected ${expected} actual result is ${countChildrenKindergarten(persons, kindergarten)}`);
function testOutput(fun, expected) {
console.log(`function: ${fun.name} ; expected result: ${expected} ; actual result: ${fun()} `)
}
testOutput(WageEmployee.prototype.computeSalary.bind(person4), 10000 )
testOutput(computeSalaryBudget.bind(undefined,persons), 3000)
testOutput(countOfPersonType.bind(undefined,persons,'Child'), 3)



/////////-----     HW15-ADDTIONAL     -----\\\\\\\\\\
// -------------------------------
// Write a functinon groupBy(array, .......), which has 
// some callback parameters and performs the following actions   
// 1) breaks the array elements into groups by specified criteria
// 2) for each group performs specified reduction operation
// The same function would be able to show the following information 
// when called with different callback parameters:
// Example 1: { Rehovot: 2, 'Tel-Aviv': 1, Lod: 1 }
// Example 2: { 
//    Rehovot: [ 'Vasya', 'Olya' ],
//    'Tel-Aviv': [ 'Tolya' ],
//    Lod: [ 'Sara' ]
// }
//
// Your tasks are:
// - Decide which parameters must have such function
// - Implement the function
// - Implement the calls of this function implementing results of Example 1 and Example 2

// function createAddress (city, street){
//     return{city, street}
// }
// function createPerson (id, name, address){
//     return{id, name, address}
// }
// const people = [
//     createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
//     createPerson(124, "Olya", createAddress("Rehovot", "Plaut")),
//     createPerson(125, "Tolya", createAddress("TA", "Dizengoff")),
//     createPerson(126, "Sara", createAddress("Lod", "Sokolov"))
// ]
// function groupBy(array, keyExtractor, groupInitiallizer, groupReducer){
//     return array.reduce(
//         (rv,n) => {
//             let key=keyExtractor(n);
//             if (rv[key] === undefined){
//                 rv[key] = groupInitiallizer()
//             }
//             rv[key] = groupReducer(rv[key],n)
//             return rv
//         },{}
//     )
// }
// let r = groupBy(people, p=>p.address.city, ()=>0, (rv,p)=>++rv)
// console.log(r)
// r=groupBy(people, p=>p.address.city, ()=>[], (rv,p)=>(rv.push(p.name),rv))
// console.log(r)
