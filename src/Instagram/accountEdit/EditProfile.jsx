import React, { Component } from 'react';
import './EditProfile.scss';
import EditProfileUser from './EditProfileUser';
import ChangePassword from './ChangePassword';

import InstaHead from '../InstaHead';
import InstagramFooter from '../InstagramFooter';
import { Switch, Route, Link } from 'react-router-dom';

const edit = () => <EditProfileUser />;
const password = () => <ChangePassword />;

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

          <ul>
            <li>Apps and Website</li>
            <li>Email and SMS</li>
            <li>Manage Contacts</li>
            <li>Privacy and</li>
            <li>Login Activity</li>
            <li>Emails from Instagram</li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/profile/edit" component={edit} />
          <Route exact path="/profile/password/change/" component={password} />
        </Switch>
      </div>
    );
  }
}

export default EditProfile;
