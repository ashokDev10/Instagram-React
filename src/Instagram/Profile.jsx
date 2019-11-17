import React, { Component } from 'react';
import './Profile.scss';
import post from './comImage/post.png';
import igtv from './comImage/igtv.png';
import save from './comImage/save.png';
import tag from './comImage/tag.png';
import settings from './LogImage/settings.png';
import InstaHead from './InstaHead';
import Post from './ExplorePost';
import { Link } from 'react-router-dom';
import pro from './images/my_dp.jpg';
import hi1 from './HighlightImage/h1.jpg';
import hi2 from './HighlightImage/h2.jpg';
import hi3 from './HighlightImage/h3.jpg';
import hi4 from './HighlightImage/h7.jpg';
import hi5 from './HighlightImage/h5.jpg';
import hi6 from './HighlightImage/h6.jpg';
import hi7 from './HighlightImage/h4.jpg';

import InstagramFooter from './InstagramFooter';

class ProfileBlock extends Component {
  render() {
    return (
      <div className="profile-block">
        <div className="p-left">
          <img src={pro} alt="" />
        </div>
        <div className="p-right">
          <h3>khrist_yohan</h3>
          <div>
            <Link to="./profile/EditProfile" style={{ textDecoration: 'none' }}>
              <small>Edit Profile</small>
            </Link>
          </div>
          <img src={settings} alt="" />

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
        <HighlightPost image={hi1} text="CAMARA" />
        <HighlightPost image={hi2} text="Lightings" />
        <HighlightPost image={hi3} text="Set Engin" />
        <HighlightPost image={hi4} text="Heart Light" />
        <HighlightPost image={hi5} text="Love" />
        <HighlightPost image={hi6} text="TIMER" />
        <HighlightPost image={hi7} text="RANGOLI" />
      </div>
    );
  }
}
class HighlightPost extends Component {
  render() {
    const { image, text } = this.props;
    return (
      <div className="highlight-box">
        <div className="highlight-post">
          <div>
            <img src={image} alt="" />
          </div>
          <p>{text}</p>
        </div>
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
            <li id="li1">
              <p>
                <img src={post} alt="" /> <b>posts</b>
              </p>
            </li>
            <li id="li2">
              <p>
                <Link to="./profile/IGTV" style={{ textDecoration: 'none' }}>
                  <span>
                    <img src={igtv} alt="" />
                    IGTV
                  </span>
                </Link>
              </p>
            </li>
            <li id="li2">
              <p>
                <span>
                  <img src={save} alt="" />
                  SAVED
                </span>
              </p>
            </li>
            <li id="li2">
              <p>
                <span>
                  <img src={tag} alt="" />
                  tagged
                </span>
              </p>
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
      <div>
        <InstaHead />
        <div className="profile-page">
          <ProfileBlock />
          <HighlightBlock />
          <PostBlock />
        </div>
        <InstagramFooter />
      </div>
    );
  }
}
export default ProfilePage;
