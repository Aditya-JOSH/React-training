// ● Write a recursive function to create a deep clone of a nested object


// Example:
let obj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};
//
// Answer
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}
console.log(deepClone(obj));
// Output: { a: 1, b: { c: 2, d: [ 3, 4 ] } }  