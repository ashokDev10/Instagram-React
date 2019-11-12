import React, { Component } from 'react';
import './DiscoverExplore.scss';
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

class DiscoverPeople extends Component {
  render() {
    return (
      <div className="discover-page">
        <p>
          <span id="t1">Discover People</span> <span id="t2">See All</span>
        </p>
        <div className="discover-block">
          <DiscoverBlock
            image={pro1}
            userName="cs_clonite"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro2}
            userName="chaalpritam"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro3}
            userName="elon_musk "
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro4}
            userName="bill_gates"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro5}
            userName="mark_cuban"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro6}
            userName="naveenmuccara"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro7}
            userName="vignesh"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro8}
            userName="purushoth"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro9}
            userName="vignesh"
            text="Suggested for you"
            follow="follow"
          />
          <DiscoverBlock
            image={pro10}
            userName="purushoth"
            text="Suggested for you"
            follow="follow"
          />
        </div>
      </div>
    );
  }
}

class DiscoverBlock extends Component {
  render() {
    const { image, userName, text, follow } = this.props;
    return (
      <div className="discover-post">
        <img src={image} alt="" />
        <h5>{userName}</h5>
        <p>{text}</p>
        <button>{follow}</button>
      </div>
    );
  }
}

class ExplorePage extends Component {
  render() {
    return (
      <div className="explore-page">
        <p>Explore</p>
        <div className="explore-post">
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
          <ExplorePost image="https://placeimg.com/400/500/random" />
        </div>
      </div>
    );
  }
}
class ExplorePost extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="explore-image">
        <img src={image} alt="" />
      </div>
    );
  }
}

class DiscoverExplore extends Component {
  render() {
    return (
      <div className="discover-explore-page">
        <DiscoverPeople />
        <ExplorePage />
      </div>
    );
  }
}

export default DiscoverExplore;
