import React, { Component } from 'react';
import './Instagram.scss';
import Post from './Post';
import Footer from './Footer';
import StoryPost from './StoryPost';
// import DiscoverExplore from './DiscoverExplore';
import SuggestionProfile from './SuggestionProfile';
import pro from './images/pro.jpg';
import InstaHead from './InstaHead';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <InstaHead />

        <div className="insta-body">
          <div className="insta-post">
            <Post />
          </div>
          <div className="profile-stories">
            <div className="profile">
              <p>
                <img src={pro} alt="" />
                <h5>khrist_yohan</h5>
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
