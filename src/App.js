import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About"
import './App.css';
import uuid from "uuid";

class App extends Component {
  state = {
    todos: []
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
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo = {this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  } 
}

export default App;
