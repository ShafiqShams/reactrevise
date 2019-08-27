import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true
      },
      {
        id: 3,
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

  render() {
    console.log(this.state.todos);

    return (
      <div className="App">

        <Header />
        <Todos
          todos={this.state.todos}
          delTodo={this.delTodo}
          markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
