import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import Homework from './Components/Homework';
import AddHomework from './Components/AddHomework';
import './App.css'
import uuid from 'uuid';



class App extends Component {
  state = {
    homework: [
      {
        id: uuid.v4(),
        title: 'Example: Calculus Test',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      homework: this.state.homework.map(homeworkz => {
        if (homeworkz.id === id) {
          homeworkz.completed = !homeworkz.completed
        }
        return homeworkz;
      })
    });
  }


  // Delete homework
  delhomework = (id) => {
    this.setState({ homework: [...this.state.homework.filter(homeworkz => homeworkz.id !== id)] });
  }


  //Add Homework
  AddHomework = (title) => {
    const newHomework = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ homework: [...this.state.homework, newHomework] })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddHomework AddHomework={this.AddHomework} />
          <Homework homework={this.state.homework} markComplete={this.markComplete}
            delhomework={this.delhomework} />
        </div>
      </div>
    );
  }
}

export default App;
