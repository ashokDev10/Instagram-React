import React, { Component } from 'react';
import './InstaHead.scss';
import compass from './images/compass.png';
import like from './images/like.png';
import profile from './images/profile.png';
import title from './images2/title.png';
import { Link } from 'react-router-dom';

class InstaHead extends Component {
  render() {
    return (
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
            <Link to="/insta/profile" style={{ textDecoration: 'none' }}>
              <img id="i1" src={profile} alt="" />
            </Link>

            <img id="i2" src={like} alt="" />
            <Link
              to="/insta/discover-explore"
              style={{ textDecoration: 'none' }}
            >
              <img id="i3" src={compass} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default InstaHead;
