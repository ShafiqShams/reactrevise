import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Call with a friend",
        completed: false
      }
    ]
  };

  //Toggle Complete
  markComplete = (id) => {
    console.log("from Appjs", id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;
      })
    });
  }

  //Delete Todo
  delTodo = (id) => {
    console.log('delete', id)
    this.setState({
      todos: [...this.state.todos.filter(todo => {
        return todo.id !== id;
      }
      )]
    });
  }

  //Add todo
  addTodo = (title) => {
    console.log("Title: ", title)

    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    console.log(this.state.todos);

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            delTodo={this.delTodo}
            markComplete={this.markComplete} />
        </div>
      </div>
    );
  }
}

export default App;
