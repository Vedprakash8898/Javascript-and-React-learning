import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Ved'
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props ,state) {
        console.log("LifecycleB getDerivedStateFromProps ")
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB componentDidmount");
    }


    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
    }

    getSnapshotBeforeUpdate(prevProps , prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate ")
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate');
    }



  render() {
    console.log('LifecycleB Render');
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB