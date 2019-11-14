import React, { Component } from "react";
import "./IGTV.scss";

class IGTV extends Component {
  render() {
    return (
      <div className="IGTV-page">
        <div className="IGTV-container">
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
          <IGTVBlock image="https://placeimg.com/350/400/random" />
        </div>
        <div className="instagram-all-footer">
          <ul>
            <li>about us</li>
            <li>Support</li>
            <li>press</li>
            <li>api</li>
            <li>jobs</li>
            <li>Privacy</li>
            <li>terms</li>
            <li>Directory</li>
            <li>profiles</li>
            <li>Hashtags</li>
            <li>language</li>

            <span>@ 2019 INSTAGRAM</span>
          </ul>
        </div>
      </div>
    );
  }
}
class IGTVBlock extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="IGTV-block">
        <img src={image} alt="" />
      </div>
    );
  }
}

export default IGTV;
