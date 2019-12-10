import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

import apple from './LogImage/apple.png';
import android from './LogImage/android.png';
import title from './LogImage/title.png';

// const initialState = {
//   emailorMobile:'',
//   emailorMobileError:'',
//   password:'',
//   passwordError:''
// }

const Login = () => {
  return (
    <div className="login-page">
      <LoginBlock />
    </div>
  );
};

const LoginBlock = () => {
  return (
    <div className="login-block">
      <LoginFormBlock />
    </div>
  );
};

const LoginFormBlock = () => {
  // state=initialState;

  return (
    <div className="login-form-block">
      <div className="login-form">
        <img src={title} alt="" />
        <ul>
          <li>
            <input type="text" placeholder="Mobile Number or Email" />
          </li>

          <li>
            <input type="text" placeholder="Password" />
          </li>
        </ul>

        <Link to="/insta" style={{ textDecoration: 'none' }}>
          <button type="button">
            <span>Log In</span>
          </button>
        </Link>

        <hr id="hr1" />
        <p id="p1">OR</p>
        <hr id="hr2" />
        <h4>
          <i class="fab fa-facebook-square"></i>
          Log in with Facebook
        </h4>
        <h6>Forgot password?</h6>
      </div>
      <div className="signup-press">
        <p>
          Don't have an account?
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span>Sign up </span>
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

export default Login;
