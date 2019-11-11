import React, { Component } from 'react';

class Like extends Component {
  state = {
    likeSelected: false
  };

  changeIcon = () =>
    this.setState(({ likeSelected }) => ({ likeSelected: !likeSelected }));

  render() {
    const { likeSelected } = this.state;
    const { i1, i2 } = this.props;
    return (
      <div className="like">
        <i onClick={() => this.changeIcon(likeSelected)}>
          {likeSelected ? i2 : i1}
        </i>
      </div>
    );
  }
}

export default Like;
