/**********************Arrays */
const ar = [2, 100, 9, 80];
// ar.sort(function (a, b){
//         return a - b;
// });
// ar.sort((a,b) => a - b)
// console.log(`ar is ${ar.toString()}`);

//adding element/s at end of an array
ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);
const ar1 = [-8, 30, -57];
// ar.push(ar1); there will be added array but not separated numbers
// if you want to add separated numbers you should apply a spread operator ...
ar.push(...ar1);
console.log(ar); 
//for adding elements at beginning of an array there is method "unshift"
//everything has been said about "push" will work for "unshift" only unlike "push" unshift method
//adds elements at beginning
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);
//abc123drtyugr
//method splice for inserting or replacing any elements in any place
//first argument - index for inserting or replacing
//second argument - number of the deleted elements (if 0 than splice will be applied only for inserting)
//third argiment designates sequence of being inserted element like push/unshift
ar.splice(2,0,1,2);
console.log(ar);
//removing (deleting)
let el = ar.pop(); //removes the last element and returns it
//el = -57; -57 will be removed from the array ar
el = ar.shift(); //removes the first element and returns it
//el = 27; 27 will be removed from the array ar
console.log(el, ar);
ar.splice(3, 5); //remove 5 elements beginning from the one at index 3
console.log(ar);
//includes, indexOf
//two dimensional arrays
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 4, 5]];
const matrix2 = [[10, 20], [50, -5], [34, 28]]
function displayMatrix(matrix) {
     for (let i = 0; i < matrix.length; i++) {
             let row = '';
             for (let j = 0; j < matrix[i].length; j++) {
                     row = row + matrix[i][j] + '   '
             }
             console.log(row);
     }  
}
//displayMatrix(matrix1);
displayMatrix(matrix2);
/******************HW #12 definition */
//const arHw = [13, 28, 4, 15, 25, -10, 40, 17,27];
//expected [-10, 4, 28, 40, 27, 25, 17, 15, 13]
//task: write a comparator (a comparator returns < 0 if first less than second, >0 
// if first greater than second, ==0 if first equals second)
/************************************************************** */
/**************************************HW 12 definition */
// write function 
//function matrixTransp(matrix) {
        //TODO
        //returns matrix with columns that are rows of the source matrix and 
        //rows that are columns of the source matrix
        //example: source matrix [[1,2], [3,4], [5,6]]
        // result matrix [[1, 3, 5], [2, 4, 6]]
//}

/************************************HW# 12 Solution task 1*/
const arHw = [13, 28, 4, 15, 25, -10, 40, 17,27];
//expected [-10, 4, 28, 40, 27, 25, 17, 15, 13]
const comparator = (n1, n2) => {
        let res = n1 % 2 - n2 % 2;
        if (res == 0) {
                res = n1 % 2 == 0 ? n1 - n2 : n2 - n1; 
        }
        return res;
}
arHw.sort(comparator);
console.log(arHw);
/******************************************************HW #12 solution task2 */
function matrixTransp(matrix) {
        const res = [];

        for (let i = 0; i < matrix[0].length; i++) {
                res.push([]);
                for (let j = 0; j < matrix.length; j++) {
                        res[i].push(matrix[j][i]);
                }
        }
        return res;
}
displayMatrix(matrixTransp([[1,2], [3,4], [5,6]]));