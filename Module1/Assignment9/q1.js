// ● Write a function to check deep equality of two nested objects/arrays

//Example:
let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};
let obj2 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

// Answer
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual(obj1, obj2));
// Output: true