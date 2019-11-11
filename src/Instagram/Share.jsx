import React, { Component } from 'react';

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
        <i
          class="far fa-share-square"
          onClick={() => this.changeIcon(shareSelected)}
        ></i>
        <div className="share-icons">{shareSelected ? i2 : ''}</div>
      </div>
    );
  }
}

export default Share;
