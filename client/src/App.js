import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './index.css';
import Users from './Users.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <Users/>
      </div>
    )
  }
}

export default App;
