import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
      console.log('***********Pure Components Render *********');
    return (
      <div>
        Pure components {this.props.name}
      </div>
    )
  }
}

export default PureComp