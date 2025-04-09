// What makes a method mutating or non mutating in Javascript? 
// Answer:
// Mutating method:
// Directly alters the original data structure.
// Usually ends up changing its memory content.

// Non-mutating method:
// Returns a new value or structure.
// Does not change the original object/array.


// Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: 
// ○ push
// ○ pop
// ○ filter
// ○ find
// ○ sort
// ○ map

// Answer:
// Mutating methods:
// - push: Adds one or more elements to the end of an array and returns the new length of the array.    
// - pop: Removes the last element from an array and returns that element. This method changes the length of the array.
// - sort: Sorts the elements of an array in place and returns the sorted array. The sort method changes the original array.

//Example:
let arr = [3, 1, 4];
arr.push(2); // Mutating
console.log(arr); // [3, 1, 4, 2]
arr.pop(); // Mutating
console.log(arr); // [3, 1, 4]
arr.sort(); // Mutating
console.log(arr); // [1, 3, 4]


// Non-mutating methods:
// - filter: Creates a new array with all elements that pass the test implemented by the provided function.
// - find: Returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
// - map: Creates a new array populated with the results of calling a provided function on every element in the calling array.

//Example:
let arr2 = [3, 1, 4];
let filteredArr = arr2.filter(num => num > 2); // Non-mutating
console.log(arr2); // [3, 1, 4]
console.log(filteredArr); // [3, 4]
let found = arr2.find(num => num > 2); // Non-mutating
console.log(arr2); // [3, 1, 4]
console.log(found); // 3
let mappedArr = arr2.map(num => num * 2); // Non-mutating
console.log(arr2); // [3, 1, 4]
console.log(mappedArr); // [6, 2, 8]

