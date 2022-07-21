//////////////////  CW18-19 - JS EXAM 
// //EX1
// function sayHi(){
//     console.log(name);   // -> undefined
//     console.log(age);    // -> reference error
//     var  name = "Lydia"
//     let age = 21
// }
// sayHi();
// // (ans:D  -  udefined and reference error)
//////////////////////////////----- EX-2  - What's the output?
// for (var i=0; i<3; i++){
//     setTimeout(()=> console.log(i),1); /// ->333
// }
// // can be fixed by  the enclosure:
// for (var i=0; i<3; i++){
//     function inner(i){
//         setTimeout(()=> console.log(i),1); /// ->333
//     }
//     inner(i);
// }
// for (let i=0; i<3; i++){
//     setTimeout(()=> console.log(i),1); /// -> 012
// }
// ans:(c - 333 and 012)
//////////////////////////////----- EX-3  - What's the output?
// +true ; // ->1
// !"Lydia" ; // -> false
//////////////////////////////----- EX-4  - What's the output?
// const shape = {
//     radius:10,
//     diameter (){
//         return this.radius*2
//     },
//     perimeter:()=> 2*Math.PI*this.radius
// };
// console.log(shape.diameter())   //-> 20
// console.log(shape.perimeter())  //-> NaN- arrow function's "this" created inside the Obj, therefore it's invisible in obj 
// "shape" ; this.radius udefined, undefined*num = NaN  
//////////////////////////////----- EX-5  - Which one is true?
// const bird = {
//     size:"small"
// }
// const mouse = {
//     name: "Mickey",
//     small: true
// }
// //console.log(mouse.bird.size)  // not valid; 
// console.log(mouse[bird.size]) // -> (valid)   bird.size <-> bird["size"] ==="small" ->> mouse["small"] === mouse.small -> true ! 
// console.log(mouse[bird["size"]]) // (valid)
// //////////////////////////////----- EX-6  - What's the output?
// let c={greeting: "Hey!"};  // c is a refirence to  an object 
// let d; 
// d=c;                      // now d is a reference to  the SAME object !!! 
// c.greeting = "Hello";
// console.log(d.greeting)  // -> "Hello"
//////////////////////////////----- EX-7  - What's the output?

