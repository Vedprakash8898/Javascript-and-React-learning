import React from "react";

// HOC

const withCounter = (WrappedComponent) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
    //   return <WrappedComponent name="vedprakash" />;
     return  <WrappedComponent count = {this.state.count} incrementHandler={this.incrementHandler} />
    }
  }
  return withCounter;
};

export default withCounter;
