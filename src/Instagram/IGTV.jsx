import React, { Component } from "react";
import "./IGTV.scss";

class IGTV extends Component {
  render() {
    return (
      <div className="IGTV-page">
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
