import React , {Component} from 'react';

class ClassClick extends Component {
    // constructor(){
    //     super();
    //     this.state = {

    //     }
    // }

    clickHandler() {
        console.log("Testing");
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
export default ClassClick;