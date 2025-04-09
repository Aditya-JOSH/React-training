// Use the typeof operator to find the types of different variables. Specially note what the
// typeof operator returns for arrays, null values and NaN. How can you find if a variable is
// an array or NaN besides typeof?

let a=3, b="a", c=2.5, d=true, e=null, f=undefined, g=Symbol("g"), h=BigInt(12345678901234567890), i=[1, 2, 3], j={key: "value"}, k=function() { return "Hello"; }, l=NaN;
console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // number
console.log(typeof d); // boolean
console.log(typeof e); // object        
console.log(typeof f); // undefined
console.log(typeof g); // symbol
console.log(typeof h); // bigint
console.log(typeof i); // object
console.log(typeof j); // object
console.log(typeof k); // function
console.log(typeof l); // number


// How can you find if a variable is an array or NaN besides typeof?

Array.isArray(variable)
Number.isNaN(variable)