// /// primitive and objects behavior are not the same !!!
// let a=3;   // primmitive 
// let b=new Number(3);  // refence (obj)
// let c=3;
// console.log(a == b)   // true == checks the value but not type
// console.log(a === b)  //false
// console.log(b === c)  // false
//////////////////////////////----- EX-8  
// function bark(){
//     console.log("Woof!")
// }
// bark.animal='dog'; // -> not syntax error
//////////////////////////////----- EX-9 What's the output ?
// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName  = lastName
// }
// const lydia = new Person("Lydia", "Hallie")  // -> creating a new object
// const sarah = Person("Sarah", "Smith")   // -> when no'new' we just calling a funcion, since no 'return', we get 'undefined'
// console.log(lydia) // -> Person { firstName: 'Lydia', lasrName: 'Hallie' }
// console.log(sarah)// -> undefined 
//////////////////////////////----- EX-10 What's the output ?
// function sum (a,b){
//     return a+b
// }
// console.log(sum(1,"2") );//-> "12" as a string. JS looking for concationation method in string,  but if it was - then it was 
// doing arithmetical calculation
//////////////////////////////----- EX-11 What's the output ?
// let number=0
// console.log(number++)  // 0  postfix operation,  number=1 but 0 returned
// console.log(++number)  // 2  prefix operation, number = 2 ( ++ number=1)  and 2 will be returned 
// console.log(number)    // 2 
//////////////////////////////----- EX-12 What's the output ?
// function checkAge(data){
//     if (data === {age:18}){
//         console.log("You are an adult!")
//     } else if(data == {age:18}){
//         console.log("You are still an adult.")
//     } else {
//         console.log("Hmm you don't have an age I guess")
//     }
// }
// checkAge({age:18}) // -> Hmm you don't have an age I guess ;
// // OBJECTS CAN'T BE COMPARED WITH POINTERS BY === OR == ; POINTERS CAN BE COMPARED WITH POINTERS ONLY 
//////////////////////////////----- EX-13 What's the output ?
// function getAge(){
//     "use strict"  // "use strict" requires "let" or "var" or "const". 
//     age = 21
//     console.log(age)
// }
// getAge() // -> reference error: age is not defined
//------------------------------------- EX-14 What's the value of sum ?
// const sum=eval("10*10+5")  // eval  used to  force  a number to  become a string
// console.log(sum) //-> 105
//------------------------------------- EX-15 What's the output?
// var num=8
// var num=10
// console.log(num) //->10
//------------------------------------- EX-16 What's the output?
// const obj ={a:"one", b:"two", a:"three"}
// console.log(obj) //->{ a: 'three', b: 'two' },  the same field (key name) is overwritten
//------------------------------------- EX-17 What's the output?
// const foo = ()=> console.log("First")
// const bar = ()=> setTimeout(()=> console.log("Second"))
// const baz = ()=> console.log("Third")
// foo()
// bar()
// baz()
// first, third, second
//------------------------------------- EX-18 What's the output?
// console.log(!!null) // !null->true; !!null==false
// console.log(!!"")   // !""->true, the empty sting is  false! ; !!""->false
// console.log(!!1)    // !1->false;   !!1->true
//------------------------------------- EX-19 What does this return?
// consol.log([..."Lydia"]) //[ 'L', 'y', 'd', 'i', 'a' ] -  spread operator
//------------------------------------- EX-20 
// const a=10;
// const b=11;
// const c=5;
// if(a<b<c) { 
//     console.log("kuku") // will print 'kuku' as a<b=true=1, and 1<5 is true. To fix it we need a<b && b<c
// }
//------------------------------------- EX-21 What's the output?
// let person = {name: "Lydia"}
// const members = [person]
// person = null
// console.log(members) //-> [ { name: 'Lydia' } ]
// 
// function fun (Person){
//         // Person = null     // -> will change the person parameter (pointer of an object person) to null inside fun only!
//         Person.id = 12  // -> this will change the "id" field of the object person using the pointer Person!!!!!!!!!!!!!!
//         console.log('*',Person)
//     }
// const person = {id:213, name:'Petya'}
// fun(person)
// console.log(person)  // -> { id: 213, name: 'Petya' }
//------------------------------------- EX-22 What's the output?
// const person={
//     name: "Lydia",
//     age: 21,
// }
// for (const item in person){// iteral keys of an object
//     console.log(item) 
// }
// // "name", "age"
//------------------------------------- EX-23 What's the output?
// console.log(3+4+"5") // -> "75"
// const a={}
// const b={ku: "b"};
// // const b= {key: "b", toString: function(){ return this.key}} // or we can replace a[b]=123 with a["b"]=123
// const c={key: "c"}
// a[b]=123; // JS converts object to "toString" but since no object "a" no "b" either have a method toString they rewrite
// // to the same field [object Object]
// a[c]=456;
// console.log(a[b])    // -> 456
// console.log(a)       //{ '[object Object]': 456 }
// let a1
// let a2 = undefined 
// console.log(a1==a2) // -> true

