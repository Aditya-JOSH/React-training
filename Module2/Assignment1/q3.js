// ● What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
        resolve('Test Resolve');
        } else {
        reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction:', err);
    });
    };
    
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block:', res);
    })
    .catch((err) => {
        console.log('Error in catch block:', err);
    });

//Answer:
// The output will depend on the random number generated. If the random number is greater than 0.5,
// the promise will resolve and print "Response in then block: Test Resolve". If the random number is less than or equal to 0.5,
// the promise will reject and print "Error caught in testAsyncFunction: Test Reject".
// The catch block in the promise chain will not be executed in this case because the error is already caught in the testAsyncFunction.
      

// ● What will be printed to the console?


const testAsyncFunction2 = () => {
    return Promise.reject('Test static reject');
    };
    
testAsyncFunction2()
    .then((res) => {
        console.log('Response in then block:', res);
    })
    .catch((err) => console.log('Error in catch block', err));

//Answer:
// The output will be "Error in catch block Test static reject".
// The promise is rejected immediately with the static error message 'Test static reject'.

      

// ● What will be printed to the console?

const testAsyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
        resolve('Test Resolve');
        } else {
        reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction:', err);
        throw new Error('Forced error');
    });
    };
    
testAsyncFunction3()
    .then((res) => {
        console.log('Response in then block:', res);
    })
    .catch((err) => {
        console.log('Error in catch block:', err);
    });

//Answer:
// The output will depend on the random number generated. If the random number is greater than 0.5,
// the promise will resolve and print "Response in then block: Test Resolve.",
// If the random number is less than 0.5, Then it rethrows a new error (throw new Error('Forced error')), which is caught by the outer .catch(), so it logs:
// Error caught in testAsyncFunction: Test Reject.
// Error in catch block: Error: Forced error
// Promise {<fulfilled>: undefined}
