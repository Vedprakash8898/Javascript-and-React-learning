import React from "react";

// Functional Components
// function Greet(){
//     return(
//         <h1>Hello Ved</h1>
//     )
// }

// Alaways Define With Arrow Function

const Greet = (props) => {
  console.log(props);
  props.name = "ravi";
  return (
    <div>
      <h1>
        Hello {props.name} Surname {props.lastName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
