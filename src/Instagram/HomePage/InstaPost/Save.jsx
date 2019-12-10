import React, { Component } from 'react';

class Save extends Component {
  state = {
    saveSelected: false
  };

  changeIcon = () =>
    this.setState(({ saveSelected }) => ({ saveSelected: !saveSelected }));

  render() {
    const { saveSelected } = this.state;
    const { i1, i2 } = this.props;
    return (
      <div className="save">
        <i onClick={() => this.changeIcon(saveSelected)}>
          {saveSelected ? i2 : i1}
        </i>
      </div>
    );
  }
}

export default Save;
