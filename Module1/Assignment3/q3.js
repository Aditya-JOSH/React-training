// Declare a variable let arraySize = 25;. Using a for loop, add numbers from one
// onwards into an array till the arraySize is reached.

let arraySize = 25;
let a = new Array(arraySize);

for (let i=0; i<arraySize; i++) {
    a[i]=i+1;
}
console.log("Array: ", a);
// Output: Array:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]