import React, { Component } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import phone from './LogImage/phone.png';
import screen from './LogImage/screen.jpg';
import apple from './LogImage/apple.png';
import android from './LogImage/android.png';
import title from './LogImage/title.png';
import InstagramFooter from '../InstagramFooter/InstagramFooter';
const initialState = {
  emailorMobile: '',
  emailorMobileError: '',
  name: '',
  nameError: '',
  userName: '',
  userNameError: '',
  password: '',
  passwordError: ''
};

class Signup extends Component {
  render() {
    return (
      <div className="signup-page">
        <SignupBlock />
        <InstagramFooter />
      </div>
    );
  }
}

class SignupBlock extends Component {
  render() {
    return (
      <div className="signup-block">
        <SignupPhotoBlock />
        <SignupFormBlock />
      </div>
    );
  }
}
class SignupPhotoBlock extends Component {
  render() {
    return (
      <div className="signup-photo-block">
        <div
          className="signup-background"
          style={{ backgroundImage: 'url(' + phone + ')' }}
        >
          <img src={screen} alt="" />
        </div>
      </div>
    );
  }
}
class SignupFormBlock extends Component {
  state = initialState;

  entereSignDetails = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validate = () => {
    let emailorMobileError = '';
    let nameError = '';
    let userNameError = '';
    let passwordError = '';
    const { emailorMobile, name, userName, password } = this.state;

    if (!emailorMobile) {
      emailorMobileError = 'Plz enter phone number or Email ';
    }

    if (!name) {
      nameError = 'Plz enter your name';
    }

    if (!userName) {
      userNameError = 'Plz enter your username ';
    }

    if (!password.includes('@') && password.length <= 8) {
      passwordError = 'Plz enter strong password ';
    }
    if (emailorMobileError || nameError || userNameError || passwordError) {
      this.setState({
        emailorMobileError,
        nameError,
        userNameError,
        passwordError
      });
      return false;
    }
    return true;
  };

  formSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
    this.setState({
      emailorMobile: '',
      name: '',
      userName: '',
      password: ''
    });
  };

  render() {
    const {
      emailorMobile,
      name,
      userName,
      password,
      emailorMobileError,
      nameError,
      userNameError,
      passwordError
    } = this.state;
    return (
      <div className="signup-form-block">
        <div className="signup-form">
          <img src={title} alt="" />
          <h3>Sign up to see photos and videos from your friends.</h3>
          <button type="button">
            <i class="fab fa-facebook-square"></i>
            Log in with Facebook
          </button>
          <hr id="hr1" />
          <p id="p1">OR</p>
          <hr id="hr2" />
          <form onSubmit={this.formSubmit}>
            <ul>
              <li>
                <input
                  name="emailorMobile"
                  type="text"
                  value={emailorMobile}
                  placeholder="Mobile Number or Email"
                  onChange={this.entereSignDetails}
                />
                <p id="p1">{emailorMobileError}</p>
              </li>
              <li>
                <input
                  name="name"
                  type="text"
                  value={name}
                  placeholder="Full Name"
                  onChange={this.entereSignDetails}
                />
                <p id="p1">{nameError}</p>
              </li>
              <li>
                <input
                  name="userName"
                  type="text"
                  value={userName}
                  placeholder="Username"
                  onChange={this.entereSignDetails}
                />
                <p id="p1">{userNameError}</p>
              </li>

              <li>
                <input
                  name="password"
                  type="text"
                  value={password}
                  placeholder="Password"
                  onChange={this.entereSignDetails}
                />
                <p id="p1">{passwordError}</p>
              </li>
            </ul>

            {/* <Link to="/account/login/" style={{ textDecoration: 'none' }}> */}
            <button type="submit">
              <span>Sign up</span>
            </button>
            {/* </Link> */}
          </form>
          <h4>By signing up, you agree to our</h4>
          <h5>
            Terms , Data Policy <span>and</span> Cookies Policy .
          </h5>
        </div>
        <div className="signup-press">
          <p>
            Have an account?
            <Link to="/account/login/" style={{ textDecoration: 'none' }}>
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

export default Signup;
