import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Instagram from './Instagram/Instagram';
import DiscoverExplore from './Instagram/DiscoverExplore';

const menu = ['insta', 'discover-explore'];
const Navigation = ({ menus }) => (
  <div className="navigation">
    <ul>
      {menus.map(m => (
        <Link to={m === 'insta' ? '/' : `/${m}`}>
          <li>{m}</li>
        </Link>
      ))}
    </ul>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation menus={menu} />
          <Switch>
            <Route exact path="/" component={Instagram} />
            <Route exact path="/discover-explore" component={DiscoverExplore} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
