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
        <img src={image} alt="" />
        <p className="post-icons">
          <i className="fa fa-heart" />
          <i className="fa fa-comment" />
        </p>
      </div>
    );
  }
}

export default Post;
