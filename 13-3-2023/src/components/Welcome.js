import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} also Knows as {this.props.lastName}
      </h1>
    );
  }
}

export default Welcome;
