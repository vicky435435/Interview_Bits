

// 1. Second Higesht Number 

arr=[5,9,6,8,4,3,9,6,5,7,1,3];

const uniqueArr = [...new Set(arr)];

const sortedUniqArr = uniqueArr.sort((a,b) => b -a);

const secondHighest = sortedUniqArr[1];

console.log("second highest number :-", secondHighest)

// arr = [1,2,2,3,2,4,5,4]

// 2. example
var arr = [5, 9, 6, 8, 4, 3, 9, 6, 5, 7, 1, 3];
var secondHighests = [...new Set(arr)].sort((a, b) => b - a)[1];

console.log("Second highest number:", secondHighests);


// 3 Higest Number in Array 

let numbers = [5,3,6,8,10];
let highestNumber = Math.max(...numbers);
console.log("higest number"+ highestNumber)



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// let characters = ['a', 'b', 'c', 'd'];
// let reversed = characters.reverse();
// console.log(reversed)

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 5, 7, 9];
// let commonElements = array1.filter(value => array2.includes(value));
// console.log(commonElements)


// let values = [1, 2, 3, 4, 5];
// let sum = values.reduce((acc, curr) => acc + curr, 0);
// console.log(sum)


// let numbers = [5, 2, 8, 10, 3];
// let secondLargest = numbers.sort((a, b) => b - a)[1];
// console.log(secondLargest)

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 5, 7, 9];
//  let intersection = array1.filter(value => array2.includes(value));
// console.log(intersection)

// let numbers = [3, 7, 2, 8, 1];
// let highestNumber = Math.max(...numbers);
// console.log(highestNumber)

// let fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];
// let uniqueFruits = [...new Set(fruits)];
// console.log(uniqueFruits)





