// Write a function that can stop execution of a function for the number of milliseconds sent as an argument
// Example:

// const func = async () => {
// console.log(“Printing before”)  
//  Call your function here eg. sleep(3000)
// console.log(“Printing after”)
// }

// Answer:
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function func() {
    console.log("Printing before");
    await sleep(3000); 
    console.log("Printing after");
}
func();
// Output:
// Printing before
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
// client.js:1 Printing after

// Explanation:
// The sleep function returns a promise that resolves after the specified number of milliseconds.