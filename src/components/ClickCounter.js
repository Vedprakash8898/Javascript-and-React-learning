import React, { Component } from "react";
import withCounter from "./withCounter";
export class ClickCounter extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      count : 0
  //   }
  // }

  // incrementHandler = () => {
  //     this.setState(prevState => {
  //         return { count: prevState.count + 1 }
  //     })
  // }

  render() {
    // const {count} = this.state
    const { count, incrementHandler } = this.props;
    return <button onClick={incrementHandler}> Clicked {count} times</button>;
  }
}

export default withCounter(ClickCounter);
