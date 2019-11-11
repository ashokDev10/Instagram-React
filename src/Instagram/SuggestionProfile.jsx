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
          image={pro1}
          userName="cs_clonite"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro2}
          userName="chaalpritam"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro3}
          userName="elon_musk "
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro4}
          userName="bill_gates"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro5}
          userName="mark_cuban"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro6}
          userName="naveenmuccara"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro7}
          userName="vignesh"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro8}
          userName="purushoth"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro9}
          userName="vignesh"
          text="Suggested for you"
          follow="follow"
        />
        <SuggestionPost
          image={pro10}
          userName="purushoth"
          text="Suggested for you"
          follow="follow"
        />
      </div>
    );
  }
}

export default SuggestionProfile;
