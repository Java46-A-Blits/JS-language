// const point = {
//     x:3,
//     y:4
// };
// function displayPointInSpace(z, t){
//     console.log(`x: ${this.x}, y: ${this.y}, z:${z}, t:${t}`)
// }
// // displayPointInSpace(10,20) // --> x: undefined, y: undefined, z:10, t:20
// // point.method = displayPointInSpace;
// // point.method(10,20)             // -->x: 3, y: 4, z:10, t:20
// // displayPointInSpace.call(point, 10, 20);
// // displayPointInSpace.mybind(point, 10,20)();   // must () to  call  a function and IT RETURNS A FUNCTIONAL OBJECT
// // displayPointInSpace.apply(point, [10,20]);

// Function.prototype.mybind = function(thisObj, ...args){
//     //  this - reference to  any  functional object ( as 'displayPointInSpace')
//     console.log('inside mybind')
//     // thisObj - refence to  any object (as a 'point')
//     return (...params)=>{
//         thisObj.method12345 = this;
//         const res = thisObj.method12345(...args.concat(params)); // 'params' are for the 'funDisplay' or 'funDisplayArguments' or
//                                                                  // 'funDisplayMixed' following functions
//         //thisObj.method12345(...args.concat(params)); // works even if you don't assign & return 'res'
//         delete thisObj.method12345;
//         return res; /// ???????
//     }
// }
// // //////////////////-----    ARGUMENTS PASSED AT THE FUNCTION CALL   -----\\\\\\\\\\\\\ (TYPICAL SAMPLE OF FUNCTION INSIDE THE FUNCTION )
// const funDisplay = displayPointInSpace.mybind(point)   
// funDisplay(10,20)       // -->x: 3, y: 4, z:10, t:20 (function call) :  !!! FUNCTION INSIDE THE FUNCTION

// // //////////////////-----    ARGUMENTS BOUND BY  THE METHOD 'mybind'   -----\\\\\\\\\\\\\
// const funDisplayArguments = displayPointInSpace.mybind(point, 30,40)
// funDisplayArguments()

// // //////////////////-----    MIXED -  PART OF ARGUMETS BOUND AND PART BY THE FUNCTION CALL   -----\\\\\\\\\\\\\
// const funDisplayMixed = displayPointInSpace.mybind(point,50);
// funDisplayMixed(60)

///////**********   Namaste#13 - CLOSURE FUNCTION PROBLEM --- 1 to 5 progression count with  delay (problem when let replaced by var, 
// as the loop count is much faster than 'setTimeout' completed, and when 'i' is var it will  point at the same obj. value i.e '6')
// function x(){
//     for (let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//             }, i*1000);
//     }
//  console.log('Test')
// }
// x()

////////////   closure function problem    \\\\\\\\\ ---  1 to 5 progression count with  delay (problem resolved with var
// by  wrapping ""by the "enclose" function)

// function x(){
//     for (var i=1; i<=5; i++){

//         function enclose(i){
//             setTimeout(function(){
//                   console.log(i)
//                   }, i*1000);
//         }
//         enclose(i); //  every time we call 'eclosure(i)' it will  create a new copy of 'i'
//     }   
//  console.log('Test')
// }
// x()
 
/////////////********** Namaste#14 ******** closure sample + interview question \\\\\\\\\\\\\\\\\\

// function outest(){
//     let c=20;             // let instead of var, but it will still print 'c' as 'outest' forms a closure with 'inner'
//     function outer (b){
//         let a = 10;       // let instead of var, but it will still print 'a'--> as 'outer' forms a closure with 'inner'
//         function inner() {
//             console.log(a, b, c)
//         }
//         //inner();
//         return inner;
//     }
//     return outer;
// }
// let a=100;   // won't print 100 as the closure of 'inner' has already 'a' defined, but if it wasn't it would print 100 !!!!!!!!! 
// outest()('Hello')();

    // function outer (){
    //     let a = 10;
    //     function inner() {
    //         console.log(a)
    //     }  
    //      return inner; // inner()
    // }
    // outer()() // outer()

// function counter(){
//     var count = 0;
//     function incrementCounter(){
//             count++
//             console.log(count)
//     }
//     return incrementCounter
// }
// var counter1 = counter();
// counter1(); counter1(); counter1(); counter1()
 
// var counter2 = counter(); //creates a new counter 
// counter2(); counter2()

//************************************** */

// console.log(a)  // --> undefined 
// var a;          // don't have to  declare before a code

// console.log (b); // --> ReferenceError: Cannot access 'b' before initialization - temporal dead zone 
// let b;              // have to  declare before a code  
// console.log (b);    // --> undefined    

///// --- #8 - THE SCOPE CHAIN, SCOPE & LEXICAL ENVIRONMENT     ----- \\\\\\
// will give :
// [Function: a]
// undefined
// undefined
// 10

// function a(){
//     var b=10;
//     c()
//     function c(){
//          console.log(b) // --> prints 10 

//     }
//     console.log(b) // --> prints 10
// }
// console.log(b) ; // --> undefined ? 
// a()

///// --- # 10  BLOCK SCOPE & SHADOWING  ----- \\\\\\

// let b=100  // let can be replaced with var for legal shadowind of b
// {
//      var a = 10
//      let b = 20   //  let can't be replaced with var for legal  shadowing OTHER THAN if b was enclosed within a function 
//      const c=30
//      console.log(a);
//      console.log(b);
//      console.log(c);
//  }
//  console.log(a)
//  console.log(b);
// //  console.log(c); //--> ref error - c is not defined

    
//  let d=10
//  function x() {
//      var d=100;  // LEGAL 'd' SHADOWING WITHIN  THE FUNCTION BLOCK BUT NOT JUST A BLOCK
//      console.log(d)
//     }
//   x()             //--> prints 100
//   console.log(d)  //--> prints 10

