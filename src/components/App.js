import React, {Component} from 'react';
import BodyComponent from'./BodyComponent';
import HeaderComponent from './HeaderComponent';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderComponent/>
       <BodyComponent/>
      </div>
    );
  }
}

export default App;