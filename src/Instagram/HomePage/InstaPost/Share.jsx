import React, { Component } from 'react';
import share from '../comImage/share.png';

class Share extends Component {
  state = {
    shareSelected: false
  };

  changeIcon = () =>
    this.setState(({ shareSelected }) => ({ shareSelected: !shareSelected }));

  render() {
    const { shareSelected } = this.state;
    const { i2 } = this.props;
    return (
      <div className="share">
        <img
          src={share}
          alt=""
          onClick={() => this.changeIcon(shareSelected)}
        />
        {/* <i
          class="far fa-share-square"
          onClick={() => this.changeIcon(shareSelected)}
        ></i> */}
        <div className="share-icons">{shareSelected ? i2 : ''}</div>
      </div>
    );
  }
}

export default Share;