//------------------------------------- EX-25 What's the output?
// const numbers = [1,2,3];
// numbers[10] = 11;
// console.log(numbers.length) // -> 11
//------------------------------------- EX-26 What's the value of num?
// const num = parseInt ("7wqe6") //  parsing to number until the first sign appear
// console.log(num)
//------------------------------------- EX-27 What's the output?
// function getInfo(member, year){
//     member.name = "Lydia";
//     year = "1998"
// }
// const person = {name: "Sarah"};
// const birthyear = "1997";
// getInfo(person, birthyear)
// console.log(person, birthyear) // { name: 'Lydia' } 1997
//------------------------------------- EX-28 What's the output?  ?????????????????????????????????????????
// function greeting(){
//     throw "Hello world !";
// }
// function sayHi(){
//     try{
//         const data = greeting(); //  as the "greeing" throws an exception it will jump to the "catch" taking with it an 
//         // exception "Hello world"
//         console.log("It worked !", data);
//     } catch (e){
//         console.log("Oh no an error:", e); 
//     }
// }
// sayHi(); // -> Oh no an error: Hello world !
//------------------------------------- EX-29 What's the output?
// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;  // [y] = [1,2,3,4,5]  distucture of an array
// console.log(y);     // -> 1
//------------------------------------- EX-30 What's the output?
// const user = {name: "Lydia", age: 21};
// const admin = {admin: true, ...user}; 
// console.log(admin) // -> { admin: true, name: 'Lydia', age: 21 }
//------------------------------------- EX-31 What's the output?
// const settings = {
//     username: "Lydiahallie",
//     level: 19,
//     health: 90
// };
// const data = JSON.stringify(settings, ["level", "health"]); // considered only specified keys
// console.log(data); // ->{"level":19,"health":90}
//------------------------------------- EX-32 What's the output?
// let num = 10;
// const increaseNumber = ()=> num++;
// const increasePassedNumber = (number) => number++
// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1)
// console.log(num1)
// console.log(num2)
//------------------------------------- EX-33 What's the output?
// [1, 2, 3, 4].reduce((x,y)=> console.log(x,y)) //1 2 -> undefined 3 -> undefined 4 // if no initial value passed to x 
//then it will take a first element of an array. For the next iteration no return value for x, therefore it's undefined.
//------------------------------------- EX-34 What's the output?
// function addTolist(item, list){
//     return list.push(item) // push returns THE LENGTH OF THE ARRAY !!!!!
// }
// const result = addTolist("apple", ["banana"])
// console.log(result) // -> 2
//------------------------------------- EX-35 What's the output?
// const list = [1+2, 1*2, 1/2] ; 
// console.log(list) // -> 3, 2, 0.5
//------------------------------------- EX-36 What's the output?
// function sayHi(name){
//     return `Hi there, ${name}`
// }
// console.log(sayHi()) // -> Hi there, undefined
//------------------------------------- EX-37 What's the output?
// console.log("I want pizza" [0]); // -> I
//------------------------------------- EX-38 What's the output?
// function checkAge (age){                                   // to fix: add 'message' inside to the param 'age'
//     if (age<18) {
//         const message = "Sorry you're too young"           // to fix: remove 'const'
//     } else {
//         const message = " Yay ! You're old enough !"       // to fix: remove 'const'
//     }
//     return message
// }
// console.log(checkAge(21)) // -> ReferenceError: message is not defined
//------------------------------------- EX-39 What's the output?
// function sum(num1 = , num2=num1){    // if it was sum(num2=num1, num1) then in the function scope num2 = 10 and num1 undefined.   
//                                      // if it was sum(num1=10, num2) and function call sum(undefined, 10) then result -> 20.   
//     console.log(num1 + num2)
// }
// sum(10); //  -> 20   
//------------------------------------- EX-40 What's the output?
// let newList = [1,2,3].push(4)
// console.log(newList.push(5))     // -> TypeError: newList.push is not a function -> push returns a number (4)
                                    // since there is no push operatina on a number -> Typerror
//------------------------------------- EX-41 What's the output?
// <div onclick="console.log('div')">
//   <p onclick="console.log('p')">
//     Click here!
//   </p>
// </div>
// Ans: (A)-> p div - function propagation - when first the child (paragraph) function performed, then parent (div)

//------------------------------------- EX-42 What's the output?
// const person = {name: "Lydia"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person,21)); // Lydia is 21
// console.log(sayHi.bind(person,21)); // [Function: bound sayHi] to fix it : console.log(sayHi.bind(person,21)()) 
                                       // (bind called from '.log' will return a new functional object 'to string' 
