import React, { Component } from 'react';
import pro1 from './images/p1.jpeg';
import pro2 from './images/p2.jpeg';
import pro3 from './images/p3.jpeg';
import pro4 from './images/p4.jpeg';
import pro5 from './images/p5.jpeg';
import pro6 from './images/p6.jpeg';
import pro7 from './images/p7.jpeg';
import pro8 from './images/p8.jpeg';
import pro9 from './images/p9.jpeg';
import pro10 from './images/p10.jpeg';

class StoryProfile extends Component {
  render() {
    const { image, userName, time } = this.props;
    return (
      <div className="story-profile">
        <p>
          <img src={image} alt="" />
          <h5>{userName}</h5>
          <span>{time}</span>
        </p>
      </div>
    );
  }
}

class StoryPost extends Component {
  render() {
    return (
      <div className="story-post">
        <h6>
          <small> Stories</small>
          <span>Watch All</span>
        </h6>

        <StoryProfile image={pro1} userName="cs_clonite" time="1 hour ago" />
        <StoryProfile image={pro2} userName="chaalpritam" time="3 hour ago" />
        <StoryProfile image={pro3} userName="elon_musk " time="4 hour ago" />
        <StoryProfile image={pro4} userName="bill_gates" time="5 hour ago" />
        <StoryProfile image={pro5} userName="mark_cuban" time="6 hour ago" />
        <StoryProfile image={pro6} userName="naveenmuccara" time="7 hour ago" />
        <StoryProfile image={pro7} userName="vignesh" time="8 hour ago" />
        <StoryProfile image={pro8} userName="purushoth" time="9 hour ago" />
        <StoryProfile image={pro9} userName="vignesh" time="8 hour ago" />
        <StoryProfile image={pro10} userName="purushoth" time="9 hour ago" />
      </div>
    );
  }
}

export default StoryPost;
