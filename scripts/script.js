
function calculate() {
   // Get input values
   var value1 = parseFloat(document.getElementById("value1").value);
   var value2 = parseFloat(document.getElementById("value2").value);
   var operator = document.getElementById("operator").value;

   // Perform calculation based on operator
   var result;
   switch (operator) {
       case '+':
           result = value1 + value2;
           break;
       case '-':
           result = value1 - value2;
           break;
       case '/':
           result = value1 / value2;
           break;
       case '*':
           result = value1 * value2;
           break;
       default:
           result = "Invalid operator";
   }

   // Display result
   document.getElementById("result").innerHTML = "Result: " + result;
}



 






