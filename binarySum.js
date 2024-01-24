// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a, b) {
    let sum = a + b;
    let binaryArray = [];

    while(sum > 0) {
        binaryArray.unshift(sum % 2);
        sum = Math.floor( sum / 2);
    }

    return binaryArray.join("");
}