import React from 'react'

const A5functions = () => {

    let function1 = () => {
        function greet(name) {
            console.log("hello, " + name + "!");
        }
        greet("JohnCena");
    };

    let function2 = () => {
        function addNumbers(num1, num2) {
            let sum = num1 + num2;
            return sum;
        }
        let result = addNumbers(5, 8);
        console.log("the sum is :", result);
    };

    let function3 = () => {
        function isEven(number) {
            if (number % 2 === 0) {
                return "The number is even."
            } else {
                return "The number is odd."
            }
        }
        let userNumber = prompt("Enter a number:");
        let message = isEven(userNumber);
        console.log(message);
    };

    let function4 = () => {
        function isPalindrome(word) {
            let cleanWord = word.toLowerCase();
            let reversedWord = cleanWord.split("").reversed().join();
            return cleanWord === reversedWord;
        }
        let userWord = prompt("Enter a word");
        let isPalindromeResult = isPalindrome(userWord);
        if (isPalindromeResult) {
            console.log("The word is a palindrome!");
        } else {
            console.log("The word is not a palindrome.");
        }
    };

    let function5 = () => {
        function calculateArea(length, width) {
            let area = length * width;
            return area;
        }
        let userLength = parseFloat(prompt("Enter the length:"));
        let userWidth = parseFloat(prompt("Enter the width:"));
        let rectangleArea = calculateArea(userLength, userWidth);
        console.log("The area of the ractangle is:", rectangleArea);
    };

    let function6 = () => {
        function celsiusToFahrenheit(celsius) {
            let fahrenheit = (celsius * 9 / 5) + 32;
            return fahrenheit;
        }
        let userCelsius = parseFloat(prompt("Enter temperature in Celsius:"));
        let fahrenheitTemp = celsiusToFahrenheit(userCelsius);
        console.log("Temperature in Fahrenheit:", fahrenheitTemp);
    };

    let function7 = () => {
        function isMultipleOf5(number) {
            return number % 5 === 0;
        }
        let userNumber = parseInt(prompt("Enter a number: "));
        let isMultiple = isMultipleOf5(userNumber);

        if (isMultiple) {
            console.log("The number is multiple of 5.");
        } else {
            console.log("The number is not a multiple of 5.");
        }
    };

    let function8 = () => {
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let minNumber = 10;
        let maxNumber = 25;
        let randomNumber = generateRandomNumber(minNumber, maxNumber);
        console.log("Random number's result", minNumber, "and", maxNumber, ":", randomNumber);
    };

    let function9 = () => {
        // Leap Year
        function isleapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
        let yearToCheck = prompt("Enter a year");
        if (isleapYear(yearToCheck)) {
            console.log(yearToCheck + "is a leap year.");
        } else {
            console.log(yearToCheck + "is not a leap year.");
        }
    };

    let function10 = () => {
        // Find Maximum number
        function findMax(num1, num2, num3) {
            let max = num1;
            if (num2 > max) {
                max = num2;
            }
            if (num3 > max) {
                max = num3;
            }
            return max;
        }
    };

    return (<>
        <h2><b><u>5.Function (need 100 eg.)</u></b></h2>
        {/* {function1()} */}
        {/* {function2()} */}
        {/* {function3()} */}
        {/* {function4()} */}
        {/* {function5()} */}
        {/* {function6()} */}
        {/* {function7()} */}
        {/* {function8()} */}
        {/* {function9()} */}
        {/* {function10()} */}
    </>)
};

export default A5functions; 