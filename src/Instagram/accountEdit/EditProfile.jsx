import React, { Component } from 'react';
import './EditProfile.scss';
import EditProfileUser from './EditProfileUser';
import InstaHead from '../InstaHead';
import InstagramFooter from '../InstagramFooter';
import { Switch, Route, Link } from 'react-router-dom';

const Posts = () => <EditProfileUser />;

class EditProfile extends Component {
  render() {
    return (
      <div>
        <InstaHead />
        <div className="edit-profile-page">
          <EditProfileBlockLeft
            editlist={[
              {
                text: 'Edit Profile',
                link: '/profile/edit'
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
          {editlist.map(el => (
            <Link to={el.link}>
              <div>
                <h3 style={{ textDecoration: 'none' }}>{el.text}</h3>
              </div>
            </Link>
          ))}

          <ul>
            <li>change password</li>
            <li>Apps and Website</li>
            <li>Email and SMS</li>
            <li>Manage Contacts</li>
            <li>Privacy and</li>
            <li>Login Activity</li>
            <li>Emails from Instagram</li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/profile/edit" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default EditProfile;
