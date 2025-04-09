// Do you think JSON.stringify would work for arrays as well? What about nested objects?

// Answer:
//
// JSON.stringify works for arrays and nested objects as well.
// It converts them into a JSON string representation.
//
// Example:
const arr = [1, 2, 3];
const nestedObj = { a: 1, b: { c: 2 } };
console.log(JSON.stringify(arr)); // "[1,2,3]"
console.log(JSON.stringify(nestedObj)); // "{"a":1,"b":{"c":2}}"

// What happens if we pass numbers, strings, undefined, null to JSON.stringify? 

// Answer:
// JSON.stringify converts numbers and strings to their string representation.
// It converts undefined to null.
// It converts null to null.  
// Example:
console.log(JSON.stringify(123)); // "123"
console.log(JSON.stringify("Hello")); // ""Hello""
console.log(JSON.stringify(undefined)); // undefined
console.log(JSON.stringify(null)); // null  


// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? 

//Answer:
// JSON.parse will throw an error if the string is not valid JSON.
// Example:
const invalidJsonString = "{ name: 'John' }"; // Invalid JSON
JSON.parse(invalidJsonString);
// Uncaught SyntaxError: Expected property name or '}' in JSON at position 2 (line 1 column 3)
//     at JSON.parse (<anonymous>)
//     at <anonymous>:1:6
        

// What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?

//Answer:
// If an invalid JSON string is passed to JSON.parse, it will throw an error and stop the execution of the program.
// Other parts of the code after that will not execute.