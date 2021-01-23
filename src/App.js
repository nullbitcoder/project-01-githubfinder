import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder'></Navbar>
      </div>
    );
  }
}

export default App;

// '"class"=Apop' in JSX is className
// '<lab"for"='name'>Name</label> in JSX is htmlFor='name'

//use "Fragments to replace <div className='App'></div>
//can also use <> </> , but this can lead to some problems. Dont use.
