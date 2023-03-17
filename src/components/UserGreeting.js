import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

  return  this.state.isLoggedIn && <div>Welcome User</div>
      
      
      
      
      
      
      
    //   return this.state.isLoggedIn ? (
    //     <div>Welcome User</div>
    //   ) : (
    //     <div>Welcome Guest</div>
    //   );

      // Elements variable Approach
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome User</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if(this.state.isLoggedIn) {
    //     return(
    //         <div>
    //             Welcome User
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

    // return(
    //     <div>
    //         <h1>Conditional Rendering</h1>
    //         <div>Welcome User</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
