   
function convertTemperatureRange(startValue, endValue, scale) {
    if (scale === "C") {
        for (let temp = startValue; temp <= endValue; temp++) {
            let fahrenheit = (temp * 9/5) + 32;
            console.log(`${temp}°C = ${fahrenheit}°F`);
        }
    } else if (scale === "F") {
        for (let temp = startValue; temp <= endValue; temp++) {
            let celsius = (temp - 32) * 5/9;
            console.log(`${temp}°F = ${celsius}°C`);
        }
    } else {
        console.log("Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    }
}

const startValue = parseFloat(prompt("Enter starting temperature:"));
const endValue = parseFloat(prompt("Enter ending temperature:"));
const scale = prompt("Enter scale (C for Celsius, F for Fahrenheit):");

convertTemperatureRange(startValue, endValue, scale);