//////////// ***   ARRAYS   *** \\\\\\\\\\\\\
const ar = [2,100,9,80];
ar.sort(function(a,b){
    return a-b; 
});
ar.sort((a,b) => a-b);
console.log(`array is ${ar.toString()}`);

// ADDING ELEMENTS TO  THE END OF ARRAY

// ar[ar.length]=200;
// console.log(ar);
// ar.push(300, 25);
// console.log(ar);
// const ar1 = [-8,30,-57];
// ar.push(ar1);  there will be added array but not separated numbers
// we apply spread operator " ... " to separate array elements. 
// ar.pu.log(`after push ar1 [-8,30,-57]  ${ar}`);
// WE APPLY  TO ADD AN ELEMENT TO  THE BEGINNING "unshift"
// const ar2 = [27,35]
// ar.unshift(...ar2); // the "..." spread operator works the same as before
// console.log(` after "spread" ar2 and "unshift ar", ar now ${ar}`);
//
// method splice for inserting or replacing any  elements anywhere
// 1'st argument - getting index for insert or relacement. 
// 2'd  argument - element number of the elements to  be deleted fron the same index (included)
//     (if 0 the slpice applied just for insert)
// 3'd  argument - an element itself. 
// ar.splice(2,0,1,2)
// console.log(`after splice "1,2," from the 2'd index  ${ar}`)
//REMOVING ELEMENTS
// let el = ar.pop(); // removes the last element of array and returns it
// console.log(`"pop" - removed element is ${el},  and array  now ${ar}`)
// to  remove element from beginning we use shift 
// el = ar.shift()
// console.log(`"shift" - 1'st element ${el} was removed and array now ${ar}`)
// to  remove 2,100,9,80,200
// ar.splice(3,5)
// console.log(ar) // removes 5 elements from index3 (included)
//includes,  indexOf, 
// 2D arrays
// const matrix1 = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// const matrix2 = [[100,20],[50,-5],[34,5]]

//     function displayMatrixTr(matrix){
//         for(let i=0; i<matrix[i].length; i++){
//             let row = '';
//             for (let j=0; j<matrix.length; j++){
//                 row = row + matrix[j][i] + '  ';
//             }
//             console.log(row);
//         }
//     }

//     function displayMatrix(matrix){
//         for(let i=0; i<matrix.length; i++){
//             let row = '';
//             for (let j=0; j<matrix[i].length; j++){
//                 row = row + matrix[i][j] + '  ';
//             }
//             console.log(row);
//         }
//     }
// displayMatrix(matrix1);
// displayMatrixTr(matrix1);
// displayMatrix(matrix2);
// displayMatrixTr(matrix2)

///////////// COMPARATOR \\\\\\\\\

// ******* Hw solution task  1

const array1  = [13, -28, -15, -11, 12, -45, 35, 15, 22];
const array2 =  [13, 28, 4, 15, 25, -10, 40, 17,27];

const comparator = (a,b) => {return  a%2==0 ? (b%2==0 ? a-b : -1) : (b%2==0 ? 1 : b-a )}

console.log(array1.sort(comparator));
console.log(array2.sort(comparator));
