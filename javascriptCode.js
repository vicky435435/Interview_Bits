

// 1. Second Higesht Number 

// arr=[5,9,6,8,4,3,9,6,5,7,1,3];

// const uniqueArr = [...new Set(arr)];

// const sortedUniqArr = uniqueArr.sort((a,b) => b -a);

// const secondHighest = sortedUniqArr[1];

// console.log("second highest number :-", secondHighest)

// arr = [1,2,2,3,2,4,5,4]

// 2. example
// var arr = [5, 9, 6, 8, 4, 3, 9, 6, 5, 7, 1, 3];
// var secondHighests = [...new Set(arr)].sort((a, b) => b - a)[1];

// console.log("Second highest number:", secondHighests);


// 3 Higest Number in Array 

// let numbers = [5,3,6,8,10];
// let highestNumber = Math.max(...numbers);
// console.log("higest number"+ highestNumber)



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


// const arr = [1, 2, 2, 3, 4, 4, 5];
// const duplicates = [];

// // Using a Set to efficiently find duplicates
// const uniqueElements = new Set();
// for (const element of arr) {
//   if (uniqueElements.has(element)) {
//     duplicates.push(element);
//   } else {
//     uniqueElements.add(element);
//   }
// }
// console.log("Duplicate elements:", duplicates); // Output: [2, 4]

//  Find a duplicate element in an array

// const myarray =  [1, 2, 3, 3, 4, 6, 7, 7 ,7 , 6 , 1, 8, 9, 10]
// const duplicate = [...new Set(myarray.filter((item, index) => myarray.indexOf(item) !== index))]

// console.log("duplicate elements :-", duplicate)

//  Find a how many Duplicate values in an array

// const myarray1 =  [1, 2, 3, 3, 4, 6, 7, 7 ,7 , 6 , 1, 8, 9, 10]

// const countDuplicates =  myarray1.length - new Set(myarray1).size;
// const uniqueElements1 = arr.length - [...new Set(myarray1)].length;
// console.log("unique elements :-", uniqueElements1)

// console.log("Duplicate elementssss :-", countDuplicates)


// const arr = [1, 2, 2, 3, 4, 4, 5, 7 ,6,7,0, 5, 6, 7, 8, 9, 10,2,8,9,10];

// const duplicateValues = [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
// const numberOfDuplicateValues = duplicateValues.length;

// console.log("Number of duplicate values:", numberOfDuplicateValues); 


// let age = [12, 15, 18, 20, 19,4,5,1,2]
// age.sort((a,b) => a - b);
// age.sort()
// console.log(age)

// // how to sequenct type of array

// const arr = [1, 2, 2, 3, 4, 4, 5, 7 ,6,7,0, 5, 6, 7, 8, 9, 10,2,8,9,10];

// const uniqueElements = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(uniqueElements)

// 1 How do you merge two arrays in javascript ?

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = array1.concat(array2);

// const mergedArray1 = [...array1, ...array2];
// console.log(mergedArray)


// 2  How to remove duplicates from an array in javascript 

// const array3  = [1, 2, 2, 3, 4, 4, 5, 7 ,6,7,0, 5, 6, 7, 8, 9, 10,2,8,9,1];
// const newarray = [...new Set(array3)];

// console.log(newarray)


// 3  How to count duplicate values in an array

// const  array4 = [1, 2, 2, 3, 4, 4, 5, 7 ,6,7,0, 5, 6, 7, 8, 9, 10,2,8,9,1];
// const countDuplicates = array4.length - new Set(array4).size;
// console.log(countDuplicates)

// 4  How to remove specific element from an array 

// const array5 = [1,2, 3,4,5,6,7,8,9];
// const removeElement = array5.filter(item => item !== 7);
// console.log(removeElement);


//  5 How to Find all unique values in an array of objects by a specific key ?

// const array6 = [
//     {id: 1,name : 'john'},
//     {id: 2, name : 'smith'},
//     {id: 3, name: 'show'},
//     {id: 4, name : 'smith'},
//     {id: 5, name: 'smith'}
// ];
// const uniqueNames = [...new Set(array6.map(item => item.name))];
// console.log(uniqueNames)

//  6 How to all unique values in an array of objects by a specfic key and all unique duplicate values remove 

const array7 = [
    {id: 1,name : 'john'},
    {id: 2, name : 'smith'},
    {id: 3, name: 'show'},
    {id: 4, name : 'smith'},
    {id: 5, name: 'smith'}
];
const uniqueNames = [...new Set(array7.map(item => item.name))];
console.log(uniqueNames)

//  7 how to print trangle star pattern in javascript ?

//   How can you flatten a nested array into a single flat array?

const arr = [1, [2, 3], [4, [5, 6]]];
const flatArray = arr.flat(Infinity);
console.log(flatArray)



