import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>the code</code> for more awesomeness.
          </p>
          <a
            className="App-link"
            href="http://www.vintra.be/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jump to Vintra!
          </a>
        </header>
      </div>
    );
  }
}


export default withAuthenticator(App, true);
