import React, { Component } from 'react';
import { render } from 'react-dom';
import { Counter, User } from './feature-1';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Counter />
        <User />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
