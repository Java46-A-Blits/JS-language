// const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
// const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
// console.log(`person1 == person2 is ${person1 == person2}`); //--> FALSE
// console.log(`"123" == 123 is ${'123' == 123}`);             // --> TRUE
// console.log(`'123' === 123 is ${'123' === 123}`)
// const person3 = person1;  
// console.log(`person1 == person3 is ${person1 == person3}`); // --> TRUE
// console.log(`person1 === person3 is ${person1 === person3}`);// --> TRUE
// console.log(`person1 == person2 is ${person1 == person2}`); // --> FALSE
// console.log(`person1 === person2 is ${person1 === person2}`); // --> FALSE


// /// it's used to  compare two objects as follows : 
// // to  get a string form  the object - JSON.stringify

// console.log(`JSON.stringify(person1) === JSON.stringify(person2) is  ${JSON.stringify(person1) === JSON.stringify(person2)}`) 
// //        ^
// // TRUE __|
// console.log(JSON.stringify(person1))
// console.log(person1.toString());      // [object Object]
// console.log(`name of person1 is ${person1.name}`);
// console.log(`peson1 lives in city ${person1.address.city}`)
// Object.keys(person1).forEach(k => console.log(`*${k}`)) // to get an array  of keys
// Object.values(person1).forEach(v => console.log(`^${v}`))     // to  get values of keys
// Object.entries(person1).forEach(e => console.log(e))   // to  get a 2D array of keys an values


/******************************************HW 14 definition task1 */
//write myFilter(array, callback) based on myForEach
//callback - function with three possible parameters: current element, current index, reference to array
/********************************************************************* */

/******************************************HW 14 definition task2 */
//write myReduce(array, callback, initialResult) based on myForEach
//callback - function with three possible parameters: current element, current index, reference to array
// if the user call doesn't contain a second argument, then the first elemnt of the array will be
//considered as initial result (in this case iterating begins from the second element of the array)

/**************************************HW 14 definition task3 */
// applying methods of arrays find the persons living in the given city and display them out 


/****************************************HW 14 definition task4 */
// create a function  that moves persons who don't live in the given city to the first line
// 
// Input: const persons = [ 
//         createPerson(123, "Vasya", createAddress("Rehovot","Parshani")), 
//         createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")), 
//         createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")), 
//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov')) 
// ] 
// ??????????  Output: getPersonsCity(persons, ‘Rehovot’) => [ 
//         {id: 123, name: "Vasya", address:{city: "Rehovot",street: "Parshani")), 
//         {id: 124, name: "Olya", address:{city: "Rehovot",street: "Pr. Plaut")) 
// ] 

/****************************************HW 14 definition task4 */ 
// write function movePersonsNoCityAtBeginning(persons, city) taking array of the persons and a city 
//(see the branch js-objects ) and returning new array with all persons not living in the given city 

// ***************************      additional tasks     ***********************************

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya

//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

// console.log(person1.id)
// console.log(person1['address']['city']) // identical  to -  console.log(person1.address.city)

/////////////////   -----  HW 14 SOLUTION  -----   \\\\\\\\\\\\\

// ------------     TASK  1 

function myForEach (array,  callback){
    for( let i=0; i<array.length; i++){
        callback(array[i], i, array);
    }
}
// function myFilter (array, predicateCB){
//     const res =[];
//     function forEachCB(n,i,a){
//         if (predicateCB(n,i,a)) {
//             res.push(n);
//         }    
//     }
//     myForEach(array, forEachCB);
//     return res;
// }
const ar20 = [13, 17, 20, 23, 40, 55, 11]
// const arEvenOdd = myFilter(ar20, (n,i,a) => a.length%2 == 0? n%2 == 0 : n%2 == 1)
// console.log(arEvenOdd)

// --- TASK 2

// function myReduce (array, cbReduce, initial){
//     if (initial == undefined){
//         initial = array[0];
//         array = array.slice(1);
//     }
//     // let res = initial; 
//     //         function forEachCB(n,i,a){
//     //             res = cbReduce(res,n,i,a) // dissregarded 'i' and 'a' if not used in the cb function. 
//     //         }
//     //         myForEach(array, forEachCB);
//     //  replaced with:
//          myForEach(array, (n,i,a) => res = cbReduce(res,n));
//     return res;
// }
// let res = myReduce(ar20, (res,cur) => res+cur)
// console.log(res)

// TASK --- 3 --- 
// ////  ***** Factory method to 
function createAddress(city, street){
    return{city: city, street: street} // <=> {city, street}
}
function createPerson(id, name, address){
    return {id, name, address}
}
const persons = [
    createPerson(123,'Vasya',createAddress("Rehovot","Hadar")),
    createPerson(124,'Kolya',createAddress("Rehovot","Plaut")),
    createPerson(125,'Fedya',createAddress('Rishon',"Herzl")), 
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]

function getPersonCity (persons, city){
    return persons.filter( p => p.address.city === city);
}
// console.log(getPersonCity(persons, 'Rehovot'));

/// ----- TASK 4 ----- \\\

function movePersonsNoCityAtBeginning(persons, city){
    const personsRes  = getPersonCity (persons, city);
    personsRes.unshift(...persons.filter( p => p.address.city !== city));
    return personsRes;
}
console.log(movePersonsNoCityAtBeginning(persons, "Lod"));
