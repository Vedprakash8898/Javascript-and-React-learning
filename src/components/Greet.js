import React from "react";

// Functional Components
// function Greet(){
//     return(
//         <h1>Hello Ved</h1>
//     )
// }

// Alaways Define With Arrow Function

const Greet = (props) => {
  const {name , lastName } = props;
  // console.log(props);
  return (
    <div>
      <h1>
        Hello {name} Surname {lastName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
