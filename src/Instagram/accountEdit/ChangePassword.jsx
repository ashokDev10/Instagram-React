import React, { Component } from 'react';
import pro from '../images/my_dp.jpg';
import './ChangePassword.scss';

class ChangePassword extends Component {
  render() {
    return (
      <div className="change-password">
        <ChangePasswordLeft />
        <ChangePasswordRight />
      </div>
    );
  }
}
class ChangePasswordLeft extends Component {
  render() {
    return (
      <div className="change-password-left">
        <img src={pro} alt="" />
        <h5 id="h51">Old Password</h5>
        <h5 id="h52">New Password</h5>

        <h5 id="h53">Confirm New Password</h5>
      </div>
    );
  }
}
class ChangePasswordRight extends Component {
  render() {
    return (
      <div className="change-password-right">
        <h3>khrist_yohan</h3>
        <ul>
          <li>
            <input type="text" />
          </li>
          <li>
            <input type="text" />
          </li>
          <li>
            <input type="text" />
          </li>
        </ul>
        <button type="submit">Change Password</button>
        <h2>forgot Password?</h2>
      </div>
    );
  }
}

export default ChangePassword;
