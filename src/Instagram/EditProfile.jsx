import React, { Component } from "react";
import "./EditProfile.scss";
import pro1 from "./images/p1.jpeg";

class EditProfile extends Component {
  render() {
    return (
      <div className="edit-profile-page">
        <EditProfileBlock />
        <div className="instagram-all-footer">
          <ul>
            <li>about us</li>
            <li>Support</li>
            <li>press</li>
            <li>api</li>
            <li>jobs</li>
            <li>Privacy</li>
            <li>terms</li>
            <li>Directory</li>
            <li>profiles</li>
            <li>Hashtags</li>
            <li>language</li>

            <span>@ 2019 INSTAGRAM</span>
          </ul>
        </div>
      </div>
    );
  }
}
class EditProfileBlock extends Component {
  render() {
    return (
      <div className="edit-profile-block">
        <div className="EP-left">
          <div>
            <h3>Edit Profile</h3>
          </div>
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
        <div className="EP-right">
          <div className="eb-left">
            <img src={pro1} alt="" />
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
            <h3>ux_database</h3>
            <span>Change Profile Photo</span>

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
              <li>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </li>
              <li>
                <h6>Private Information</h6>
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <small>Male</small>
              </li>
            </ul>

            <input id="check" type="checkbox" />
            <p>
              Include your account when recommending similar accounts people
              might want to follow. <span>[ ? ]</span>
            </p>
            <button type="button">submit</button>
            <h2>Temporarily disable my account</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default EditProfile;
