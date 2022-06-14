// const ar  = [-10, 50, -12, 80, 40];
// ar.push(70);
// -10#50#12#80#40#70#
// ------    SOLUTION BASED ON SUBSTRING ----------\\\\
// console.log(ar);
// let str = '';
// ar.forEach( function(n){
//     str+= n+'#';
// })
// str = str.substring(0, str.length-1);
// console.log(str);

// -----  SOLUTION BASED ON forEach FROM SECOND NUMBER  ----- \\\

// const ar1 = ar.slice(1); // greates array [ 50, -12, 80, 40]
// let str =  ''+ar[0];
// ar1.forEach(n => str += '#' + n )
// console.log(str)

// ------ PRINTNG  NUMBER OF ELEMENT, ELEMENT, LENGTH OF ARRAY ------ \\
// 1 of 5 -10; 2 of 5 50; ......

// ar.forEach((n,i,a) => console.log(`${i+1} of ${a.length} - ${n}`))

// *******  mapper : 

// const ar2 = ar.map(n => n*2);
// console.log('mapped ar2', ar2)

/// *************   HW 13 task1   -  write function myForEach(array, callback-function),  where: 
// array is iterated
//callback  functon which is called for each element of an array
//callback-function should take three arguments: 1) current elemet 2) current index 3) iteraed array
// ex: myForEach(array, n=> str += '#' + n);

/// ****************    HW-12    ********************\\

// const ar  = [-10, 50, -12, 80, 40];
// function mapper (n, i, a){
//     //  console.log (`<li> ${i+1} of ${a.length} is ${n} </li>`);
//     return `<li> ${i+1} of ${a.length} is ${n} </li>`  // ?????????????????
// }
// function mapper1 (n){
//     return n + 10;
// }
// function myForEach(array, callback2){
//     for( let i=0; i < array.length; i++){
//         callback2(array[i], i, array);
//     }
// }
// function myMap(array,callback1){
//  const res = [];
//     function forEachCall(n,i,a){
//         res.push(callback1(n,i,a))
//     }
//     myForEach(array, forEachCall);
//  return res;        
// }

// const ar1 = myMap(ar, mapper);
// console.log('After mapper: ',ar1); 

// const ar2 = myMap(ar, mapper1);
// console.log('After mapper1: ',ar2);

// ******************   CW-14     ***********************\\

const ar20 = [13, 17, 20, 23, 25]; // if num of elements even - print only even elements, if not print only odd elements. 
// const arEven = ar20.filter((n, i, a)=> a.length % 2 == 0 ? n % 2 ==0 : n % 2 == 1 );
// console.log(arEven);

// const arIndex  = ar20.map((_n,i,_a) => i); /// why I cound'nt do  it with ".filter" ?
// console.log(arIndex);

/******************************************HW 14 definition task1 */
//write myFilter(array, callback) based on myForEach
//callback - function with three possible parameters: current element, current index, reference to array
/********************************************************************* */
 
// const res = ar20.reduce((res,cur) => res + cur ,0); // ( res != res) , res accumulates the sum of an array
// console.log(res)
let max = ar20[0];
max = ar20.reduce((max, cur) => cur > max ? cur : max );
console.log(max)

/******************************************HW 14 definition task2 */
//write myReduce(array, callback, initialResult) based on myForEach
//callback - function with three possible parameters: current element, current index, reference to array
// if the user call doesn't contain a second argument, then the first element of the array will be
//considered as initial result (in this case iterating begins from the second element of the array)

