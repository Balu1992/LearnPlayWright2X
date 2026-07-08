let day=3;
switch(day){
    case 1:
        console.log("Monday");  
        
    case 2:
        console.log("Tuesday");
               
    case 3:
        console.log("Wednesday");
      
    default :
        console.log("Invalid day");
}
//If no break statement is used in the switch statement, then all the cases after the matching case will be executed. This is known as "fall-through" behavior. In this example, since day is 3, it will print "Wednesday" and then continue to execute the default case, printing "Invalid day".