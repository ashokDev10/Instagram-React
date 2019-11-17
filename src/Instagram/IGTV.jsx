import React, { Component } from 'react';
import './IGTV.scss';

import pi1 from './postImage/p1.jpg';
import pi2 from './postImage/p2.jpg';
import pi3 from './postImage/p3.jpg';
import pi4 from './postImage/p4.jpg';
import pi5 from './postImage/p5.jpg';
import pi6 from './postImage/p6.jpg';
import pi7 from './postImage/p7.jpg';
import pi8 from './postImage/p8.jpg';
import pi9 from './postImage/p9.jpg';
import pi10 from './postImage/p10.jpg';
import pi11 from './postImage/p11.jpg';
import pi12 from './postImage/p12.jpg';
import pi13 from './postImage/p13.jpg';
import pi14 from './postImage/p14.jpg';
import pi15 from './postImage/p15.jpg';
import pi16 from './postImage/p16.jpg';
import pi17 from './postImage/p17.jpg';
import pi18 from './postImage/p18.jpg';
import pi19 from './postImage/p19.jpg';
import pi20 from './postImage/p20.jpg';
import pi21 from './postImage/p21.jpg';

class IGTV extends Component {
  render() {
    return (
      <div className="igtv-post">
        <div className="igtv-post-block">
          <IGTVPost
            postlist={[
              {
                image: pi1,
                like: 'fas fa-heart',
                nolikes: '23',
                comment: 'fas fa-comment',
                nocomments: '12'
              },
              {
                image: pi2,
                like: 'fas fa-heart',
                nolikes: '23',
                comment: 'fas fa-comment',
                nocomments: '43'
              },
              {
                image: pi3,
                like: 'fas fa-heart',
                nolikes: '23',
                comment: 'fas fa-comment',
                nocomments: '12'
              },
              {
                image: pi4,
                like: 'fas fa-heart',
                nolikes: '34',
                comment: 'fas fa-comment',
                nocomments: '42'
              },
              {
                image: pi5,
                like: 'fas fa-heart',
                nolikes: '24',
                comment: 'fas fa-comment',
                nocomments: '11'
              },
              {
                image: pi6,
                like: 'fas fa-heart',
                nolikes: '63',
                comment: 'fas fa-comment',
                nocomments: '23'
              },
              {
                image: pi7,
                like: 'fas fa-heart',
                nolikes: '28',
                comment: 'fas fa-comment',
                nocomments: '02'
              },
              {
                image: pi8,
                like: 'fas fa-heart',
                nolikes: '273',
                comment: 'fas fa-comment',
                nocomments: '126'
              },
              {
                image: pi9,
                like: 'fas fa-heart',
                nolikes: '83',
                comment: 'fas fa-comment',
                nocomments: '15'
              },
              {
                image: pi10,
                like: 'fas fa-heart',
                nolikes: '233',
                comment: 'fas fa-comment',
                nocomments: '13'
              },
              {
                image: pi11,
                like: 'fas fa-heart',
                nolikes: '23',
                comment: 'fas fa-comment',
                nocomments: '12'
              },
              {
                image: pi12,
                like: 'fas fa-heart',
                nolikes: '73',
                comment: 'fas fa-comment',
                nocomments: '32'
              },
              {
                image: pi13,
                like: 'fas fa-heart',
                nolikes: '72',
                comment: 'fas fa-comment',
                nocomments: '04'
              },
              {
                image: pi14,
                like: 'fas fa-heart',
                nolikes: '92',
                comment: 'fas fa-comment',
                nocomments: '82'
              },
              {
                image: pi15,
                like: 'fas fa-heart',
                nolikes: '02',
                comment: 'fas fa-comment',
                nocomments: '9'
              },
              {
                image: pi16,
                like: 'fas fa-heart',
                nolikes: '06',
                comment: 'fas fa-comment',
                nocomments: '05'
              },
              {
                image: pi17,
                like: 'fas fa-heart',
                nolikes: '91',
                comment: 'fas fa-comment',
                nocomments: '19'
              },
              {
                image: pi18,
                like: 'fas fa-heart',
                nolikes: '64',
                comment: 'fas fa-comment',
                nocomments: '64'
              },
              {
                image: pi19,
                like: 'fas fa-heart',
                nolikes: '83',
                comment: 'fas fa-comment',
                nocomments: '35'
              },
              {
                image: pi20,
                like: 'fas fa-heart',
                nolikes: '34',
                comment: 'fas fa-comment',
                nocomments: '28'
              },
              {
                image: pi21,
                like: 'fas fa-heart',
                nolikes: '56',
                comment: 'fas fa-comment',
                nocomments: '64'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

class IGTVPost extends Component {
  render() {
    const { postlist } = this.props;
    return (
      <div className="container">
        {postlist.map(pi => (
          <div className="image-block">
            <img src={pi.image} alt="" className="image" />

            <div class="middle">
              <div class="text">
                <i class="fas fa-heart"></i>
                <span>{pi.nolikes}</span>
                <i class="fas fa-comment"></i>
                <span>{pi.nocomments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default IGTV;
