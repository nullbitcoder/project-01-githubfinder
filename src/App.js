import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe'; //creating a variable
    return (
      <Fragment>
        <h1>Hello {name}</h1> {/* using the variable*/}
      </Fragment>
    );
  }
}

export default App;

// '"class"=Apop' in JSX is className
// '<lab"for"='name'>Name</label> in JSX is htmlFor='name'
