import React, { Component } from 'react';
import './Email.scss';

class Email extends Component {
  render() {
    return (
      <div className="emails-and-sms">
        <h3>Subscribe to:</h3>
        <EmailBlock
          textlist={[
            {
              text1: 'Feedback Emails',
              text2: 'Give feedback on Instagram.'
            },
            {
              text1: 'Reminder emails',
              text2: 'Get notifications you may have missed.'
            },
            {
              text1: 'Product emails',
              text2: "Get tips about Instagram's tools."
            },
            {
              text1: 'News emails',
              text2: 'Learn about new Instagram features.'
            },
            {
              text1: 'Text (SMS) Messages',
              text2: 'Get notifications by text message.'
            }
          ]}
        />
      </div>
    );
  }
}
class EmailBlock extends Component {
  render() {
    const { textlist } = this.props;
    return (
      <div className="emails-block">
        {textlist.map(tl => (
          <div className="email-box">
            <input type="checkbox" />
            <p>{tl.text1}</p>
            <h6>{tl.text2}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default Email;
