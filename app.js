// console.log("Hello world !!!");
// OUtput for VAR is 3 3 3 
// for(var i=0; i<3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }

// output for VAR is 3 3 3 
// for(let i=0; i<3; i++){}
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// console.log(`a`,`${"12"-"a"}` ,`as`)

// // console.log("ab"-12);       
// console.log("12"+12,'"12"+12')
console.log(`+"12"+12 = ${+"12"+12}`)
// console.log(`a`,`${12-"a"}` ,`as`)
// console.log(`a`,`${+'a'}` ,`as`)
// console.log("ab"-12);
// console.log(this)



// function test(a){
//     return function f(b,c){
//         return a*(b+c);
//     };
// }
//  console.log( test(5)(10, 2) );

//////////////////////////////   HOME WORK   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
// 1. print 'ananas' with  opnly  two letters 'a' and 's'

// 2. wrie function 'calculate' for any arithmethic operaion on two  numbers

// 3. write any example for runnning the following expression: function(5)(10,3)


//1.

console.log('a'+`${+"a"}`+'a'+'s');
console.log('1.  ', `a${+'a'}as`);

//2.

function calculate(num1, num2, operation){
    return operation(num1, num2);
}
function sum(a,b){
    return a+b;
}
console.log(calculate(10,2,sum));

//3.   functon (index)(a,b) ;  if index = 5 then return a+b,  else return a-b
function fun(index){
    if (index == 5)
    return function (a,b){
        return a+b;
    }
    else
        return function (a,b){
            return (a-b);
        }
}
console.log(`3.    `,fun(3)(10,3));