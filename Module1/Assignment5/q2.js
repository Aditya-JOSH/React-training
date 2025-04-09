// What do you think would happen if you pass an index beyond the range of the string? Or
// if you pass a negative index? Try it out.

// Answer:
//
// Passing an index beyond the range of the string will return undefined.
// Passing a negative index will also return undefined.
//
// Example:
const str = "Hello, world!";
console.log(str[100]); // undefined
console.log(str[-1]); // undefined