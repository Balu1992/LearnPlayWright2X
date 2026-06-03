let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
console.log(a);

// Explanation of the above code:
//6+7-6+5+6=18
// a=5, a++=5, ++a=7, --a=6, a--=5, ++a=6