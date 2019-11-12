import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Instagram from './Instagram/Instagram';
import DiscoverExplore from './Instagram/DiscoverExplore';
import Profile from './Instagram/Profile';

const menu = ['insta', 'discover-explore', 'profile'];
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
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
