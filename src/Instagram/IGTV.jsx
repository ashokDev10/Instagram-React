import React, { Component } from 'react';
import './IGTV.scss';
import pic1 from './images2/1.jpg';
import pic2 from './images2/2.jpg';
import pic3 from './images2/3.jpg';
import pic4 from './images2/4.jpg';
import pic5 from './images2/5.jpg';
import pic6 from './images2/6.jpg';
import pic7 from './images2/7.jpg';
import pic8 from './images2/8.jpg';
import pic9 from './images2/9.jpg';
import pic10 from './images2/10.jpg';
import pic11 from './images2/11.jpg';
import pic12 from './images2/12.jpg';
import pic13 from './images2/13.jpg';
import pic14 from './images2/14.jpg';
import pic15 from './images2/15.jpg';
import pic16 from './images2/16.jpg';

import './Profile.scss';
import post from './comImage/post.png';
import igtv from './comImage/igtv.png';
import save from './comImage/save.png';
import tag from './comImage/tag.png';
import settings from './LogImage/settings.png';
import InstaHead from './InstaHead';
import { Link } from 'react-router-dom';
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
            <li id="li2">
              <p>
                <span>
                  <img src={post} alt="" />
                  post
                </span>
              </p>
            </li>
            <li id="li1">
              <p>
                <img src={igtv} alt="" />
                IGTV
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
        <IGTV />
       
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

class IGTV extends Component {
  render() {
    return (
      <div className="IGTV-page">
        <div className="IGTV-container">
          <IGTVBlock image={pic1} />
          <IGTVBlock image={pic2} />
          <IGTVBlock image={pic3} />
          <IGTVBlock image={pic4} />
          <IGTVBlock image={pic5} />
          <IGTVBlock image={pic6} />
          <IGTVBlock image={pic7} />
          <IGTVBlock image={pic8} />
          <IGTVBlock image={pic9} />
          <IGTVBlock image={pic10} />
          <IGTVBlock image={pic11} />
          <IGTVBlock image={pic12} />
          <IGTVBlock image={pic13} />
          <IGTVBlock image={pic14} />
          <IGTVBlock image={pic15} />
          <IGTVBlock image={pic16} />
        </div>
        
      </div>
    );
  }
}
class IGTVBlock extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="container">
        <img src={image} alt="" className="image" />
        <div class="middle">
          <div class="text">
            <i class="fas fa-play"></i>
            <span>23</span>
            <i class="fas fa-comment"></i>
            <span>4</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
