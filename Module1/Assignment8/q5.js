// Write a function to filter an array of strings to hold only unique values

// Example:
let arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi'];
// Answer
function filterUnique(arr) {
    return [...new Set(arr)];
}
console.log(filterUnique(arr));
// Output: [ 'apple', 'banana', 'orange', 'kiwi' ]