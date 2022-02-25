const circle = {radius:20, square: function(){
                return 3.14*(this.radius**2)},
                perimeter: () => 2*3.14*this.radius,
                toString: function(){
                    return `radius of this circle is ${this.radius}`// to  avoid [object Object] line 16 polymorphism)
                } 

            }   
console.log(`area = ${circle.square()}, perimeter = ${circle.perimeter()}`);
//circle.square() will  be converted to square(circle) 
//for the perimeter it will  show as NaN as there is no "this" for an arrow function, i.e. this radius ->
// undefined -> 2*3.14*undefined = NaN
function square(circle) { // function ,  not  a method
    return 3.14*(circle.radius**2);
}
console.log(`circle :${circle}`);

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
//write method set that sets a given value at a given index
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
Array.prototype.filter = function(callbackPredicate){
    res = [];
    this.forEach((n,i,a) => !callbackPredicate(n,i,a)&&res.push(n)); 
    return res;
}
const arr = [1, 2, 5, 100, 15, 20];
arr.filter(n => n%2===0).forEach(n => console.log(n));

