import React, { Component } from 'react';
import './HomePost.scss';
import { Link } from 'react-router-dom';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
import Save from './Save';
import hp1 from './HomeImage/hp1.jpg';
import hd1 from './HomeImage/hd1.jpg';

import like from './comImage/like.png';
import save from './comImage/save.png';

// import si3 from './StoryImage/s3.jpg';
// import si4 from './StoryImage/s4.jpg';
// import si5 from './StoryImage/s5.jpg';
// import si6 from './StoryImage/s6.jpg';
// import si7 from './StoryImage/s7.jpg';
// import si8 from './StoryImage/s8.jpg';
// import si9 from './StoryImage/s9.jpg';
// import si10 from './StoryImage/s10.jpg';
// import si11 from './StoryImage/s11.jpg';
// import si12 from './StoryImage/s12.jpg';

class HomePostBlock extends Component {
  state = {
    commentInput: '',
    postButton: true
  };
  enterComment = e =>
    this.setState({ commentInput: e.target.value, postButton: false });

  render() {
    const { postButton, commentInput } = this.state;

    const { PostDetails } = this.props;
    return (
      <>
        {PostDetails.map(pdl => (
          <div className="home-post-block ">
            <div className="header">
              <img src={pdl.userpro} alt="" />

              <p>
                {pdl.username} <span>...</span>
              </p>
              <b>{pdl.location}</b>

              {/* <i className="fas fa-ellipsis-h" /> */}
            </div>
            <img src={pdl.postImg} alt="" />
            <Icons
              si1={<i className="far fa-heart" />}
              si2={<i className="far fa-comment" />}
              share={[
                {
                  iname: 'instagram'
                },
                {
                  iname: 'facebook'
                },
                {
                  iname: 'twitter'
                },
                {
                  iname: 'whatsapp'
                }
              ]}
            />
            <div className="content">
              <h6>{pdl.likes} likes</h6>
              <h5>
                {pdl.username}
                <span role="img"> {pdl.caption}</span>
                <i id="i1" className="far fa-heart" />
              </h5>

              <p id="p4">
                {pdl.hastags1.map(has => (
                  <p id="p1">#{has}</p>
                ))}
              </p>
              {pdl.hastags2.map(has => (
                <p id="p2">@{has}</p>
              ))}

              <Link to="/insta/comment/" style={{ textDecoration: 'none' }}>
                <h4>{pdl.noofcomments}</h4>
              </Link>

              {pdl.comments.map(commenterlist => (
                <h5>
                  {commenterlist.username}
                  <span role="img">{commenterlist.comment}</span>
                  <i className="far fa-heart" />
                </h5>
              ))}

              <p id="p3">{pdl.postHour} HOURS AGO</p>

              <input
                name="commentInput"
                type="text"
                value={commentInput}
                placeholder="Add a comment..."
                onChange={this.enterComment}
              />
              <button type="button" disabled={postButton}>
                post
              </button>
            </div>
          </div>
        ))}
      </>
    );
  }
}

class HomePost extends Component {
  render() {
    return (
      <div className="insta-home-post">
        <HomePostBlock
          PostDetails={[
            {
              userpro: hd1,

              username: 'arunvijayno1',
              location: 'Tamilnadu, India',
              postImg: hp1,
              caption:
                'Verified It s a wrap! The journey of MAFIA was amazing.',
              noofcomments: 'View all 57 comments',

              hastags1: ['MAFIA ', 'action_movie', 'crime'],
              hastags2: [
                'karthicknaren_M.',
                'priyabhavanishankar',
                'prasanna_actor '
              ],

              likes: 2332,
              comments: [
                {
                  username: 'mr.bhupendra.vishwakarma',
                  comment: 'This is my favourite scenes from the video❤️❤️❤️',
                  commentHour: 6,
                  likes: 1,
                  replies: 1
                },

                {
                  username: 'speedshop_ming',
                  comment: 'This place is in my bucket list 😍',
                  commentHour: 6,
                  likes: 2,
                  replies: 3
                }
              ],
              postHour: 7
            }
          ]}
        />
      </div>
    );
  }
}

export class Icons extends Component {
  render() {
    const { share } = this.props;
    return (
      <div className="icon">
        <div className="media-icons">
          <Like
            i1={<img id="i1" src={like} alt="" />}
            i2={<i id="i2" className="fas fa-heart" />}
          />
          <Comment />
          <Share
            i1={<i className="fas fa-external-link-alt" />}
            i2={share.map(v => (
              <i id="sicons" className={`fab fa-${v.iname}`} />
            ))}
          />
          <Save
            i1={<img id="i1" src={save} alt="" />}
            i2={<i id="i2" className="fas fa-bookmark" />}
          />
        </div>
      </div>
    );
  }
}

export default HomePost;
