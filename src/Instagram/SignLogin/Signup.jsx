import React, { useState } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import phone from './LogImage/phone.png';
import screen from './LogImage/screen.jpg';
import apple from './LogImage/apple.png';
import android from './LogImage/android.png';
import title from './LogImage/title.png';
import InstagramFooter from '../InstagramFooter/InstagramFooter';
const initialFormState = {
  emailorMobile: '',
  emailorMobileError: '',
  name: '',
  nameError: '',
  userName: '',
  userNameError: '',
  password: '',
  passwordError: ''
};

const Signup = () => {
  return (
    <div className="signup-page">
      <SignupBlock />
      <InstagramFooter />
    </div>
  );
};

const SignupBlock = () => {
  return (
    <div className="signup-block">
      <SignupPhotoBlock />
      <SignupFormBlock />
    </div>
  );
};

const SignupPhotoBlock = () => {
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
};

const SignupFormBlock = () => {
  const [user, setUser] = useState(initialFormState);

  // entereSignDetails = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  const validate = () => {
    let emailorMobileError = '';
    let nameError = '';
    let userNameError = '';
    let passwordError = '';

    if (!user.emailorMobile) {
      emailorMobileError = 'Plz enter phone number or Email ';
    }

    if (!user.name) {
      nameError = 'Plz enter your name';
    }

    if (!user.userName) {
      userNameError = 'Plz enter your username ';
    }

    if (!user.password.includes('@') && user.password.length <= 8) {
      passwordError = 'Plz enter strong password ';
    }
    if (
      user.emailorMobileError ||
      user.nameError ||
      user.userNameError ||
      user.passwordError
    ) {
      setUser({
        emailorMobileError,
        nameError,
        userNameError,
        passwordError
      });
      return false;
    }
    return true;
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(setUser);
    const isValid = validate();
    if (isValid) {
      console.log(setUser);
    }
    setUser(initialFormState);
  };

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
        <form onSubmit={formSubmit}>
          <ul>
            <li>
              <input
                name="emailorMobile"
                type="text"
                value={user.emailorMobile}
                placeholder="Mobile Number or Email"
                onChange={event => setUser(event.target.value)}
              />
              <p id="p1">{user.emailorMobileError}</p>
            </li>
            <li>
              <input
                name="name"
                type="text"
                value={user.name}
                placeholder="Full Name"
                onChange={event => setUser(event.target.value)}
              />
              <p id="p1">{user.nameError}</p>
            </li>
            <li>
              <input
                name="userName"
                type="text"
                value={user.userName}
                placeholder="Username"
                onChange={event => setUser(event.target.value)}
              />
              <p id="p1">{user.userNameError}</p>
            </li>

            <li>
              <input
                name="password"
                type="text"
                value={user.password}
                placeholder="Password"
                onChange={event => setUser(event.target.value)}
              />
              <p id="p1">{user.passwordError}</p>
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
};

export default Signup;
