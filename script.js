// All functions assume valid inputs to save time
// Takes a string as an input and returns that string backwards. 
function reverseString(inputString) {
    let newString = "";
    for (let i = (inputString.length - 1); i >= 0; i--) {
        newString = newString + inputString[i];
    }
    return newString;
}

// Accepts 3 integers as input and returns the largest of the 3
function newMax(first, second, third) {
    let max = first;
    if (second > max) {
        max = second;
    }
    if (third > max) {
        max = third;
    }
    return max;
}

// Calculates the factorial of an integer using recustion
function factorial(inputInt) {
    if (inputInt > 0) { 
        return inputInt + factorial(inputInt - 1);
    }
    return inputInt;
}

// calculates the nth (where n is an integer) entry of the Fibonacci sequence (does not include 0 in the sequence)
function fibonacci(inputInt) {
    // Converts n to work with arrays, changing 1 to 0 as arrays first index is 0
    convertedInt = inputInt - 1;
    // First 2 numbers are always the same and are needed to start calculations.
    let fibonacciArray = [1, 1];

    // Only add stuff if the desired index doesn't already exist
    if (convertedInt > 1) {
        for (let i = 0; i < convertedInt; i++) {
            // keeps adding the previous 2 numbers until we hit the index we need
            fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i+1]);
        }
    }
    return fibonacciArray[convertedInt];
}