/////////////********** Namaste#15 ******** FIRST CLASS FUNCTIONS-anonymous functions  \\\\\\\\\\\\\\\\\\
// // a();
// // b();   //  --> "ReferenceError: Cannot access 'b' before initialization"
// //the difference is the hoisting, b() will throw an error "ReferenceError: Cannot access 'b' before initialization"-as for the variable
// //  FUNCTION STATEMENT  === FUNCTION DECLARATION
// function a(){
//     console.log("a called")
// }
  
// // FUNCTION EXPRESSION
// var b = function(){
//     console.log("b called")
// }
// a();
// b();
// // ANONYMOUS FUNCTIONS  --> used as a value
// // function (){   // --> SyntaxError: Function statements require a function name

// // }

// NAMED FUNCTION EXPRESSION
// var c = function xyz(){
//     console.log(xyz)
// }
// xyz() // --> ReferenceError: xyz is not defined 

// // DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS
// // FIRST CLASS FUNCTION === FIRST CLASS CITIZENS  -- > ability to  use function as an argument 
// var fun = function (param1){
//     console.log(param1)    
// }
// fun(a);
// fun(function(){})


/////////////********** Namaste#16 ******** Callback Functions in JS ft. Event Listeners   \\\\\\\\\\\\\\\\\\

// CALLBACK FUNCIONS

// setTimeout(function(){
//     console.log("timer")
// }, 5000);
// function x(y){
//     console.log("x")
//     y()
// }
// x(function y(){console.log("y")}) 

// JS AS A SYNCHRONOUS SINGLE THREATED LANGUAGE
// EVENT LISTENERS
// CLOSURE DEME WITH EVENT LISTENER
// SCOPE DEMO WITH EVENT LISTENER
// GARBAGE COLLECTOR & removeEventListeners


// let a=5
// function fun2(){
//     let a=10;
//     function fun1(){
//         var a=100
//         console.log(a)
//     }
//    console.log(a)
//    fun1()  
// }
// fun2()
// console.log(a)

/////////////********** Namaste#20 ******** HIGHER-ORDER FUNCTIONS, FUNCTIONAL PROGRAMMING   \\\\\\\\\\\\\\\\\\

// const radius = [3, 1, 2, 4];
// const area = function(radius){
//     return Math.PI*radius*radius
// }
// const circumference = function(radius){
//     return 2*Math.PI*radius
// }
// const diameter =  function (radius){
//     return 2*radius
// }

// // const calculate = function(radius, logic){
// //     const output = []
// //     for (let i = 0; i < radius.length; i++){
// //         output.push(logic(radius[i]))
// //     }
// //     return output
// // }

// //TO REPLACE 'MAP' WITH 'CALCULATE' : 

// Array.prototype.calculate = function(logic){
//     const output = []
//     for (let i = 0; i < this.length; i++){  // ths === radius as the calculate function called form 'radius' object
//         output.push(logic(this[i]))
//     }
//     return output
// }
// console.log(radius.calculate(area))

// // console.log(calculate(radius, area))
// // console.log(calculate(radius,circumference))
// // console.log(calculate(radius,diameter))

// // console.log(radius.map(area))                   // can  be replaced with map   
// // console.log(radius.map(circumference))
// // console.log(radius.map(diameter))

/////////////********** Namaste#21 ******** MAP, FILTER, REDUCE   \\\\\\\\\\\\\\\\\\

const arr = [5, 1, 3, 2, 6]
// console.log(arr.map(x => x*2))         
// console.log(arr.map(x => x.toString(2)))  // return  binary rep af an array

//---------------------- filter even/odd values
// function odd(x) {
//     return x%2
// }
// function even(x){
//     return x%2===0
// }
// var output = arr.filter((x) => x%2==1)  // any  expression which  gives true will  form another array
// console.log(output)
// var output = arr.filter(x => x%2===0)
// console.log(output)

//---------------------- reduce method
// finding the summary of an array
// var output = arr.reduce((acc, curr) => acc = acc+curr, 0)    // 0 - iniial value of acc
// console.log(output)

// // finding the max value of an array
// var  output = arr.reduce((max,curr) => curr>max ? max = curr: max ,max = arr[0])  //// ???? why this[0] and curr[0]  NG ???
// console.log(output)

// // EX: from the given array of the users   1) create an array of first+lasat name 
//                                            2) create an array of the number of occurance for each age
//                                            3) firstName of users who is less than 30

const users = [
    {firstName: 'Alex',   lastName: 'Blits', age: 45},
    {firstName: 'Donald', lastName: 'Trump', age: 28},
    {firstName: 'Elon',   lastName: 'Musk',  age: 29},
    {firstName: 'Kuku',   lastName: 'Reku',  age: 45}
]
// Task 1
const output1 = users.map( x => x.firstName+' '+x.lastName)
console.log(output1)
// Task 2
const output2 = users.reduce((acc,curr) => {
    acc[curr.age] ? ++acc[curr.age] : acc[curr.age]=1 
     return acc
}, {} )
console.log(output2)
// Task 3 
const output3 = users.filter( curr => curr.age<30 ).map( curr => curr.firstName)
console.log(output3)
// Task 3 -  by  using reduce
const output4 = users.reduce((acc, curr) =>{
    if (curr.age<30) acc.push(curr.firstName)
    return acc
}, [])
console.log(output4)


