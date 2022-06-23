// const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
// const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
// console.log(`person1 == person2 is ${person1 == person2}`); //--> FALSE
// console.log(`"123" == 123 is ${'123' == 123}`);             // --> TRUE
// console.log(`'123' === 123 is ${'123' === 123}`)
// const person3 = person1;  
// console.log(`person1 == person3 is ${person1 == person3}`);   // --> TRUE
// console.log(`person1 === person3 is ${person1 === person3}`); // --> TRUE
// console.log(`person1 == person2 is ${person1 == person2}`);   // --> FALSE
// console.log(`person1 === person2 is ${person1 === person2}`); // --> FALSE


// // it's used to  compare two objects as follows : 
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
// create a function  that moves persons who don't live in the given city to the last line
// 
// Input: const persons = [ 
//         createPerson(123, "Vasya", createAddress("Rehovot","Parshani")), 
//         createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")), 
//         createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")), 
//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov')) 
//
// the  function movePersonsNoCityAtBeginning(persons, city) taking array of the persons and a city 
//(see the branch js-objects ) and returning new array with all persons not living in the given city
// at the end 


// console.log(person1.id)
// console.log(person1['address']['city']) // identical  to -  console.log(person1.address.city)

/////////////////   -----  HW 14 SOLUTION  -----   \\\\\\\\\\\\\

//////////////////////////////////////      -----   TASK  1   -----    \\\\\\\\\\\\\\\\\\\\\\\\\\

// function myForEach (array,  callback){
//     for( let i=0; i<array.length; i++){
//         callback(array[i], i, array);
//     }
//  }
// function myFilter (array, predicateCB){
//     const res =[];
// //     function forEachCB(n,i,a){
// //         if (predicateCB(n,i,a)) {
// //             res.push(n);
// //         }    
// //     }
//     myForEach(array, (n,i,a)=> predicateCB(n,i,a) && res.push(n));
//     return res;
// }
// const ar20 = [13, 17, 20, 23, 40, 55, 11]
// const arEvenOdd = myFilter(ar20, (n,i,a) => a.length%2 == 0? n%2 == 0 : n%2 == 1)
// console.log(arEvenOdd)

///////////////////////////////////////// --- TASK 2 --- \\\\\\\\\\\\\\\\\\\\\\\\\\
// function myForEach (array,  callback){
//     for( let i=0; i<array.length; i++){
//         callback(array[i], i, array);
//     }
//  }
// function myReduce (array, cbReduce){
//     let initial = array[0];
//         array = array.slice(1);
    
//     let res = initial; 
//     //    function forEachCB(n,i,a){
//     //          res = cbReduce(res,n,i,a) // dissregarded 'i' and 'a' if not used in the cb function. 
//     //          }
//     //    myForEach(array, forEachCB);
//     //  replaced with:
//          myForEach(array, (n,i,a) => res = cbReduce(res,n)); // as 'i' and 'a' not used they can be removed from (n,i,a)
//     return res;
// }
// const ar20 = [13, 17, 20, 23, 40, 55, 11]
// let res = myReduce(ar20, (res,cur) => res+cur) /// <<---------------
// console.log(res)

