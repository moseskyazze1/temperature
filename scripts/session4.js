//for(let i=0; i<=1000; i+=100){
    //console.log(i);
//}
///
//for(let i=10; i<=100; i++){
   //  console.log(i);
//}

// Exercise: Multiplication Table for X

// Use a for loop to generate and display the multiplication table for the number 5.
// The table should include values from 1 to 10

function multiplicationTable(){
    let x=prompt('Enter a number');
    let start=prompt("start point");
    let end=prompt("end point");
    
    document.write(`<h2> Multiplication table for ${x}</h2>`);
    for(let i=1; i<=10; i++){
        console.log(`<li> ${i}x${x}=${i*x}</li>`);
    }
}

//Write a program that prints the numbers from 1 to 20. 

//But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". 

//For numbers that are multiples of both 3 and 5, print "FizzBuzz

function multp2(){
    for(let i=1; i<=50; i++){
        if(i%3==0 && i%5==0){
            document.write("<li>FizzBuzz</li>");
         } else if(i%5==0){
            document.write("<li>Buzz</li>");
         } else if(i%3==0){
            document.write("<li>Fizz</li>");
         }else{
            document.write(`<li>${i}</li>`)
         }
        
    }
}