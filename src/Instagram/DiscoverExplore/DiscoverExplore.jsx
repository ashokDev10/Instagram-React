import React, { Component } from 'react';
import './DiscoverExplore.scss';

import { Link } from 'react-router-dom';
import si1 from './StoryImage/s1.jpg';
import si2 from './StoryImage/s2.jpg';
import si3 from './StoryImage/s3.jpg';
import si4 from './StoryImage/s4.jpg';
import si5 from './StoryImage/s5.jpg';
import Post from './ExplorePost';
import InstaHead from '../InstagramHead/InstaHead';
import InstagramFooter from '../InstagramFooter/InstagramFooter';

import sp1 from './StoryImage/sp1.jpg';
import sp2 from './StoryImage/sp2.jpg';
import sp3 from './StoryImage/sp3.jpg';
import sp4 from './StoryImage/sp4.jpg';
import sp5 from './StoryImage/sp5.jpg';
import sp6 from './StoryImage/sp6.jpg';
import sp7 from './StoryImage/sp7.jpg';
import sp8 from './StoryImage/sp8.jpg';
import sp9 from './StoryImage/sp9.jpg';
import sp10 from './StoryImage/sp10.jpg';
import sp11 from './StoryImage/sp11.jpg';
import sp12 from './StoryImage/sp12.jpg';
import sp13 from './StoryImage/sp13.jpg';
import sp14 from './StoryImage/sp14.jpg';
import sp15 from './StoryImage/sp15.jpg';
import sp16 from './StoryImage/sp16.jpg';
import sp17 from './StoryImage/sp17.jpg';
import sp18 from './StoryImage/sp18.jpg';
import sp19 from './StoryImage/sp19.jpg';
import sp20 from './StoryImage/sp20.jpg';
import sp22 from './StoryImage/sp22.jpg';
import sp23 from './StoryImage/sp23.jpg';

class DiscoverPeople extends Component {
  render() {
    return (
      <div className="discover-page">
        <p>
          <span id="t1">Discover People</span>
          <Link to="/explore/people/suggested/">
            <span id="t2">See All</span>
          </Link>
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
              }
            ]}
          />
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

        <div className="end-post">
          <img src={si5} alt="" />
          <h5>i.m.pratikdabhi</h5>
          <p>Suggested for you'</p>
          <button>follow</button>
        </div>
      </div>
    );
  }
}

class ExplorePage extends Component {
  render() {
    return (
      <div className="explore-page">
        <p>Explore</p>
        <Post
          postlist={[
            {
              image: sp1,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '12'
            },
            {
              image: sp2,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '43'
            },
            {
              image: sp3,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '12'
            },
            {
              image: sp4,
              like: 'fas fa-heart',
              nolikes: '34',
              comment: 'fas fa-comment',
              nocomments: '42'
            },
            {
              image: sp5,
              like: 'fas fa-heart',
              nolikes: '24',
              comment: 'fas fa-comment',
              nocomments: '11'
            },
            {
              image: sp6,
              like: 'fas fa-heart',
              nolikes: '63',
              comment: 'fas fa-comment',
              nocomments: '23'
            },
            {
              image: sp7,
              like: 'fas fa-heart',
              nolikes: '28',
              comment: 'fas fa-comment',
              nocomments: '02'
            },
            {
              image: sp8,
              like: 'fas fa-heart',
              nolikes: '273',
              comment: 'fas fa-comment',
              nocomments: '126'
            },
            {
              image: sp9,
              like: 'fas fa-heart',
              nolikes: '83',
              comment: 'fas fa-comment',
              nocomments: '15'
            },
            {
              image: sp10,
              like: 'fas fa-heart',
              nolikes: '233',
              comment: 'fas fa-comment',
              nocomments: '13'
            },
            {
              image: sp11,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '12'
            },
            {
              image: sp12,
              like: 'fas fa-heart',
              nolikes: '73',
              comment: 'fas fa-comment',
              nocomments: '32'
            },
            {
              image: sp13,
              like: 'fas fa-heart',
              nolikes: '72',
              comment: 'fas fa-comment',
              nocomments: '04'
            },
            {
              image: sp14,
              like: 'fas fa-heart',
              nolikes: '92',
              comment: 'fas fa-comment',
              nocomments: '82'
            },
            {
              image: sp15,
              like: 'fas fa-heart',
              nolikes: '02',
              comment: 'fas fa-comment',
              nocomments: '9'
            },
            {
              image: sp16,
              like: 'fas fa-heart',
              nolikes: '06',
              comment: 'fas fa-comment',
              nocomments: '05'
            },
            {
              image: sp17,
              like: 'fas fa-heart',
              nolikes: '91',
              comment: 'fas fa-comment',
              nocomments: '19'
            },
            {
              image: sp18,
              like: 'fas fa-heart',
              nolikes: '64',
              comment: 'fas fa-comment',
              nocomments: '64'
            },
            {
              image: sp19,
              like: 'fas fa-heart',
              nolikes: '83',
              comment: 'fas fa-comment',
              nocomments: '35'
            },
            {
              image: sp20,
              like: 'fas fa-heart',
              nolikes: '34',
              comment: 'fas fa-comment',
              nocomments: '28'
            },

            {
              image: sp22,
              like: 'fas fa-heart',
              nolikes: '83',
              comment: 'fas fa-comment',
              nocomments: '35'
            },
            {
              image: sp23,
              like: 'fas fa-heart',
              nolikes: '34',
              comment: 'fas fa-comment',
              nocomments: '28'
            }
          ]}
        />
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
