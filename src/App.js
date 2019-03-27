import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
        <NavigationBar />
        <div>
          <h1 id="main_title">Clothing App</h1>
          <Pictures />
        </div>
      </div>
    );
  }
}

class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="nav flex-column sidenav">
        <a className="nav-item" href="#">Home</a>
        <a className="nav-item" href="#">About</a>
        <a className="nav-item" href="#">Products</a>
      </nav>
    );
  }
}

class Pictures extends React.Component {
  render() {
    return(
      <img />
    );
  }
}

function FileFinder() {
  
}

export default App;
