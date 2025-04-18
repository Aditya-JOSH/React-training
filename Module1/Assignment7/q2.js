// Write a function filterObj that will filter out all the keys of a flat object that have
// objects or arrays using Object.keys and Object.entries. Example:
let obj = {
                a:'Apple',
                b:['Basketball', 'Baseball'],
                c: {
                call: 'cellphone'
                },
                d: 'Dog'
            }
// Answer
function filterObject(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => {
            return typeof value !== 'object' || value === null;
        })
    );
}

console.log(filterObject(obj));

// Output: { a: 'Apple', d: 'Dog' }

