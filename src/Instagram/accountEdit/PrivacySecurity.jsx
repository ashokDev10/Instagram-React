import React, { Component } from 'react';
import './PrivacySecurity.scss';

class PrivacySecurity extends Component {
  render() {
    return (
      <div className="privacy-security">
        <Block1
          blocklist1={[
            {
              head: 'Account Privacy',
              text1: 'Private Account',
              text2:
                'When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers wont be affected.'
            },
            {
              head: 'Activity Status',
              text1: 'Show Activity Status',
              text2:
                'Allow accounts you follow and anyone you message to see when you were last active on Instagram apps. When this is turned off, you wont be able to see the activity status of other accounts.'
            },
            {
              head: 'Story Sharing',
              text1: 'Allow Sharing',
              text2: 'Let people share your story as messages'
            }
          ]}
        />
        <h3>Comments</h3>
        <h6>Edit Comment Settings</h6>
        <h3>Photos of You</h3>

        <ul>
          <li>
            <p>
              <input id="radio1" type="radio" /> Add Automatically
            </p>
          </li>

          <li>
            <p>
              <input id="radio2" type="radio" />
              Add Manually
            </p>
          </li>
        </ul>

        <p id="p1">
          Choose how you want photos of you added to your profile.
          <span> Learn more</span> about Photos of You.
        </p>
        <Block2
          blocklist2={[
            {
              text1: 'Account Data',
              text2: 'View Account Data'
            },
            {
              text1: 'Two-Factor Authentication',
              text2: 'Edit Two-Factor Authentication Setting'
            },
            {
              text1: 'Data Download',
              text2: 'Request Download'
            },
            {
              text1: 'Privacy and Security Help',
              text2: 'Support'
            }
          ]}
        />
      </div>
    );
  }
}
class Block1 extends Component {
  render() {
    const { blocklist1 } = this.props;
    return (
      <div className="block1">
        {blocklist1.map(bl => (
          <>
            <h3>{bl.head}</h3>
            <input type="checkbox" />
            <h5>{bl.text1}</h5>
            <p>{bl.text2}</p>
            <hr />
          </>
        ))}
      </div>
    );
  }
}
class Block2 extends Component {
  render() {
    const { blocklist2 } = this.props;
    return (
      <div className="block2">
        {blocklist2.map(bl => (
          <>
            <h3>{bl.text1}</h3>

            <h6>{bl.text2}</h6>
            <hr />
          </>
        ))}
      </div>
    );
  }
}

export default PrivacySecurity;
