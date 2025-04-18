// Given 2 arrays with related objects, return a new array where objects having the same id
// from each of the arrays are merged. Try to achieve it with a complexity - O(n). 

// Example:
let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 4,
"first_name": "Amata",
}]

let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 4,
"email": "abraiden3@canalblog.com",
}, {
"id": 3,
"email": "dkilshall2@elpais.com",
}]

// Answer
function mergeById(arr1, arr2) {
    const map = new Map();
    arr1.forEach(item => map.set(item.id, item));
    arr2.forEach(item => {
        if (map.has(item.id)) {
            map.set(item.id, { ...map.get(item.id), ...item });
        }
    });
    return Array.from(map.values());
}

console.log(mergeById(userNames, userEmails));

// Output:

// [
//   { id: 1, first_name: 'Nicki', email: 'ncrozier0@squarespace.com' },
//   { id: 2, first_name: 'Raychel', email: 'rmcgrady1@cpanel.net' },
//   { id: 3, first_name: 'Demetris', email: 'dkilshall2@elpais.com' },
//   { id: 4, first_name: 'Amata', email: 'abraiden3@canalblog.com' }
// ]