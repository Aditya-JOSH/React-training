// Take a function that accepts a function as a parameter (also known as callback function).
function test(callback){
callback();
}
function callbackFunc(){
console.log('Calling the callback function');
return 5;
}
// Explore the following cases - what is printed in the console, and what gets returned:
// ○ test(callbackFunc)
// ○ test(callbackFunc())
// ○ test(() => callbackFunc())

// Answer:
test(callbackFunc)
// Output: Calling the callback function
// Return value: undefined (because test function doesn't return anything)

test(callbackFunc()) 
// Output: Uncaught TypeError: callback is not a function
// it passes the return value of callbackFunc() (which is 5) to test, which is not a function

test(() => callbackFunc())
// arrow function is passed as a callback
// Output: Calling the callback function
// Return value: undefined (because test function doesn't return anything)


// What happens when you return callback() from the test function?
// Answer: 


function test(callback){
return callback();
}
function callbackFunc(){
console.log('Calling the callback function')
return 5;
}
test(callbackFunc);
// Output:
// Calling the callback function
// 5

// Return value: 5 (the return value of callbackFunc)


// What happens when you return callback from the test function? 
// Answer:

function test(callback){
    return callback;
}
function callbackFunc(){
    console.log('Calling the callback function')
    return 5;
}
test(callbackFunc);
// Output:
// ƒ callbackFunc(){
// console.log('Calling the callback function')
// return 5;
// }

// Return value: the function itself (callbackFunc), not its return value
