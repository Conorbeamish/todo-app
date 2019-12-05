import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import './App.css';
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Job 1",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Job 2",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Job 3",
        completed: false
      }
    ]
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo = {this.delTodo}
          />
        </div>
      </div>
    );
  } 
}

export default App;
