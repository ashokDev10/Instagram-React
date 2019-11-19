import React, { Component } from 'react';
import './LoginActivity.scss';

class LoginActivity extends Component {
  render() {
    return (
      <div className="login-activity">
        <h3>Login Activity</h3>
        <h4>Was This You?</h4>

        <MapBlock
          maplist={[
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            },
            {
              text1: 'this was me',
              text2: "this wasn't me"
            }
          ]}
        />
        <LocationBlock
          locationlist={[
            {
              text1: 'vellore',
              text2: 'Active now',
              text3: 'This Ubutnu'
            },
            {
              text1: '',
              text2: '',
              text3: ''
            }
          ]}
        />
      </div>
    );
  }
}
class MapBlock extends Component {
  render() {
    const { maplist } = this.props;
    return (
      <div className="map-block">
        {maplist.map(ml => (
          <div className="text">
            <iframe
              title="footer-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.441972792331!2d79.1329408148217!3d12.943546190874326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad39a0f37f3acf%3A0x7076bf027ae0eb77!2sAtsemicolon%20Technologies%20Training%20Academy!5e0!3m2!1sen!2sin!4v1568034201791!5m2!1sen!2sin"
              allowFullScreen=""
            />
            <h5>{ml.text1}</h5>
            <h6>{ml.text2}</h6>
          </div>
        ))}
      </div>
    );
  }
}
class LocationBlock extends Component {
  render() {
    const { locationlist } = this.props;
    return (
      <div className="location-block">
        <div className="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        {locationlist.map(ll => (
          <div className="place">
            <h5>{ll.text1}</h5>
            <p>
              {ll.text2}
              <i class="fas fa-circle"></i>
              <span>{ll.text3}</span>
            </p>
            <i class="fas fa-chevron-down"></i>
          </div>
        ))}
      </div>
    );
  }
}
export default LoginActivity;
