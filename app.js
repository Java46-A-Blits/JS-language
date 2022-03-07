const circle = {radius: 20, square: function(){return 3.14*(this.radius**2)},
                perimeter: () => 2*3.14*this.radius,
                toString: function(){return `radius of this circle is ${this.radius}` 
                }  /*to avoid [object Object] line 16 polymorphism)   ___|*/ 

            }   
// console.log(`area = ${circle.square()}, perimeter = ${circle.perimeter()}`);

//circle.square() will  be converted to square(circle) 
//for the perimeter it will  show as NaN as this.radius ->
// undefined -> 2*3.14*undefined = NaN ('this.radius'  for 'perimeter' defined within a scope of 'circlle' object only )
// it's invisible when we call it from the window object,  this is why  it won't print.  
function square(circle) { // function ,  not  a method
    return 3.14*(circle.radius**2);
} 
// console.log(`circle :${circle}`); // --> circle: radius of this circle is 20

const circle1 = {radius:20, perimeter: function () {return 2*3.14*this.radius},
                toString: function(){ return `radius of this circle is ${this.radius}`}
                }   
// circle1.square(); /// will give an eror -> the method square is not defined inside obj circle1
function Circle(radius){
    this.radius = radius; 
}
Circle.prototype.square = function() {
    return 3.14*this.radius**2;
}
Circle.prototype.perimeter = function(){
    return 2*3.14*this.radius  
}
Circle.prototype.toString  = function(){
    return `radius of this circle is ${this.radius}`
}
const circle10  = new Circle(10);

////////////////////////**********    HW-16   ************* \\\\\\\\\\\\\\\
//Write constructor Deferred
        //         const d = new Deferred()
// d.then(function(res){ console.log('1 ', res); return 'a'; });

// d.then(function(res){ console.log('2 ', res); return 'b'; });

// d.then(function(res){ console.log('3 ', res); return 'c'; });
// d.resolve('hello');
//Output:   
//1 hello
//2 a
//3 b

/*******************************************HW #16 definition task2 */
//write constructor MyArray
//const myArray = new MyArray(10);
//myArray.get(index) - result 10
//write method get getting an index value and returning common value
// (set in constructor)
//myArray.set(index, value); 
//write method set that       
//myArray.setValue(value) - sets new value in all elements of myArray
//Example:
// const myArray = new MyArray(10);
// console.log(myArray.get(100)) // displayed out 10
// myArray.set(100, 500)//sets 500 at index 100
// console.log(myArray.get(200)) //displayed out 10
// console.log(myArray.get(100)) //displayed out 500
// myArray.setValue(300);
// console.log(myArray.get(100)) //displayed out 300
// console.log(myArray.get(200)) //displayed out 300

/**********************/
// Array.prototype.filter = function(callbackPredicate){  // reversing the logic of the filter method of an Array
//     res = [];
//     this.forEach((n,i,a) => !callbackPredicate(n,i,a)&&res.push(n)); 
//     return res;
// }
// const arr = [1, 2, 5, 100, 15, 20];
// arr.filter(n => n%2===0).forEach(n => console.log(n));


//////////////////****************   PROMISE IN JS   ****************\\\\\\\\\\\\\\\\\\\

// let p = new Promise((resolve, reject) => {
//     let a = 1+2;
//     if(a==2){
//         resolve('Success')
//     } else{
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in then ' + message) 
// }).catch((message) => {
//     console.log('This is in the catch ' + message);
// })

//  const userLeft = true
//  const userWatching = false

// function tutorialCallback(callback, errorCallback){
//     if (userLeft){
//         errorCallback({
//             name: 'User left ',
//             message:':('
//         })
//     } else if (userWatching){
//         errorCallback({
//             name: 'User watching',
//             message: 'message if watching'
//         })
//     } else {
//         callback('Thumbs up')
//     }
// }
// tutorialCallback((message)=>{console.log('Success:' + message)}, 
//                  (error)=>{console.log(error.name + ' '+ error.message)})


//  const userLeft = false
//  const userWatching = false
// function tutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if (userLeft){+
//             reject({
//                 name: 'User left ',
//                 message:':('
//             })
//         } else if (userWatching){
//             reject({
//                 name: 'User watching :',
//                 message: 'message if watching'
//             })
//         } else {
//             resolve('Thumbs up')
//         }
//     })
// }
// tutorialPromise().then ((message)=>{console.log('Success:' + message)})
//                  .catch((error)=>{console.log(error.name + ' '+ error.message)})
/////////////////////////----- HW16-1 -----\\\\\\\\\\\\\\\\\\\\\\

function Deferred(){
    this.functions = []
}
Deferred.prototype.then = function(thenFunc){
    this.functions.push(thenFunc)
}
Deferred.prototype.resolve = function(res){
    this.functions.forEach(funcN => res=funcN(res))
}
const d = new Deferred()
d.then(function(res){console.log('1',res); return 'a'});
d.then(function(res){console.log('2',res); return 'b'});
d.then(function(res){console.log('3',res); return 'c'});
// d.resolve('hello');

/////////////////////////----- HW16-2 -----\\\\\\\\\\\\\\\\\\\\\\

function myArray(initialValue){
    this.value = initialValue;
    this.array = []; 
}
myArray.prototype.setValue = function(value){
    this.value = value;
    this.array = [];    // if not used, then after "array.setValue(300);" all values will change to 300 other than 
                        //array[100] = 500
}
myArray.prototype.set = function(index, value){
    this.array[index] = value;
}
myArray.prototype.get = function (index){
    return this.array[index] ?? this.value; // if this.array[index] either undefined or null returns this.value
    // don't use "||" operator as if "this.array[index]" == 0 which is false in JS, it will return "this.value" 
}
const array = new myArray(10);
// console.log('array.get(100) -->',array.get(100)); // -->10
// array.set(100, 500);
// console.log('array.get(200) -->',array.get(200)); // -->10
// console.log('array.get(100) -->',array.get(100));
// array.setValue(300);
// console.log('** array.get(100) --> ',array.get(100));
// console.log('** array.get(200) --> ',array.get(200));
// array.set(20,0);
// console.log('array.get(20)-->',array.get(20))
// console.log('array.get(100) --> ',array.get(100));

//****************************** */
const arr1 =[]
arr1[100] = 20;
console.log('Length of array ', arr1.length)
arr1.length = 0;  ///  the way to  reset an array
console.log('arr1[100] is: ',arr1[100])
