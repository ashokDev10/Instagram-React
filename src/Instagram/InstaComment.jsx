import React, { Component } from 'react';
import './InstaComment.scss';
import img1 from './images/01.jpg';
import InstaHead from './InstaHead';
import InstagramFooter from './InstagramFooter';
import dp from './images/dp.jpg';

class InstaComment extends Component {
  render() {
    return (
      <div className="insta-comment-page">
        <InstaHead />
        <div className="insta-comment-block">
          <InstaCommentBox />
        </div>
        <InstagramFooter />
      </div>
    );
  }
}
class InstaCommentBox extends Component {
  render() {
    return (
      <div className="insta-comment-box">
        <div className="insta-comment-left">
          <img src={img1} alt="" />
        </div>
        <div className="insta-comment-right">
          <div className="insta-comment-profile">
            <div className="comment-profile">
              <img src={dp} alt="" />

              <p>
                web_developer
                <b>
                  <i id="i1" className="fas fa-circle" /> Following
                </b>
                <span id="i2">...</span>
              </p>
              <small>Tamil Nadu, India</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InstaComment;
