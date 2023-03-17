import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

 class LifecycleA extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Ved'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props ,state) {
        console.log("LifecycleA getDerivedStateFromProps ")
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA componentDidmount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
    }

    getSnapshotBeforeUpdate(prevProps , prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate ")
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }


    changeState = () => {
        this.setState({
            name:'Prakash'
        })
    }


  render() {
    console.log('LifecycleA Render');
    return (
        <div>
      <div>LifecycleA</div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA