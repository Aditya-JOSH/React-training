// Write a function that sorts an array of objects by the key that is passed in the second
// argument, and in the order passed as the 3rd argiment.
// Example:
let users = [{
                "id": 1,
                "first_name": "Nicki",
                "email": "ncrozier0@squarespace.com",
                "date_of_birth": "2009/05/09",
                'gender':'Male',
                }, {
                "id": 2,
                "first_name": "Raychel",
                "email": "rmcgrady1@cpanel.net",
                "date_of_birth": "1996/11/05",
                'gender':'Female'
                }, {
                "id": 3,
                "first_name": "Demetris",
                "email": "dkilshall2@elpais.com",
                "date_of_birth": "2018/12/31",
                'gender':'Male'
                }, {
                "id": 4,
                "first_name": "Amata",
                "email": "abraiden3@canalblog.com",
                "date_of_birth": "2012/05/23",
                'gender':'Female'
                }];

// Answer
function sort(arr, key, order) {
    return arr.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else if (order === 'desc') {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}
console.log(sort(users, 'id', 'desc'));

// Output:

// [
//   {
//     id: 4,
//     first_name: 'Amata',
//     email: 'abraiden3@canalblog.com',
//     date_of_birth: '2012/05/23',
//     gender: 'Female'
//   },
//   {
//     id: 3,
//     first_name: 'Demetris',
//     email: 'dkilshall2@elpais.com',
//     date_of_birth: '2018/12/31',
//     gender: 'Male'
//   },
//   {
//     id: 2,
//     first_name: 'Raychel',
//     email: 'rmcgrady1@cpanel.net',
//     date_of_birth: '1996/11/05',
//     gender: 'Female'
//   },
//   {
//     id: 1,
//     first_name: 'Nicki',
//     email: 'ncrozier0@squarespace.com',
//     date_of_birth: '2009/05/09',
//     gender: 'Male'
//   }
// ]

console.log(sort(users, 'first_name', 'asc'));

// Output:
// [
//   {
//     id: 4,
//     first_name: 'Amata',
//     email: 'abraiden3@canalblog.com',
//     date_of_birth: '2012/05/23',
//     gender: 'Female'
//   },
//   {
//     id: 3,
//     first_name: 'Demetris',
//     email: 'dkilshall2@elpais.com',
//     date_of_birth: '2018/12/31',
//     gender: 'Male'
//   },
//   {
//     id: 1,
//     first_name: 'Nicki',
//     email: 'ncrozier0@squarespace.com',
//     date_of_birth: '2009/05/09',
//     gender: 'Male'
//   },
//   {
//     id: 2,
//     first_name: 'Raychel',
//     email: 'rmcgrady1@cpanel.net',
//     date_of_birth: '1996/11/05',
//     gender: 'Female'
//   }
// ]
