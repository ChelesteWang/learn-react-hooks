import React, { Component } from 'react';
import { render } from 'react-dom';
import Feature1 from './feature-1';
import Feature2 from './feature-2';
import Feature3 from './feature-3';
import Feature4 from './feature-4';
import Feature5 from './feature-5'
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <Feature5 />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
