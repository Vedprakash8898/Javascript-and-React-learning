import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name , lastName} = this.props
    // we can Destructer more if we have more props
    // const {state1 , state2} = this.state
    return (
      <h1>
        Welcome {name} also Knows as {lastName}
      </h1>
    );
  }
}

export default Welcome;
