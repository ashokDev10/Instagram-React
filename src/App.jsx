import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Instagram from './Instagram/Instagram';
import DiscoverExplore from './Instagram/DiscoverExplore';
import Profile from './Instagram/Profile';
import EditProfile from './Instagram/EditProfile';
import IGTV from './Instagram/IGTV';
import Login from './Instagram/Login';

const menu = [
  'login',
  'insta',
  'discover-explore',
  'profile',
  'EditProfile',
  'IGTV'
];
const Navigation = ({ menus }) => (
  <div className="navigation">
    <ul>
      {menus.map(m => (
        <Link to={m === 'login' ? '/' : `/${m}`}>
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
            <Route exact path="/" component={Login} />
            <Route exact path="/insta" component={Instagram} />
            <Route exact path="/discover-explore" component={DiscoverExplore} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/EditProfile" component={EditProfile} />
            <Route exact path="/IGTV" component={IGTV} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
