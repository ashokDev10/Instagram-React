import React, { Component } from 'react';
import './DiscoverExplore.scss';
import si1 from './StoryImage/s1.jpg';
import si2 from './StoryImage/s2.jpg';
import si3 from './StoryImage/s3.jpg';
import si4 from './StoryImage/s4.jpg';
import si5 from './StoryImage/s5.jpg';
import Post from './ExplorePost';
import InstaHead from './InstaHead';
import InstagramFooter from './InstagramFooter';

class DiscoverPeople extends Component {
  render() {
    return (
      <div className="discover-page">
        <p>
          <span id="t1">Discover People</span> <span id="t2">See All</span>
        </p>
        <div className="discover-block">
          <DiscoverBlock
            discoverlist={[
              {
                image: si1,
                userName: 'cs_clonite',
                text: 'New to Instagram',
                follow: 'follow'
              },
              {
                image: si2,
                userName: 'googleindia',
                text: 'Suggested for you',
                follow: 'follow'
              },
              {
                image: si3,
                userName: 'gadgetstricks',
                text: 'Suggested for you',
                follow: 'follow'
              },
              {
                image: si4,
                userName: 'shelmiyer.pcba',
                text: 'New to Instagram',
                follow: 'follow'
              },
              {
                image: si5,
                userName: 'i.m.pratikdabhi',
                text: 'Suggested for you',
                follow: 'follow'
              }
            ]}
          />

          {/* 
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
          /> */}
        </div>
      </div>
    );
  }
}

class DiscoverBlock extends Component {
  render() {
    const { discoverlist } = this.props;
    return (
      <div className="discover-post">
        {discoverlist.map(dl => (
          <div className="post-list">
            <img src={dl.image} alt="" />
            <h5>{dl.userName}</h5>
            <p>{dl.text}</p>
            <button>{dl.follow}</button>
          </div>
        ))}
      </div>
    );
  }
}

class ExplorePage extends Component {
  render() {
    return (
      <div className="explore-page">
        <p>Explore</p>
        <Post />
      </div>
    );
  }
}

class DiscoverExplore extends Component {
  render() {
    return (
      <div>
        <InstaHead />
        <div className="discover-explore-page">
          <DiscoverPeople />
          <ExplorePage />
        </div>
        <InstagramFooter />
      </div>
    );
  }
}

export default DiscoverExplore;
