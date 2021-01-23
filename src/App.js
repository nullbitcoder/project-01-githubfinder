import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars'; //create method as part of the class

  render() {
    const name = 'John Doe'; //creating a variable
    return (
      <div className='App'>
        <h1>Hello {this.foo()}</h1> {/* using class method wiht JSX*/}
      </div>
    );
  }
}

export default App;

// '"class"=Apop' in JSX is className
// '<lab"for"='name'>Name</label> in JSX is htmlFor='name'

//use "Fragments to replace <div className='App'></div>
//can also use <> </> , but this can lead to some problems. Dont use.
