function ConvertTemp(){
    let temperature=Number(prompt("Enter the temperature"));
    let scale=prompt("Select C to convert to celcius or F to convert to fahrenheit");
    if(scale=="C"){
        let C=(temperature-32)*5/9;
        document.getElementById("results1").innerHTML="Answer in celcius is:" + C;
        console.log(C);
    }else if(scale=="F"){
        let F=(temperature* 9/5)+32;
        document.getElementById("results2").innerHTML="Answer in fahrenheit is:" + F;
        console.log(F);
    }
}