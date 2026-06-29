let isLoggedIn = true;
let userName="Balaji";

if(isLoggedIn){
    if(userName==="Balaji"){
        console.log("Welcome, Balaji!");
    }else if(userName==="John"){
        console.log("No one can join the party");
    }else{
        console.log("U r guest");
    }
}
else{
    console.log("Please log in to continue");
}