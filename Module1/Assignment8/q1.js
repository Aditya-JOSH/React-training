// Write a function mapBy specified key:
// Example:
let users = [{
                "id": 1,
                "first_name": "Nicki",
                "email": "ncrozier0@squarespace.com",
                "date_of_birth": "2009/05/09"
                }, {
                "id": 2,
                "first_name": "Raychel",
                "email": "rmcgrady1@cpanel.net",
                "date_of_birth": "1996/11/05"
            }];

// Answer
function mapBy(arr, key) {
    return arr.reduce((acc, obj) => {
      if (obj[key] !== undefined) {
        acc[obj[key]] = obj;
      }
      return acc;
    }, {});
  }
console.log(mapBy(users, 'first_name'));

// Output:

// {
//   Nicki: {
//     id: 1,
//     first_name: 'Nicki',
//     email: 'ncrozier0@squarespace.com',
//     date_of_birth: '2009/05/09'
//   },
//   Raychel: {
//     id: 2,
//     first_name: 'Raychel',
//     email: 'rmcgrady1@cpanel.net',
//     date_of_birth: '1996/11/05'
//   }
// }
