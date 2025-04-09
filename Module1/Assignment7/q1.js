// How will you create a new copy of the object below while updating the value of
// address.details[0] to “5“?
let obj = {
    name:"Harry Potter",
    age: 12,
    address: {
            details: ["4", "Privet Drive"],
            area:"Little Whinging",
            city: "Surrey",
            state: "England"
        }
}

// Answer
let newObj = {
    ...obj,
    address: {
        ...obj.address,
        details: [
            "5",
            ...obj.address.details.slice(1)
        ]
    }
}
console.log(newObj);

// Output
// {
//     name: 'Harry Potter',
//     age: 12,
//     address: {
//       details: [ '5', 'Privet Drive' ],
//       area: 'Little Whinging',
//       city: 'Surrey',
//       state: 'England'
//     }
//   }