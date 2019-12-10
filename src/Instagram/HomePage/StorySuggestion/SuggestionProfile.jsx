import React, { Component } from 'react';
import si1 from './StoryImage/s4.jpg';
import si2 from './StoryImage/s5.jpg';
import si3 from './StoryImage/s6.jpg';

class SuggestionPost extends Component {
  render() {
    const { image, userName, text, follow } = this.props;
    return (
      <div className="suggestion-profile">
        <p>
          <img src={image} alt="" />
          <h5>{userName}</h5>
          <span>{text}</span>
          <h4>{follow}</h4>
        </p>
      </div>
    );
  }
}

class SuggestionProfile extends Component {
  render() {
    return (
      <div className="suggestion-post">
        <h6>
          <small> Suggestions For You</small>
          <span>See All</span>
        </h6>

        <SuggestionPost
          image={si1}
          userName="hackaday"
          text="New to Instagram"
          follow="follow"
        />
        <SuggestionPost
          image={si2}
          userName="gadgetstricks"
          text="Followed by shyamala_meth"
          follow="follow"
        />
        <SuggestionPost
          image={si3}
          userName="shelmiyer.pcba"
          text="Follows you"
          follow="follow"
        />
      </div>
    );
  }
}

export default SuggestionProfile;
