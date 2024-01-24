import React from 'react'

const A3_loops1 = () => {

    let for1 = () => {
        // "SAMPLE"
        for (let i = 1; i <= 5; i++) {
            console.log(i + "Sarthi");
        }
    };



    let for2 = () => {
        const numbers = [5, 1, 8, 3];
        let smallest = numbers[3];
        // for (let i = 1; i < numbers.length; i++) {
        //     if (numbers[i] < smallest) smallest = numbers[i];
        // }
        // console.log("Smallest:", smallest);
        // console.log(numbers.length);
        console.log(numbers[2]); 
        console.log();  
        console.log(); 
        console.log();
        console.log();
    };















    let while1 = () => {
        let i = 2;
        while (i <= 7) {

            console.log(i);
            i++;
        }
    };





    let dowhile1 = () => {
        let i = 1;
        do {
            console.log(i);
            i++;
        } while (i <= 10);
    };



    let forof1 = () => {
        const fruits = ["apple", "banana", "PineApple", "Pomegranate", "Orange", "Litchi"];
        for (const anyName of fruits) {
            console.log("iterator " + anyName);
            console.log("fruits " + fruits);
        }
    };







    let forin1 = () => {
        const student = {
            name: "Parth Sarthi",
            age: 45,
            major: "Computer Science",
            city: "New York"
        };
        for (const key in student) {
            console.log("1 key = " + key);
            console.log("2 student = " + student);
            console.log("3 student[key] = " + student[key]);
            console.log(`4 ${key}: ${student[key]}`);
        }
    };







    let foreach1 = () => {
        const numbers = [1, 2, 3, 4, 5];
        numbers.forEach(number => number *= 2);
        console.log(numbers); // Output: [2, 4, 6, 8, 10]

    }


    return (<>
        <h2><b><u>3.loops</u></b></h2>
        {/* {for1()} */}
        {/* {for2()} */}
        {/* {while1()}; */}
        {/* {dowhile1()} */}
        {/* {forof1()} */}
        {/* {forin1()} */}
        {/* {foreach1()} */}
    </>)
};

export default A3_loops1;  