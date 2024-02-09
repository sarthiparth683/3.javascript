import React from 'react'

const A14leetcode = () => {

    let q1 = () => {
        let arg = "length of a argument";
        let length1 = arg.length;
        console.log(length1);
    }

    let q2 = () => {

        function multiply(num1, num2) {
            return num1 * num2;
        }
        console.log(multiply(4, 7));
    }

    let q3 = () => {

        // Solution:
        var number = 2;

        while (number <= 8) {
            console.log(number);
            number += 2;
        }

    }


    let q4 = () => {

        // Solution:
        var person = {
            name: "Alice",
            age: 28,
            isStudent: false
        };

        console.log(person)
    }
    let q5 = () => {

        // Solution:
        var person = {
            name: "Alice",
            age: 28,
            isStudent: false
        };

        console.log(person)
    }
    let q6 = () => {
        function repeatString(str, times) {
            return str.repeat(times);
        }
        let az = repeatString("hello", 30);
        console.log(az); // "hellohellohello"
    }
    let q7 = () => {
        function reverseArray(arr) {
            return arr.reverse();
        }

        let hh = reverseArray([1, 2, 3, 4, 5]);
        console.log(hh); // [3, 2, 1] 
    }
    let q8 = () => {
        function findMax(numbers) {
            return Math.max(...numbers);
        }

        // Example usage:
        console.log(findMax([5, 2, 1])); // 9

    }
    let q9 = () => {
        function generateMultiplicationTable(number) {
            for (let i = 1; i <= 10; i++) {
                console.log(`${number} * ${i} = ${number * i + 3}`);
            }
        }

        // Example usage:
        generateMultiplicationTable(5);

    }
    let q10 = () => {
        // Solution 2
        let age = prompt("Enter your age:");

        if (age >= 18) {
            console.log("You are eligible to vote");
        } else {
            console.log("You are not eligible to vote");
        }

    }
    let q11 = () => {
        let is;
        console.log(is);  //undefined
    }
    let q12 = () => {
        // Solution 5
        let angle = -8;
        let angleType;

        if (angle < 90) {
            angleType = "Acute angle";
        } else if (angle === 90) {
            angleType = "Right angle";
        } else {
            angleType = "Obtuse angle";
        }

        console.log("The angle is a " + angleType);

    }
    let q13 = () => {
        class MyClass {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
            }
        }

    }
    let q14 = () => {

    }
    let q15 = () => {

    }
    let q16 = () => {

    }
    let q17 = () => {

    }
    let q18 = () => {

    }
    let q19 = () => {

    }
    let q20 = () => {

    }
    let q21 = () => {

    }








    return (<>
        <h2><b><u>A14leetcode (need 100 eg.)</u></b></h2>

        {/* {q1()} */}
        {/* {q2()} */}
        {/* {q3()} */}
        {/* {q4()} */}
        {/* {q5()} */}
        {/* {q6()} */}
        {/* {q7()} */}
        {/* {q8()} */}
        {/* {q9()} */}
        {/* {q10()} */}
        {/* {q11()} */}
        {/* {q12()} */}
        {/* {q13()} */}
        {/* {q14()} */}
        {/* {q15()} */}
        {/* {q16()} */}
        {/* {q17()} */}
        {/* {q18()} */}
        {/* {q19()} */}
        {/* {q20()} */}
    </>)
};

export default A14leetcode;   