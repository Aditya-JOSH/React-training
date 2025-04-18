// What happens when you add a for loop/while loop/switch case block inside a function
// and use return instead of break? Do statements after the loop run? What is the return
// value? 
//Answer:
// It exits the entire function immediately, not just the loop/switch.
// Any code after that return inside the function will not run.

// explaination with code
function test() {
    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            return "Found 2"; // Exits the function
        }
        console.log(i); // This will not run after return
    }
    console.log("This won't run either"); // This won't run either
}
console.log(test()); 
// Output: 
// "0
//  1 
//  Found 2"


// Can we pass a return value from within a loop? Can you return from inside an if
// block? 
//Answer:
// Yes, you can return a value from within a loop or an if block.

// explaination with code
function findEvenNumber() {
    while (true) {
        let num = Math.floor(Math.random() * 10);
        if (num % 2 === 0) {
            return num; // Exits the function and returns the even number
        }
    }
}
console.log(findEvenNumber()); // Output: 0 (the first even number)

//What impact does that have?
//Answer:
// Exits the entire function

// Prevents any code after it from running

// Can simplify logic and avoid deeply nested code