// Do the same using switch case.

let age = 25;
switch (true) {
    case age <= 12:
        console.log("child");
        break;
    case age >= 13 && age <= 18:
        console.log("teen");
        break;
    case age > 18:
        console.log("adult");
        break;
    default:
        console.log("Invalid age");
}

// Output: adult