///////////////////////////// TASK --- 3 ---  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ////  ***** Factory method to 
function createAddress(city, street){
    return{city: city, street: street} // <=> the same as {city, street}
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

function getPersonOfCity (persons, city){
    return persons.filter( (p)=> p.address.city === city);// the same as- return persons.filter( function cb(p) {return p.address.city === city});
}
// console.log(getPersonOfCity(persons, 'Rehovot'));

// /// ----- TASK 4 ----- \\\

// function movePersonsNoCityAtBeginning  (persons, city){
//     const personsRes  = getPersonOfCity (persons, city);
//     personsRes.unshift(...persons.filter( p => p.address.city !== city));
//     return personsRes;
// }
// console.log(movePersonsNoCityAtBeginning(persons, "Rehovot"));

// ***************************      additional tasks     ***********************************

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Kolya

// let per = persons.filter(p=> p.address.city === "Rehovot").reduce((rv, p) => rv.id>p.id ? rv: p, {}).name
// console.log(per);
// where rv - return value start @ the empty object, then 1'st person etc.

//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

// let peoplePerCity = persons.map( n => n.address.city).reduce
// ( (newarr,city,) => (newarr[city] = (newarr[city]||0) + 1, newarr ),{}); // ????? what ',newarr' inside a function does?.. is it only for arrays?<<<<
// // ANS: an operator ',' (in arrow function) will  return the value after it,  i.e 'newarr'.... ex 2+2, 888 will  return 888
// //can be replaced with : '( (newarr,city,) => {newarr[city] = (newarr[city]||0) + 1; return newarr},{})'
// console.log(peoplePerCity)


/// **************************-----   cw15     -----***************************** \\\

// //obj = {a: 123, d: "abc"} ; const a = "d" ; obj.a = 123; obj[a] === "abc"
// obj={a:213, d:"abc"}
// const a = 'd' ;
// obj.a = 123;         // refers to the 'a' inside the object.
// console.log(obj) // ->  { a: 123, d: 'abc' }
// obj.d = "abcd"
// console.log(obj) // -> { a: 123, d: 'abcd' }
// console.log(obj[a]) // -> "abcd" - ('a' created out of the object)
// // obj.c = 10 wil  create field c -> {a: 123, d: "abc", c:10}

// ex: Input : ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
// output :  lmn -> 3
//           a -> 2 
//           d -> 2
//           bc-> 1

// function displayOccurences(array){
// const res = {};
// for (let i = 0; i < array.length; i++){
//     if (res[array[i]] === undefined){
//         res[array[i]] = 1;
//     }
//     else{
//         res[array[i]] = res[array[i]]+1;
//     }
// }
//  console.log(res);  // intermediate check 
// Object.entries(res).sort((e1, e2) =>{ 
//     const comp = (e2[1]-e1[1]);  // -> descendinng order of numbers
//     return comp !== 0 ? comp : e1[0].localeCompare(e2[0]) ; // optional (TBD)- if the same number of occuranses exist then sort letters in acc. order
//     }).forEach( e => console.log(`${e[0]} -->> ${e[1]}`))
// }

// const arr = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
// displayOccurences(arr)



////////////////////////   - HW15 TASK1 - \\\\\\\\\\\\\\\\\\\
//refactor displayOccurances function,  lines 92-99 shoud be separated function implementing methods as reduce. 


////////////////////////   - HW15  TASK2 - \\\\\\\\\\\\\\\\\\\


// make function countBy(array, callback) that return  object with keys
//as grouping criteria  and values as the occurrence counts
//where array - any array, callbackFun - function returning grouping criteria
//examples:
// const arr = [6.4, 7.3, 6.5, 6.9];
//const statistics = countBy(arr, element => Math.floor(element))
//result: statistics -> {"6": 3, "7":1}
// const arr = ['abcd', 'lmnr', 'ab', 'dddd'];
//const statistics = countBy(arr, element => element.length)
//result: statistics -> {"4": 3, "2":1}
//const arr = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
// {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}  ]
//const statistics = countBy(arr, element -> element.age)
//result statistics -> {"25":2, "50":1, "70":1}



// function getStatObject(arr){
//          return arr.reduce((res,cur) => {res[cur] = res[cur]===undefined? 1: res[cur]+1;
//                                       return res},{})
// }
// function countBy(array, callbackFn){
//     array = array.map(callbackFn);
//     return getStatObject(array)
// }
 
// let arr1 = [6.4, 5.6, 5.9, 7.15, 7.2]
// let res = countBy(arr1, element => Math.floor(element));
// console.log(res);

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
// ------------------------------------

function groupBy(array, keyExtractor, groupInitializer, groupReducer){
    return array.reduce(
        (rv, n)=> {
            let key = keyExtractor(n);
            rv[key] = groupReducer(rv[key]||groupInitializer(), n);
            //instead of: 
            // if (rv[key] === undefined) {
            //     rv[key] = groupIntializer();
            // } 
            // rv[key]=groupReducer(rv[key], n);
            return rv
        },{}
    )
}

let r = groupBy(persons, p=>p.address.city, () => 0, (rv, p) => ++rv);
console.log(r)
r = groupBy(persons, p=>p.address.city, ()=> [], (rv, p)=> (rv.push(p.name), rv) )
console.log(r)

