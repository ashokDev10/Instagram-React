import React, { Component } from 'react';
import './Icons.scss';
import { Link } from 'react-router-dom';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
import Save from './Save';
// import img from './images/01.jpg';

import like from './comImage/like.png';
import save from './comImage/save.png';

export class Icons extends Component {
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

export default Icons;
