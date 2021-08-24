import './App.css';
import Main from './components/MainComponent'
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
