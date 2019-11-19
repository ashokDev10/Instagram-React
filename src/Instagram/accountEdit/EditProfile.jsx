import React, { Component } from 'react';
import './EditProfile.scss';
import EditProfileUser from './EditProfileUser';
import ChangePassword from './ChangePassword';
import Website from './Website';
import Email from './Email';
import ManageContacts from './ManageContacts';
import EmailsFromInsta from './EmailsFromInsta';
import LoginActivity from './LoginActivity';

import InstaHead from '../InstaHead';
import InstagramFooter from '../InstagramFooter';
import { Switch, Route, Link } from 'react-router-dom';

const edit = () => <EditProfileUser />;
const password = () => <ChangePassword />;
const website = () => <Website />;
const email = () => <Email />;
const contacts = () => <ManageContacts />;
const emailssent = () => <EmailsFromInsta />;
const login = () => <LoginActivity />;

class EditProfile extends Component {
  render() {
    return (
      <div>
        <InstaHead />
        <div className="edit-profile-page">
          <EditProfileBlockLeft
            editlist={[
              {
                text: 'change password',
                link: '/profile/password/change'
              },
              {
                text: 'Apps And Website',
                link: '/profile/manage_access/'
              },
              {
                text: 'Email And SMS',
                link: '/emails/settings/'
              },
              {
                text: 'Manage Contacts',
                link: '/profile/contacthistory/'
              },
              {
                text: 'Privacy and',
                link: '/profile/contacthistory/'
              },
              {
                text: 'Login Activity',
                link: '/session/loginactivity/'
              },
              {
                text: 'Emails from Instagram',
                link: '/emails/emailssent'
              }
            ]}
          />
        </div>
        <InstagramFooter />
      </div>
    );
  }
}
class EditProfileBlockLeft extends Component {
  // changeCheckBox = () => this.setState({ btndisable: false });

  render() {
    const { editlist } = this.props;
    return (
      <div className="edit-profile-block-left">
        <div className="EP-left">
          <Link to="/profile/edit">
            <div>
              <h3>Edit Profile</h3>
            </div>
          </Link>
          {editlist.map(el => (
            <Link to={el.link}>
              <ul>
                <li style={{ textDecoration: 'none' }}>{el.text}</li>
              </ul>
            </Link>
          ))}
        </div>
        <Switch>
          <Route exact path="/profile/edit" component={edit} />
          <Route exact path="/profile/password/change/" component={password} />
          <Route exact path="/profile/manage_access/" component={website} />
          <Route exact path="/emails/settings/" component={email} />
          <Route exact path="/profile/contacthistory/" component={contacts} />
          <Route exact path="/emails/emailssent" component={emailssent} />
          <Route exact path="/session/loginactivity/" component={login} />
        </Switch>
      </div>
    );
  }
}

export default EditProfile;
