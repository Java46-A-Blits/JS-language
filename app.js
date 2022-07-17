const point = {
    x:3,
    y:4
};
function displayPointInSpace(z, t){
    console.log(`x: ${this.x}, y: ${this.y}, z:${z}, t:${t}`)
}
// displayPointInSpace(10,20) // --> x: undefined, y: undefined, z:10, t:20
// point.method = displayPointInSpace;
// point.method(10,20)             // -->x: 3, y: 4, z:10, t:20
// displayPointInSpace.call(point, 10, 20);// --> x: 3, y: 4, z:10, t:20
// displayPointInSpace.mybind(point, 10,20)();   // must () to  call  a function and IT RETURNS A FUNCTIONAL OBJECT
// displayPointInSpace.apply(point, [10,20]);

Function.prototype.mybind = function(Obj, ...args){
    //  this - reference to  any  functional object ( as 'displayPointInSpace')
    console.log('inside mybind')
    // Obj - refence to  any object (as a 'point')  
        return (...params)=>{
        Obj.method12345 = this; // merge this of 'displayPointInSpace' (to the left) and this of the 'point'  Obj
        // const res = this(...args.concat(params)) will print: x: undefined, y: undefined, z:10, t:20 since this of the 
        // point is global and the local this we are now in is 'displayPointInSpace' since mybind method was called from 
        // 'displayPointInSpace'  (observe compiler) 
        /////////////////////////////////////////////////////////////////////
        ///  - The version from the webinare with 'call' method will work too:
        //   return this.call(Obj, ...args.concat(params));    
        const res = Obj.method12345(...args.concat(params)); // 'params' are for the 'funDisplay' or 'funDisplayArguments' or
                                                                 // 'funDisplayMixed' following functions
        //thisObj.method12345(...args.concat(params)); // works even if you don't assign & return 'res' (console.log)
        delete Obj.method12345;
        return res; /// ???????
    }
}
// //////////////////-----    ARGUMENTS PASSED AT THE FUNCTION CALL   -----\\\\\\\\\\\\\ (TYPICAL SAMPLE OF FUNCTION INSIDE THE FUNCTION )
const funDisplay = displayPointInSpace.mybind(point)   
funDisplay(10,20)       // -->x: 3, y: 4, z:10, t:20 (function call) :  !!! FUNCTION INSIDE THE FUNCTION
// the same as :
// const funDisplay = displayPointInSpace.mybind(point)(10,20);   

// //////////////////-----    ARGUMENTS BOUND BY  THE METHOD 'mybind'   -----\\\\\\\\\\\\\
const funDisplayArguments = displayPointInSpace.mybind(point, 30,40)
funDisplayArguments()

// //////////////////-----    MIXED -  PART OF ARGUMETS BOUND AND PART BY THE FUNCTION CALL   -----\\\\\\\\\\\\\
const funDisplayMixed = displayPointInSpace.mybind(point,50);
funDisplayMixed(60)


///////**********   Namaste#13 - CLOSURE FUNCTION PROBLEM --- 1 to 5 progression count with  delay (problem when let replaced by var, 
// as the loop count is much faster than 'setTimeout' completed, and when 'i' is var it will  point at the same obj. value i.e '6')
// function x(){
//     for (var i=1; i<=5;  i++){        // solution: replace  var by let for 'i'
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000);
//     }
//  console.log('Test')
// }
// x()



////////////   closure function problem    \\\\\\\\\ ---  1 to 5 progression count with  delay (problem resolved with var
// by  wrapping by the "enclose" function)

// function x(){
//     for (var i=1; i<=5; i++){ 
//         function enclose(i){
//              setTimeout(function () {
//                   console.log(i)
//             }, i*1000);
//         }
//         enclose(i); //  every time we call 'eclosure(i)' it will  create a new copy of 'i'
//     }   
//  console.log('Test')
// }
// x()


 
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Namaste#14 ///////  closure sample + interview question \\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////////////// 

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
//     return outer; //--> 10 Hello 201
// }
// let a=100;   // won't print 100 as the closure of 'inner' has already 'a' defined, but if it wasn't it would print 100 !!!!!!!!! 
// outest()('Hello')();

//     function outer (a){
//         // let a = 10;
//         function inner(b) {
//             console.log(a)
//             console.log(b)
//         }  
//         return inner; // inner()
//     }
//    const newFunction = outer('outer')
//    newFunction('inner')                        //   the same as it was : outer('outer')('inner')
//                                              // as this is the nested function it hs be declared this way


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

//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////  #8 - THE SCOPE CHAIN, SCOPE & LEXICAL ENVIRONMENT   ////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

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
// // console.log(b) ; // --> undefined 
// a()

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// --- # 10  BLOCK SCOPE & SHADOWING  ----- \\\\\\
////////////////////////////////////////////////////////////////////////////////////

