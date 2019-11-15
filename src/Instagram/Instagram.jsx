import React, { Component } from 'react';
import './Instagram.scss';
import Post from './Post';
import Footer from './Footer';
import StoryPost from './StoryPost';
// import DiscoverExplore from './DiscoverExplore';
import SuggestionProfile from './SuggestionProfile';
import pro from './images/pro.png';
import compass from './images/compass.png';
import like from './images/like.png';
import profile from './images/profile.png';
import title from './images2/title.png';
// import { Link } from 'react-router-dom';

// const IconNavi = ({ text }) => (
//   <div className="butnavi">
//     <Link to={text === 'Get gift for head' ? '/coin/HGift' : '/coin/TGift'}>
//       <p>{text}</p>
//     </Link>
//   </div>
// );

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="head">
          <div className="header-block">
            <div className="app-name">
              <div>
                <i className="fa fa-instagram" />
              </div>
              <img src={title} alt="" />
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <i className="fa fa-search" />
            </div>
            <div className="icons">
              <img id="i1" src={profile} alt="" />
              <img id="i2" src={like} alt="" />
              <img id="i3" src={compass} alt="" />
            </div>
          </div>
        </div>
        <div className="insta-body">
          <div className="insta-post">
            <Post />
          </div>
          <div className="profile-stories">
            <div className="profile">
              <p>
                <img src={pro} alt="" />
                <h5>khrist_yohan</h5>
                <span>Khrist YohaN </span>
              </p>
            </div>
            <div className="home-stories">
              <StoryPost />
              <SuggestionProfile />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Instagram extends Component {
  render() {
    return (
      <div className="instagram">
        <HomePage />
      </div>
    );
  }
}

export default Instagram;
