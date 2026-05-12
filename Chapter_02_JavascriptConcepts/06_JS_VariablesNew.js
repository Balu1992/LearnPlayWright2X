var names=["Balaji","Navya","Sowkhya","Shaarvi"];
for(var i=0;i<names.length;i++){
    console.log("Names are:"+names[i]);
}
console.log("Total names are:"+i); 
// i is accessible here because var is function-scoped, not block-scoped. It will log 4, which is the length of the names array.
//Hence using var can lead to unintended consequences, especially in loops, as the variable is not limited to the block scope and can be accessed or modified outside of it.
// Hence var usage is generally discouraged in modern JavaScript development in favor of let and const, which provide better scoping rules and help prevent bugs related to variable hoisting and unintended global variables.