// var a = 100    //  if was 'let' -> SyntaxError: Identifier 'a' has already been declared,   but in the case of function block it would work 
// // var a = 400 //  no error, var CAN BE REDECLARED
// let b=200      //  let can be replaced with var for legal shadowind of b
// // let b= 201  // --> SyntaxError: Identifier 'b' has already been declared
// const c=300;
// // const c=301 // --> SyntaxError: Identifier 'c' has already been declared
// console.log(a, b, c) //-> 100, 200, 300
// {
//      var a = 10   // will change the value of 'a' to 10  out of the scope either, since it will point to  the same memory location
//      let b = 20   // let can't be replaced with var for legal  shadowing OTHER THAN if b was enclosed within a function 
//      const c=30
//      console.log(a, b, c,'*'); // will  print all,  10 20 30*
//         {
//             console.log(a,b,c,'**' ); // will  print all,  10 20 30** ,  if variable aren't defined within a block   it will look outside
//         }
//  }
//  console.log(a,b,c,'***') // - > 10 200 300 ***,  even if 'a' wouldn't be defined in line 151 - no error
//  will show as var seen out of the scope of the block 
// //- blocks only, NOT FOR FUNCTIONS 
// //  console.log(b); //- > 200
// //  console.log(c); //-->if wasn't const c=300 then ref error - c is not defined  - 
// //  let and const scope seen within a child blocks but not the parent blocks.


//    var d=10
//    function x(){
//      var d=100;  // LEGAL 'd' SHADOWING WITHIN  THE FUNCTION  only
//      console.log(d) // --> if  wasn't var d=100 inside the function was printing 10
//     }
//     x()           //--> prints 100
//   console.log(d)  //--> prints 10
/*--------------------------------------------------------------------------------------------*/
    // var d=10           // can't use let - > SyntaxError: Identifier 'd' has already been declared
    //     {
    //         var d=100;    // can use 'let' but then line 188 prints 10 
    //         console.log(d) // --> 100,  if  wasn't var d=100 inside the function was printing 10
    //     }
    // console.log(d)  //--> prints 100



//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// NAMASTE#16 (Ep.13) /////// FIRST CLASS FUNCTIONS  ft ANONYMOUS FUNCTIONS /////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// // a();
// // b();   //  -> TypeError: b is not a function
// //the difference is the hoisting, b() will throw an error "-> TypeError: b is not a function"-as if it was a variable
// //  FUNCTION STATEMENT  === FUNCTION DECLARATION:
// function a(){
//     console.log("a called")
// }
  
// // FUNCTION EXPRESSION:
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
// xyz() // --> ReferenceError: xyz is not defined (not in the scope of the global)

//// first class function (aka 'first class citizens') - the ability of the function to be transfered to another function as an argument
//// (to be used as an argument (or to be assigned to values)) 

// var fun = function (param1){
//     console.log(param1)    
// }
// // fun(a);
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
// CLOSURE DEMO WITH EVENT LISTENER
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

// // TO REPLACE 'MAP' WITH 'CALCULATE' : 

// Array.prototype.calculate = function(logic){
//     const output = []
//     for (let i = 0; i < this.length; i++){  // this === radius as the calculate function called form 'radius' object
//         output.push(logic(this[i]))
//     }
//     return output
// }



// // console.log(calculate(radius, area  ))
// // console.log(calculate(radius,circumference))
// // console.log(calculate(radius,diameter))

// // console.log(radius.map(area))                   // can  be replaced with map   
// // console.log(radius.map(circumference))
// // console.log(radius.map(diameter))
//                                                    // for use with creaeted 'calculate' method as an Array prototype

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));

///////////********** Namaste#21 ******** MAP, FILTER, REDUCE   \\\\\\\\\\\\\\\\\\

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

// const users = [
//     {firstName: 'Alex',   lastName: 'Blits', age: 45},
//     {firstName: 'Donald', lastName: 'Trump', age: 28},
//     {firstName: 'Elon',   lastName: 'Musk',  age: 29},
//     {firstName: 'Kuku',   lastName: 'Reku',  age: 45}
// ]
// // Task 1
// const output1 = users.map( x => x.firstName+' '+x.lastName)
// console.log(output1)
// // Task 2
// const output2 = users.reduce((acc,curr) => {
//     acc[curr.age] ? ++acc[curr.age] : acc[curr.age]=1 
//      return acc
// }, {} )
// console.log(output2)
// // Task 3 
// const output3 = users.filter( curr => curr.age<30 ).map( curr => curr.firstName)
// console.log(output3)
// // Task 3 -  by  using reduce
// const output4 = users.reduce((acc, curr) =>{
//     if (curr.age<30) acc.push(curr.firstName)
//     return acc
// }, [])
// console.log(output4)


