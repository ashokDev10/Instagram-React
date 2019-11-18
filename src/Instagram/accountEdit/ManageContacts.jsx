import React, { Component } from 'react';
import './ManageContacts.scss';

class ManageContacts extends Component {
  render() {
    return (
      <div className="manage_contacts">
        <h3>Manage Contacts</h3>
        <p>
          The people listed here are contacts you've uploaded to Instagram. To
          remove your synced contacts, tap Delete All. If you delete your
          contacts from this page, new contacts you add to your phone will be
          uploaded. If you want to stop syncing, go to your device settings and
          turn off access to contacts.
        </p>
        <p>
          Only you can see your contacts, but Instagram uses the info you've
          uploaded about your contacts to make friend suggestions for you and
          others and to provide a better experience for everyone.
        </p>
        <ManageContactsBlock
          textlist={[
            {
              text1: 'Gokul 12',
              text2: '7904069486'
            },
            {
              text1: 'Arun 2',
              text2: '7358931951'
            },
            {
              text1: 'Narayanan',
              text2: '9962749412'
            },
            {
              text1: 'Uvi EC',
              text2: '9843209849'
            },
            {
              text1: 'Sun Tv',
              text2: '9840819377'
            },
            {
              text1: 'Siva',
              text2: '9840812377'
            },
            {
              text1: 'Raj 2',
              text2: '9840819387'
            },
            {
              text1: 'Flex',
              text2: '9840819337'
            },
            {
              text1: 'Cm Terahit',
              text2: '9840819372'
            },
            {
              text1: 'Aravind 12',
              text2: '9840819377'
            },
            {
              text1: 'Vicky 2',
              text2: '9840819377'
            },
            {
              text1: 'Mp Mohan',
              text2: '9840819377'
            },
            {
              text1: 'PolimerTV-New',
              text2: '9840819377'
            },
            {
              text1: 'Santhosh',
              text2: '9840819377'
            },
            {
              text1: 'Sethu Junior',
              text2: '9840819377'
            },
            {
              text1: 'PraveenRaj Mailam',
              text2: '9840819377'
            },
            {
              text1: 'Sudhersun Mech',
              text2: '9840819377'
            }
          ]}
        />
      </div>
    );
  }
}
class ManageContactsBlock extends Component {
  render() {
    const { textlist } = this.props;
    return (
      <div className="manage-contacts-block">
        <div className="delete-all">
          <p>
            1489 Syncsd Contact <span>Delete All</span>
          </p>
        </div>
        {textlist.map(tl => (
          <div className="contact-list">
            <h6>{tl.text1}</h6>
            <p>{tl.text2}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ManageContacts;
