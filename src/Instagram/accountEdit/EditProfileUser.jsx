import React, { Component } from 'react';
import pro from '../images/my_dp.jpg';
import './EditProfileUser.scss';

class EditProfileUser extends Component {
  render() {
    return (
      <div className="edit-profile-user">
        <EditProfileBlockRight />
      </div>
    );
  }
}

class EditProfileBlockRight extends Component {
  state = {
    name: 'KhrisT YohaN 🌹👩‍❤️‍👩',
    username: 'khrist_yohan',
    website: 'khristyohan.com',
    bio: ' 📌Front End developer 🖥️📲',
    email: 'ashokaws1998@gmail.com',
    phoneNo: '+91 86680 21698'
  };

  render() {
    const { name, username, website, bio, email, phoneNo } = this.state;
    return (
      <div className="edit-profile-block-right">
        <div className="eb-left">
          <img src={pro} alt="" />
          <h5>Name</h5>
          <h5 id="h51">UserName</h5>
          <h5 id="h52">Website</h5>
          <h6>Bio</h6>
          <h5 id="h53">Email</h5>
          <h5 id="h54">Phone Number</h5>
          <h5 id="h55">Gender</h5>
          <h5 id="h56">Similar Account Suggestions</h5>
        </div>
        <div className="eb-right">
          <h3>khrist_yohan</h3>
          <span>Change Profile Photo</span>

          <ul>
            <li>
              <input type="text" value={name} />
            </li>
            <li>
              <input type="text" value={username} />
            </li>
            <li>
              <input type="text" value={website} />
            </li>
            <li>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={bio}
              ></textarea>
            </li>
            <li>
              <h6>Private Information</h6>
            </li>
            <li>
              <input type="text" value={email} />
            </li>
            <li>
              <input type="text" value={phoneNo} />
            </li>
            <li>
              <small>Male</small>
            </li>
          </ul>

          <input id="check" type="checkbox" />
          <p>
            Include your account when recommending similar accounts people might
            want to follow. <span>[ ? ]</span>
          </p>
          <button type="button">submit</button>
          <h2>Temporarily disable my account</h2>
        </div>
      </div>
    );
  }
}

export default EditProfileUser;
