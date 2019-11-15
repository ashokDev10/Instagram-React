import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import phone from './LogImage/phone.png';
import screen from './LogImage/screen.jpg';
import apple from './LogImage/apple.png';
import android from './LogImage/android.png';
import title from './images2/title.png';



class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <LoginBlock />
        <div className="instagram-all-footer">
          <ul>
            <li>about us</li>
            <li>Support</li>
            <li>press</li>
            <li>api</li>
            <li>jobs</li>
            <li>Privacy</li>
            <li>terms</li>
            <li>Directory</li>
            <li>profiles</li>
            <li>Hashtags</li>
            <li>language</li>

            <span>@ 2019 INSTAGRAM</span>
          </ul>
        </div>
      </div>
    );
  }
}

class LoginBlock extends Component {
  render() {
    return (
      <div className="login-block">
        <LoginPhotoBlock />
        <LoginFormBlock />
      </div>
    );
  }
}
class LoginPhotoBlock extends Component {
  render() {
    return (
      <div className="login-photo-block">
        <div
          className="login-background"
          style={{ backgroundImage: 'url(' + phone + ')' }}
        >
          <img src={screen} alt="" />
        </div>
      </div>
    );
  }
}
class LoginFormBlock extends Component {
  render() {
    return (
      <div className="login-form-block">
        <div className="login-form">
          <img src={title} alt="" />
          <h3>Sign up to see photos and videos from your friends.</h3>
          <button type="button">
            <i class="fab fa-facebook-square"></i>
            Log in with Facebook
          </button>
          <hr id="hr1" />
          <p id="p1">OR</p>
          <hr id="hr2" />
          <ul>
            <li>
              <input type="text" placeholder="Mobile Number or Email" />
            </li>
            <li>
              <input type="text" placeholder="Full Name" />
            </li>
            <li>
              <input type="text" placeholder="Username" />
            </li>

            <li>
              <input type="text" placeholder="Password" />
            </li>
          </ul>

          <button type="button">Sign up</button>
          <h4>By signing up, you agree to our</h4>
          <h5>
            Terms , Data Policy <span>and</span> Cookies Policy .
          </h5>
        </div>
        <div className="login-press">
          <p>
            Have an account?
            <Link to="./insta" style={{ textDecoration: 'none' }}>
              <span>Log in </span>
            </Link>
          </p>
        </div>
        <div className="img">
          <p>Get the app.</p>
          <img src={apple} alt="" />
          <img src={android} alt="" />
        </div>
      </div>
    );
  }
}

export default Login;
