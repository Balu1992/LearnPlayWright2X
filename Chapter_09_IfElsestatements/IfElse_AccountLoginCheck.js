let account_attempt=2;
if(account_attempt===0){
    console.log("Login Successful");
}else if(account_attempt===2){
    console.log("1 attempt left before lockout");
}else if(account_attempt===3){
    console.log("Account is locked out- Contact support");
}