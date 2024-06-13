// Define the convertTemperature function
function convertTemperature(value, fromUnit, toUnit) {
    let baseValue;
    if (fromUnit === "Fahrenheit") {
        baseValue = (value - 32) * (5/9);
    } else if (fromUnit === "Kelvin") {
        baseValue = value - 273.15;
    } else {
        baseValue = value; // Celsius is the base unit
    }

    let convertedValue;
    if (toUnit === "Fahrenheit") {
        convertedValue = (baseValue * (9/5)) + 32;
    } else if (toUnit === "Kelvin") {
        convertedValue = baseValue + 273.15;
    } else {
        convertedValue = baseValue; // If the target unit is Celsius
    }

    return convertedValue;
}

// Event listener for the convert button
document.getElementById('convertBtn').addEventListener('click', function() {
    let tempInput = parseFloat(document.getElementById('tempInput').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;

    // Validate the input
    if (isNaN(tempInput)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    // Convert the temperature
    let result = convertTemperature(tempInput, inputUnit, outputUnit);

    // Display the result
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
});
