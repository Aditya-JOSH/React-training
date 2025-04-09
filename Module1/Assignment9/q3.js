// Write a function that returns a nested key within an object:
obj = {
    name:"Harry Potter",
    age: 12,
    address: {
        details: ["4", "Privet Drive"],
        area: "Little Whinging",
        city: "Surrey",
        state: "England"
    }
}


//Answer
function getNestedKey(obj, key) {
    const keys = key.split('.');
    let result = obj;
    for (let k of keys) {
        if (result[k] !== undefined) {
            result = result[k];
        } else {
            return undefined;
        }
    }
    return result;
}
console.log(getNestedKey(obj, 'address.details.1'));

//Output: "Privet Drive"
