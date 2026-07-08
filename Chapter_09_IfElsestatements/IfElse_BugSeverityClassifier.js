let bug_score=8;
if(bug_score>9 || bug_score===10){
    console.log("Critical Bug");
}else if(bug_score>7 || bug_score===8){
    console.log("Major Bug");
}else if(bug_score>4 || bug_score===6){
    console.log("Minor Bug");
}else if(bug_score>1 || bug_score===3){
    console.log("Trivial Bug");
}else{
    console.log("Invalid Bug Score");
}