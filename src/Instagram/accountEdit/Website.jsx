import React, { Component } from 'react';
import './Website.scss';

class Website extends Component {
  render() {
    return (
      <div className="apps-websites">
        <h3>Apps and Websites</h3>
        <div className="grid">
          <div className="aw-left">
            <h5>active</h5>
          </div>
          <div className="aw-right">
            <h5>expired</h5>
          </div>
        </div>
        <p>
          These are apps and websites you've used Instagram to log into and have
          recently used. They can request info you chose to share with them.
        </p>
        <h6>
          You have not authorized any applications to access your Instagram
          account.
        </h6>
      </div>
    );
  }
}

export default Website;
