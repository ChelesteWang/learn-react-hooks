import React, { Component } from 'react';
import { render } from 'react-dom';
import Feature1 from './feature-1';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Feature1 />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
