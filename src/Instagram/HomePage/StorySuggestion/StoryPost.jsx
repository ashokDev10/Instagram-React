import React, { Component } from 'react';
import si1 from './StoryImage/s1.jpg';
import si2 from './StoryImage/s2.jpg';
import si3 from './StoryImage/s3.jpg';
import si4 from './StoryImage/s4.jpg';
import si5 from './StoryImage/s5.jpg';
import si6 from './StoryImage/s6.jpg';
import si7 from './StoryImage/s7.jpg';
import si8 from './StoryImage/s8.jpg';
import si9 from './StoryImage/s9.jpg';
import si10 from './StoryImage/s10.jpg';
import si11 from './StoryImage/s11.jpg';
import si12 from './StoryImage/s12.jpg';

class StoryProfile extends Component {
  render() {
    const { image, userName, time } = this.props;
    return (
      <div className="story-profile">
        <p>
          <div>
            <img src={image} alt="" />
          </div>
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

        <div className="story-scroll">
          <StoryProfile image={si1} userName="cs_clonite" time="11 hour ago" />
          <StoryProfile
            image={si2}
            userName="googleindia"
            time="2 minutes ago"
          />

          <StoryProfile image={si3} userName="beargrylls" time="20 hours ago" />
          <StoryProfile image={si4} userName="hackaday" time="3 hour ago" />
          <StoryProfile
            image={si5}
            userName="gadgetstricks"
            time="13 hour ago"
          />
          <StoryProfile image={si6} userName="katemoross" time="7 hour ago" />
          <StoryProfile
            image={si7}
            userName="shelmiyer.pcba"
            time="14 hour ago"
          />
          <StoryProfile
            image={si8}
            userName="i.m.pratikdabhi"
            time="14 hour ago"
          />
          <StoryProfile
            image={si9}
            userName="teamthrme5"
            time="41 minutes ago"
          />
          <StoryProfile
            image={si10}
            userName="7.7.7.7_hacker"
            time="8 hour ago"
          />
          <StoryProfile
            image={si11}
            userName="tedx_official"
            time="9 hour ago"
          />
          <StoryProfile
            image={si12}
            userName="oneplus_india"
            time="10 hour ago"
          />
        </div>
      </div>
    );
  }
}

export default StoryPost;
