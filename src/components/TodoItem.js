import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {

  // function for dynamic styling
  getStyle = () => {
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }

    //ternary operator conditioning.
    return {
      padding: '10px',
      backgroundColor: '#f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} />
          {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  delTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
}

//Styles
// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff ',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
