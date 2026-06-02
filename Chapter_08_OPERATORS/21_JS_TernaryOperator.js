//let age1=18;
//let voting_age=age>=18?"Eligible to vote":"Not eligible to vote";
//console.log(voting_age); // Eligible to vote

let a=10;
a+=10;
console.log("A=",a); // A=20

let b=20;
b=+10;
console.log("B=",b); // B=10

let responseTime=200;
let message=responseTime>200?"Slow response":"Fast response";
console.log("Response time is:",message); // Response time is: Fast response

////////////////////////////////////////////////////
//Nested ternary operator
let age=30;
let ageCount=age<18?"Minor":
        age<65?"Adult":
            age<100?"Senior citizen":"Not a human being";
console.log(`Person belongs to age group: ${ageCount}`); // Person belongs to age group: Senior citizen