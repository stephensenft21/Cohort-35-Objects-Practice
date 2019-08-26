console.log("Hello, world");

const firstName = "Stephen";
const lastName = "Senft";

let fullName = () => {
    let myName = `${firstName} ${lastName}`;
    console.log("myName is", myName);
};

fullName();




const crayonColors = ["green", "blue", "red"];
const fullBox = 4

function addColor(newColor) {
    crayonColors.push(newColor);
    return crayonColors.length;
}
/* In JavaScript, return statements cease execution in a function and return a value to the caller; 
JavaScript functions require an explicit return statement for returning the result of an expression (the value) from a function. 
When a return statement is not present, 
the interpreter automatically returns undefined.*/

let crayonBoxNumber = addColor("mulberry");
if (crayonBoxNumber < fullBox) {
    console.log("pick more colors");

} else {
    console.log("your box is full")
}