//------------------------------------- EX-43 What's the output?
// function sayHi(){
//     return(()=> 0)(); // if no  () then return is a function, () is a call for a function the result of which is a number. 
// }
// console.log(typeof sayHi()); // -> number ????????????????????????????????????????????????????
//------------------------------------- EX-44 What's the output? ????????????
// to  see which is coherced as 'false' we can  use Boolean('expression') using the JS prompt
// Boolean(0) -> false
// Boolean("") -> false
// Boolean(" ") -> true
// Boolean(new Boolean(false)) -> true (boolean of a new object is true)
// Boolean(new Number(0)) -> true (boolean of a new object is true)
// Boolean(undefined) -> false 
// 
// 0||b -> b ; bacause 0-> false
// 0??b -> 0 ; (null or undefined) because 0 is not Null nor Undefined. 
//------------------------------------- EX-45 What's the output?
// ( ()=> {
//     let x,y;
//     try{
//         throw new Error();
//     } catch (x){
//         (x=1),(y=2);     // as there is to y in this scope, y=2 assigned to the outer scope 
//         console.log(x); // 1 - local  x in the cope of the 'catch' block
//     }
//     console.log(x);     // -> no 'x' assigned within a 
//     console.log(y);     // -> 2
// })();    /// "()" for return 
//------------------------------------- EX-46 What's the output?
// console.log ([[0,1], [2,3]].reduce((acc, cur)=> {return acc.concat(cur)}, [1,2]) )// -> [1, 2, 0, 1, 2, 3]
// console.log ([[0,1], [2,3]].reduce((acc, cur)=> acc.concat(cur), [1,2]) )// -> [1, 2, 0, 1, 2, 3]
//********************************************************************************************************* */
//**************************** W E B I N A R  - 19 *******************************/
/// *********** EX - 1 TEST EXTENDES///
// class A {
//     x=123; // if #x (private) then won't print, #x is visible inside class A (and it's methods)only. 
//            // _x public.  to  access it from outside of a class we can add a getter (get x(){ return this.#x})   
//            // inside the class and simple  access it from  outside by "b.x"
//            //fooA() {return this.x}
// }
// class B extends A {
//     y=456;
//     fooB(){}
// }
// let b = new B();
// console.log(b);   // -> B { x: 123, y: 456 }  
// for (key in b){   // -> for of ? 
//     console.log(key)
// }

// let c = {xx: 111}
// let d = Object.create(c) // creates a new object 'd' which prototype is object 'c'
// d.yy = 222
// for (key in d){
//     console.log(key)
// }
//    // -> { yy: 222 } prints only the property of the last inherited obj. 
// // to  print the whole obj including all properties of prototypes we must: console.log(d.xx, d.yy) or as above 

/// *********** EX2  - TEST ITERATION
// for...of could be used because array is iterable
 
// }
//********************************************************************
// function foo(){         // thus, we can skip  of definding parameters in the brackets as the arguments in the function call 
//                         // are streamed inside 'argument' method (property?)
//     let argums = Array.from(arguments)
//     console.log(typeof argums) // -> 'object' (since array is an object) // console.log(argums) will print the array !
//     for (let arg of argums){
//         console.log(arg)
//     }
// }
// foo([1,2],[3,4],5,6,7,8,[9,10,11])

//------------------------------------- EX-1 
// create function getRandomNumber (min,max) where min - minimal value, max - max value
//Example getRandomNumber(0, 1) -> returns number that is either 0 or 1
//if min > max then swap the values - swap should be without additional variable in one line code

//  function getRandomNumber(min, max){
//      if (min > max){
//          [max, min] = [min, max]
//      } 
//     return Math.round(min + Math.random()*(max - min))
//  }
// for (let i=0; i<10; i++) console.log(getRandomNumber(100,50))

//------------------------------------- EX-2   (Closure exammple)
// // create a function concatinate(prefix) that by using the following code:
// //   const concatApp = concatinate('App - ');
// //   const concatMessage = concatApp('Test status: Done');
// //   console.log(concatMessage); 
// //   will print -> "App - Test status: Done" 

// function concatenate(prefix){
// // return (...args)=> [prefix,...args].join('') // join - to  concatenate all array's element into string. 
// // }
// // const concatApp  =   concatenate('App - ');
// // const concatMessage = concatApp('Test satus: Done', ' good', ' very')
// // console.log(concatMessage) 

// // 02:25 countdown






