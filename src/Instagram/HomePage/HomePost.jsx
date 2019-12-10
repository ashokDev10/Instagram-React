import React, { Component } from 'react';
import './HomePost.scss';
import { Link } from 'react-router-dom';
import Like from './InstaPost/Like';
import Comment from './Comment';
import Share from './InstaPost/Share';
import Save from './InstaPost/Save';
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
                <LikeButton />
              </h5>
              {pdl.tag.map(t => (
                <p id="p2">@{t}</p>
              ))}

              {pdl.hastags1.map(has1 => (
                <span id="p1">#{has1}</span>
              ))}

              <p id="p4">
                {pdl.hastags2.map(has2 => (
                  <span id="p5">#{has2}</span>
                ))}
              </p>

              <Link to="/insta/comment/" style={{ textDecoration: 'none' }}>
                <h4>{pdl.noofcomments}</h4>
              </Link>

              {pdl.comments.map(commenterlist => (
                <h5>
                  <span id="user">{commenterlist.username}</span>
                  <span id="caption" role="img">
                    {commenterlist.comment}
                  </span>
                  <LikeButton />
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

class LikeButton extends Component {
  state = {
    liked: false
  };

  changeLike = () => this.setState(({ liked }) => ({ liked: !liked }));

  render() {
    const { liked } = this.state;
    return (
      <>
        {/* <i
          className={liked ? 'far fa-heart' : 'fas fa-heart'}
          onClick={this.changeLike}
        ></i> */}
        {liked ? (
          <i id="lik2" className="fa fa-heart" onClick={this.changeLike}></i>
        ) : (
          <i id="lik1" className="far fa-heart" onClick={this.changeLike}></i>
        )}
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
              tag: [
                'karthicknaren_M.',
                'priyabhavanishankar',
                'prasanna_actor '
              ],
              hastags1: ['MAFIA ', 'action_movie', 'crime'],
              hastags2: ['Thriller'],
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
              tag: ['vectordaily_ .'],
              hastags1: [],
              hastags2: [''],
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
              tag: ['surya_off'],
              hastags1: ['sooraraiPottru', 'surya', 'suryafans'],
              hastags2: [],
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
              hastags2: [],
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
