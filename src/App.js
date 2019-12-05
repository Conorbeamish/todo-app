import React, { Component } from 'react';
import Todos from "./components/Todos";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Job 1",
        completed: false
      },
      {
        id: 2,
        title: "Job 2",
        completed: true
      },
      {
        id: 4,
        title: "Job 3",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log(id)
  }

  render(){
    return(
      <div className="App">
        <Todos  todos={this.state.todos}
                markComplete={this.markComplete}
        />
      </div>
    );
  } 
}

export default App;
