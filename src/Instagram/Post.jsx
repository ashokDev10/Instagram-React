import React, { Component } from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
import Save from './Save';
// import img from './images/01.jpg';
import img from './images2/5.jpg';
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
    return <img src={image} alt="" />;
  }
}
class Icons extends Component {
  state = {
    commentInput: '',
    postButton: true
  };
  enterComment = e =>
    this.setState({ commentInput: e.target.value, postButton: false });
  // enterComment=()=>this.setState(({commentInput}) => ({ commentInput: }))
  render() {
    const { postButton, commentInput } = this.state;
    const { share } = this.props;
    return (
      <div className="icon">
        <div className="media-icons">
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
        </div>
        <h6>1,652 likes</h6>
        <h5>
          behindwoods_official
          <span role="img"> What do you think? 😞🔥</span>
          <i id="i1" className="far fa-heart" />
        </h5>
        <Link to="./comment" style={{ textDecoration: 'none' }}>
          <h4>View all 57 comments</h4>
        </Link>

        <h5>
          massive_thinks
          <span role="img">This film will be come back for him 😍😞</span>
          <i className="far fa-heart" />
        </h5>
        <p>2 HOURS AGO</p>

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
    );
  }
}

export default Post;
