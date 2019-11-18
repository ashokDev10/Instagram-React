import React, { Component } from 'react';
import './EmailsFromInsta.scss';

class EmailsFromInsta extends Component {
  render() {
    return (
      <div className="emails-from-insta">
        <h3>Emails From Instagram</h3>
        <div className="grid">
          <div className="efi-left">
            <h5>security</h5>
          </div>
          <div className="efi-right">
            <h5>other</h5>
          </div>
        </div>
        <p>
          This is a list of emails Instagram has sent you about security and
          login in the last 14 days. You can use it to verify which emails are
          real and which are fake. <span>Learn more.</span>
        </p>
      </div>
    );
  }
}

export default EmailsFromInsta;
