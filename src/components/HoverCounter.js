import React, { Component } from "react";
import withCounter from "./withCounter";
export class HoverCounter extends Component {
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementHandler = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    // const {count} = this.state
    const {count , incrementHandler} = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementHandler}> Hovered {count} times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
