// This is a demo abt FUNCTONS.
var a=20;
function greet(){
    var a=10;
    console.log("Value of a is:"+a); //LOCAL scope
}
console.log("Value of a outside function is:"+a); //GLOBAL scope
greet();