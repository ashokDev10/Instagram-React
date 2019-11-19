import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Instagram from './Instagram/Instagram';
import DiscoverExplore from './Instagram/DiscoverExplore';
import Profile from './Instagram/Profile';
import EditProfile from './Instagram/accountEdit/EditProfile';

import Login from './Instagram/Login';
import InstaComment from './Instagram/InstaComment';

// const menu = ['login'];
// const Navigation = ({ menus }) => (
//   <div className="navigation">
//     <ul>
//       {menus.map(m => (
//         <Link to={m === 'login' ? '/' : `/${m}`}>
//           <li>{m}</li>
//         </Link>
//       ))}
//     </ul>
//   </div>
// );

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          {/* <Navigation menus={menu} /> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/insta" component={Instagram} />
            <Route
              exact
              path="/insta/discover-explore"
              component={DiscoverExplore}
            />
            <Route exact path="/insta/profile" component={Profile} />

            <Route exact path="/insta/profile/igtv" component={Profile} />
            <Route exact path="/insta/profile/saved" component={Profile} />
            <Route exact path="/insta/profile/tagged" component={Profile} />
            <Route exact path="/profile/edit" component={EditProfile} />

            <Route
              exact
              path="/profile/password/change/"
              component={EditProfile}
            />
            <Route
              exact
              path="/profile/manage_access/"
              component={EditProfile}
            />

            <Route exact path="/emails/settings/" component={EditProfile} />
            <Route
              exact
              path="/profile/contacthistory/"
              component={EditProfile}
            />
            <Route exact path="/emails/emailssent/" component={EditProfile} />
            <Route
              exact
              path="/session/loginactivity/"
              component={EditProfile}
            />
            <Route
              exact
              path="/accounts/privacysecurity/"
              component={EditProfile}
            />

            <Route exact path="/insta/comment" component={InstaComment} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
