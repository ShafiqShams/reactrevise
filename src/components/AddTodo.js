import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class AddTodo extends Component {


  state = {
    title: ''
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChangeTitle} />

        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}


AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}