import React from 'react';
import './App.scss';
import Instagram from './Instagram/Instagram';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Instagram />
      </div>
    );
  }
}

export default App;
