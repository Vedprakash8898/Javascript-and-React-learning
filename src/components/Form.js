import React, { Component } from 'react'

 class Form extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      comments:"" ,
      topic:'react'
    }
  }

  handleUsernameChange = (ev) => {
    this.setState({
      username: ev.target.value
    })

  }

  handleCommentsChange = (ev) => {
    this.setState({
      comments: ev.target.value
    })
  }

  handleTopicChange = (ev) => {
    this.setState({
      topic: ev.target.value
    })
  }

  handleSubmit =  (ev) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    ev.preventDefault();
  }


  render() {
    const { username ,comments ,topic} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} 
        onChange={this.handleUsernameChange} />
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </div>
      </form>
    )
  }
}

export default Form