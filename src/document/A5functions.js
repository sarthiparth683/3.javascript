import React from 'react'

const A5functions = () => {

    let function1 = () => {
       function greet(name) {
        console.log("hello, " + name + "!");
       }
       greet("JohnCena");
    };





    return (<>
        <h2><b><u>5.Function</u></b></h2>
        {function1()}
    </>)
};

export default A5functions; 