import React, { Component } from 'react';
import './HomePost.scss';
import { Link } from 'react-router-dom';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
import Save from './Save';
import like from './comImage/like.png';
import save from './comImage/save.png';

import hp1 from './HomeImage/hp1.jpg';
import hd1 from './HomeImage/hd1.jpg';
import hp2 from './HomeImage/hp2.jpg';
import hd2 from './HomeImage/hd2.jpg';
import hp3 from './HomeImage/hp3.jpg';
import hd3 from './HomeImage/hd3.jpg';
import hp4 from './HomeImage/hp4.jpg';
import hd4 from './HomeImage/hd4.jpg';
import hp5 from './HomeImage/hp5.jpg';
import hd5 from './HomeImage/hd5.jpg';

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
                <span id="user"> {pdl.username}</span>
                <span id="caption" role="img">
                  {pdl.caption}
                </span>
                <i id="i1" className="far fa-heart" />
              </h5>
              {pdl.tag.map(t => (
                <p id="p2">@{t}</p>
              ))}

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
                  <span id="user">{commenterlist.username}</span>
                  <span id="caption" role="img">
                    {commenterlist.comment}
                  </span>
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
              tag: [],
              hastags1: ['MAFIA ', 'action_movie', 'crime'],
              hastags2: [
                'karthicknaren_M.',
                'priyabhavanishankar',
                'prasanna_actor '
              ],
              noofcomments: 'View all 57 comments',
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
            },
            {
              userpro: hd2,
              username: 'arunvijayno1',
              location: 'Tamilnadu, India',
              postImg: hp2,
              caption: 'Follow',
              tag: [],
              hastags1: [],
              hastags2: ['vectordaily_ . '],
              noofcomments: 'View all 122 comments',
              likes: 1052,
              comments: [
                {
                  username: 'mrju.yt',
                  comment: 'Like my tree in the garden',
                  commentHour: 6,
                  likes: 1,
                  replies: 1
                },
                {
                  username: 'k_rohit_shikarwa',
                  comment: 'Awesome work👏👏',
                  commentHour: 6,
                  likes: 2,
                  replies: 3
                }
              ],
              postHour: 6
            },
            {
              userpro: hd3,
              username: 'france_surya_fans',
              location: '',
              postImg: hp3,
              caption: 'This fan made 🔥🔥 of ',
              tag: [],
              hastags1: ['sooraraiPottru', 'surya', 'suryafans'],
              hastags2: ['surya_off'],
              noofcomments: 'View all 307 comments',
              likes: 1776,
              comments: [
                {
                  username: 'boondavies',
                  comment: '👏👏',
                  commentHour: 6,
                  likes: 1,
                  replies: 1
                },
                {
                  username: 'teem6us ',
                  comment: 'Awesome work 💛💛',
                  commentHour: 6,
                  likes: 2,
                  replies: 3
                }
              ],
              postHour: 5
            },
            {
              userpro: hd4,
              username: 'bangalore_btp',
              location: '',
              postImg: hp4,
              caption: 'Fan made Poster❤🔥 Follow',
              tag: ['bangalore_btp'],
              hastags1: ['Thalapathy64', 'MokkaPost'],
              hastags2: ['ThalapathyVIJAY'],
              noofcomments: 'View all 160 comments',
              likes: 1202,
              comments: [
                {
                  username: 'the_real_person_73',
                  comment: 'Vjd dear comrade paa athu',
                  commentHour: 6,
                  likes: 1,
                  replies: 1
                },
                {
                  username: 'vi_jai_surya',
                  comment: 'Vera level Bro 😈',
                  commentHour: 6,
                  likes: 2,
                  replies: 3
                }
              ],
              postHour: 10
            },
            {
              userpro: hd5,
              username: 'audi.page',
              location: 'India',
              postImg: hp5,
              caption: 'Audi SQ8 or BMW X6 M50i 😍',
              tag: ['spautomarinedetail', 'q8_nation'],
              hastags1: ['automotive', 'horsepower', 'audilove'],
              hastags2: ['.'],
              noofcomments: 'View all 42 comments',
              likes: 1052,
              comments: [
                {
                  username: 'mrju.yt',
                  comment: 'Like my tree in the garden',
                  commentHour: 6,
                  likes: 1,
                  replies: 1
                },
                {
                  username: 'k_rohit_shikarwa',
                  comment: 'Awesome work👏👏',
                  commentHour: 6,
                  likes: 2,
                  replies: 3
                }
              ],
              postHour: 6
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
