//function practice(){
    //let num1=99;
    //let num2=99;
    //if(num1>num2){
        //console.log("the num1 is greater than num2");
    //}else if(num1<num2){
        //console.log("the num2 is greater than num1");
    //}else{
        //console.log("the values are the same");
    //}

//}
////////////////challenge
//function getDriveLicense(){
    //var num = prompt("Enter your age");
    //let age=Number(prompt("enter your age"));
    //if(age>18){
       // console.log("Congratulations");
    
    //} else(num<18){
        //console.log("Sorry");
    //}
//}
/////////////////
function guessNumber(){
    //generalise random number
    let randonNumber=Math.floor(Math.random()*10)+1;
    //vs
    let userGuess=prompt("guess the number between 1 and 10");

//check if guess is correct
if(userGuess==randonNumber){
    console.log("congratulations you guessed the number");

}else{
    console.log("sorry, thats not the Number. the number was"+randonNumber);
}
}


//database simulation
let userName="kyazzemoses123@yahoo.com";
let password="Moses";

//create a login function
function login(){
    //get username and password from the user
    let unameInput=prompt("Enter your email");
    let upassINPUT=prompt("Enter your password");
    //compare the inputs with the DB data
    if(unameInput===userName && upassINPUT===password){
        console.log("wecome to the system");
    }else{
        console.log("Invalid credentials");
    }

}