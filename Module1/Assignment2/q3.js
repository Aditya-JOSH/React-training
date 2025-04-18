// Use let and const to create arrays and objects. Try modifying, deleting properties within
// the array or object. What do you expect to happen in both cases? What actually
// happens in both cases. What is the difference between an object declared as a let or a
// const variable?

let a = ["a", "b", "c"];
a.push("d");
a.pop();
console.log(a);
// ["a", "b", "c"]
a=["e", "f", "g"];
console.log(a);
// ["e", "f", "g"]

const b = ["a", "b", "c"];
b.push("d");
console.log(b);
// ["a", "b", "c", "d"]
b=["e", "f", "g"];
// Uncaught TypeError: Assignment to constant variable.

let c = {
    name: "Aditya",
    age: 20,
    city: "Pune"
}

c.name = "Aditya Patil";    
delete c.age;
console.log(c);
// { name: 'Aditya Patil', city: 'Pune' }

const d = {
    name: "Aditya",
    age: 20,
    city: "Pune"
}
d.name = "Aditya Patil";
delete d.age;
console.log(d);
// { name: 'Aditya Patil', city: 'Pune' }


//Understanding : Declaring an object/array with const means the reference (memory address) can't change. But the data at that reference can be modified.
// let: More flexible — allows both internal modifications and reassignment.

// const: More strict — allows only internal modifications but not reassignment.