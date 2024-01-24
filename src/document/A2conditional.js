import React from 'react'

const A2ifelse = () => {
    let ifelse1 = () => {
        console.log("For Testing Purpose");
    }

    let switch1 = () => {
        //code to be executed
    }

    let ternaryOperator1 = () => {
        let age = 23;
        let drive = age >= 18 ? "yes, you can drive" : "No, you canno't drive";
        console.log(drive);
    }

    return (<>
        <h2><b><u>2.Conditional Statements.</u></b></h2>
        {/* {ifelse1()} */}
        {/* {switch1()} */}
        {/* {ternaryOperator1()}  */}
    </>)
};

export default A2ifelse; 