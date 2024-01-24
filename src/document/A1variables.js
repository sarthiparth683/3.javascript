import React from 'react'

const A1variables = () => {
  let variables = () => {
    var name1 = "var variable:-can be re-declared,updated and it's a global scope variable"; console.log(name1);
    let name2 = "let variable:- can be re-declared, cannot be updaated, it's a block scope variable."; console.log(name2);
    const name3 = "const variable:- cannot be re-declared or updated, it's a block scope variable."; console.log(name3);
    let name4;  // undefined
    console.log(name4);
  }

  return (<div>
    <h2><b><u>1.Variables</u></b></h2>
    <p>
      Topic :- <br />
      1. Functions <br />
      2. Conditionals <br />
      3. For loop <br />
      4. Arrays. <br />
      Logic building (core of programming). <br />
      Easy problem of each topic.(watch the solution). <br />
      One topic at a time. <br /> <br />

      <b><u>Prompt :-</u></b> function topic in javaScript (give me some easy and basic level question with solution and also explain those solution so that it would be easy for me to understand (the sequence of your answer will be like question , solution in code , and then the answers explanation) ), so that i can built strong logic.
    </p>
    {/* {variables()} */}
  </div>)
};

export default A1variables; 