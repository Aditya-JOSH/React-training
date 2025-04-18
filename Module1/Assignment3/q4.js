// Accomplish the same using a while loop.

let arraySize = 25;
let a = new Array(arraySize);
let i = 0;
while (i < arraySize) {
    a[i] = i + 1;
    i++;
}
console.log("Array: ", a);
// Output: Array:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]