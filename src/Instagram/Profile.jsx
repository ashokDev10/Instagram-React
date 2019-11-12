import React, { Component } from 'react';
import './Profile.scss';
import pro1 from './images/p1.jpeg';

class ProfileBlock extends Component {
  render() {
    return (
      <div className="profile-block">
        <div className="p-left">
          <img src={pro1} alt="" />
        </div>
        <div className="p-right">
          <h3>ux_database</h3>
          <div>
            <small>Edit Profile</small>
          </div>
          <i class="fas fa-cog"></i>

          <p id="txt1">
            <span>20</span>
            <small> posts</small>
            <span>240</span>
            <small> followers</small>
            <span>846</span>
            <small> following</small>
          </p>
          <h4>KhrisT YohaN 🌹 👩‍❤️‍👩 </h4>
          <p id="txt2">🎨 UX/UI Trends</p>
          <p id="txt2">🛠️ Tools</p>
          <p id="txt2">📕 Learning materials</p>
          <p id="txt2">👩‍💻 Job opportunities</p>
          <p id="txt2">💼 For sponsored content, like services</p>
        </div>
      </div>
    );
  }
}
class HighlightBlock extends Component {
  render() {
    return (
      <div className="highlight-block">
        <p>1</p>
      </div>
    );
  }
}
class PostBlock extends Component {
  render() {
    return (
      <div className="post-block">
        <p>1</p>
      </div>
    );
  }
}

class ProfilePage extends Component {
  render() {
    return (
      <div className="profile-page">
        <ProfileBlock />
        <HighlightBlock />
        <PostBlock />
      </div>
    );
  }
}
export default ProfilePage;
