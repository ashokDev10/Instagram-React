import React, { Component } from 'react';
import './Profile.scss';

import Post from './ExplorePost';
import pro1 from './images/p1.jpeg';
import pro2 from './images/p2.jpeg';
import pro3 from './images/p3.jpeg';
import pro4 from './images/p4.jpeg';
import pro5 from './images/p5.jpeg';

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
        <HighlightPost image={pro2} text="TRAVELLER" />
        <HighlightPost image={pro3} text="TAMILAN" />
        <HighlightPost image={pro4} text="BIKE LOVE" />
        <HighlightPost image={pro5} text="RIDING LOVE" />
      </div>
    );
  }
}
class HighlightPost extends Component {
  render() {
    const { image, text } = this.props;
    return (
      <div className="highlight-post">
        <div>
          <img src={image} alt="" />
        </div>
        <p>{text}</p>
      </div>
    );
  }
}
class PostBlock extends Component {
  render() {
    return (
      <div className="post-block">
        <div className="profile-post-head">
          <ul>
            <li>
              <i class="fas fa-th"></i>
              posts
            </li>
            <li>
              <span>
                <i class="fab fa-youtube"></i>
                IGTV
              </span>
            </li>
            <li>
              <span>
                <i class="far fa-bookmark"></i>
                SAVED
              </span>
            </li>
            <li>
              <span>
                <i class="fas fa-tags"></i>
                tagged
              </span>
            </li>
          </ul>
        </div>
        <Post />
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
