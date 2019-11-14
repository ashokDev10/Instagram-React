import React, { Component } from "react";
import "./ExplorePost.scss";

class Post extends Component {
  render() {
    return (
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
    );
  }
}

class ExplorePost extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="explore-image">
        <div className="container">
          <img src={image} alt="" className="image" />
          <div className="overlay">
            <p className="post-icons">
              <i className="fa fa-heart" />
              <span>23</span>
              <i className="fa fa-comment" />
              <span>4</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
