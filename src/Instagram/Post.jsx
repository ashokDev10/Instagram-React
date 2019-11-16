import React, { Component } from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
import Save from './Save';
import img from './images/01.jpg';
import dp from './images/dp.jpg';
import like from './comImage/like.png';
import save from './comImage/save.png';

// icons

class Post extends Component {
  render() {
    return (
      <div className="post">
        <InstaPage />
      </div>
    );
  }
}

class InstaPage extends Component {
  render() {
    return (
      <div className="insta-page">
        <Header image1={dp} />
        <Img image={img} />
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
      </div>
    );
  }
}
class Header extends Component {
  render() {
    const { image1 } = this.props;
    return (
      <div className="header">
        <img src={image1} alt="" />

        <p>
          web_developer <span>...</span>
        </p>
        <b>Tamil Nadu, India</b>

        {/* <i className="fas fa-ellipsis-h" /> */}
      </div>
    );
  }
}
class Img extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="img">
        <img src={image} alt="" />
      </div>
    );
  }
}
class Icons extends Component {
  render() {
    const { share } = this.props;
    return (
      <div className="icon">
        <Like
          i1={<img id="i1" src={like} alt="" />}
          i2={<i id="i2" className="fas fa-heart" />}
          // i1={<i id="i1" className="far fa-heart" />}
          // i2={<i id="i2" className="fas fa-heart" />}
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
        <h6>423k likes</h6>
        <h5>
          behindwoods_official
          <span role="img"> This is so great 🔥</span>
          <i id="i1" className="far fa-heart" />
        </h5>
        <Link to="./comment" style={{ textDecoration: 'none' }}>
          <h4>View all 4 comments</h4>
        </Link>

        <h3>
          massive_thinks
          <span>Hi Beauty</span>
          😍😞
        </h3>
        <p>4 min ago</p>

        <input type="text" placeholder="Add a comment..." />
      </div>
    );
  }
}

export default Post;
