import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe'; //creating a variable
    const foo = () => 'Bar'; //creating JavaScript Function
    return (
      <div className='App'>
        <h1>Hello {foo()}</h1> {/* using JavaScript Function wiht JSX*/}
      </div>
    );
  }
}

export default App;

// '"class"=Apop' in JSX is className
// '<lab"for"='name'>Name</label> in JSX is htmlFor='name'

//use "Fragments to replace <div className='App'></div>
//can also use <> </> , but this can lead to some problems. Dont use.
