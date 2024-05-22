//function mult(num,num1){
    //let num=prompt("Enter a number:");
    //console.log(num*num1);

//}
//mult(10,3);
//mult(20,4);
//mult(6,4);

function taxCalculation(){
    var product=prompt("Enter the product name:");
    var price=prompt("Enter the price:");
    var qty=prompt("Enter a quantity:");

    const taxes=1.08;

    var subtotal=price*qty;
    var total=subtotal*taxes;

    console.log(product);
    console.log(subtotal);
    console.log(total);

}

function taxCalculation(){
    var num=prompt("Enter a number");
    var num1=prompt("Enter a number");
    var result=prompt("num+num1");

    console.log(total);

}

function getGPA(){
    
    var name=prompt("Enter a name");
    var grade101=Number(prompt("Enter the 101 grade:"));
    var grade102=Number(prompt("Enter the 102 grade:"));

    var gpa=(grade101+grade102)/2;

    document.write("Name:"+name)
    document.write("Gpa:"+gpa)

    document.getElementById("Student list").
    innerHTML+=`<li> Name: ${name} 
      GPA: ${gpa}</li>`;
}
