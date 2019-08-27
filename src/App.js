import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from './components/pages/About'
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: "Take out the trash",
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Dinner with wife",
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Call with a friend",
      //   completed: false
      // }
    ]
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({ todos: res.data })
      })
  }

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => {
            return todo.id !== id;
          }
          )]
        })
      })
  }

  //Add todo
  addTodo = (title) => {
    console.log("Title: ", title)

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      })
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }

    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // });
  }

  render() {
    console.log(this.state.todos);

    return (

      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>

                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  delTodo={this.delTodo}
                  markComplete={this.markComplete} />

              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
