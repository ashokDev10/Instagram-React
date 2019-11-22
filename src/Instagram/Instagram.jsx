import React, { Component } from 'react';
import './Instagram.scss';

import Footer from './Footer';
import StoryPost from './StoryPost';
// import DiscoverExplore from './DiscoverExplore';
import SuggestionProfile from './SuggestionProfile';
import pro from './images/my_dp.jpg';
import InstaHead from './InstaHead';
import { Link } from 'react-router-dom';
import HomePost from './HomePost';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <InstaHead />

        <div className="insta-body">
          <div className="insta-post">
            <HomePost />
          </div>
          <div className="profile-stories">
            <div className="profile">
              <p>
                <Link to="/insta/profile" style={{ textDecoration: 'none' }}>
                  <img src={pro} alt="" />
                </Link>
                <Link to="/insta/profile" style={{ textDecoration: 'none' }}>
                  <h5>khrist_yohan</h5>
                </Link>

                <span>Khrist YohaN</span>
                <b>😍👨‍⚖️🧕</b>
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
