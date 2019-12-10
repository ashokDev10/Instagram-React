import React from 'react';
import './Profile.scss';
import Post from '../DiscoverExplore/ExplorePost';
import IGTV from './IGTV';
import SavePost from './SavePost';
import TaggedPost from './TaggedPost';
import settings from './Images/settings.png';
import InstaHead from '../InstagramHead/InstaHead';

import { Switch, Route, Link, NavLink } from 'react-router-dom';
import pro from './Images/my_dp.jpg';
import hi1 from './HighlightImage/h1.jpg';
import hi2 from './HighlightImage/h2.jpg';
import hi3 from './HighlightImage/h3.jpg';
import hi4 from './HighlightImage/h7.jpg';
import hi5 from './HighlightImage/h5.jpg';
import hi6 from './HighlightImage/h6.jpg';
import hi7 from './HighlightImage/h4.jpg';
import InstagramFooter from '../InstagramFooter/InstagramFooter';
import pi1 from './postImage/p1.jpg';
import pi2 from './postImage/p2.jpg';
import pi3 from './postImage/p3.jpg';
import pi4 from './postImage/p4.jpg';
import pi5 from './postImage/p5.jpg';
import pi6 from './postImage/p6.jpg';
import pi7 from './postImage/p7.jpg';
import pi8 from './postImage/p8.jpg';
import pi9 from './postImage/p9.jpg';
import pi10 from './postImage/p10.jpg';
import pi11 from './postImage/p11.jpg';
import pi12 from './postImage/p12.jpg';
import pi13 from './postImage/p13.jpg';
import pi14 from './postImage/p14.jpg';
import pi15 from './postImage/p15.jpg';
import pi16 from './postImage/p16.jpg';
import pi17 from './postImage/p17.jpg';
import pi18 from './postImage/p18.jpg';
import pi19 from './postImage/p19.jpg';
import pi20 from './postImage/p20.jpg';
import pi21 from './postImage/p21.jpg';
import pi22 from './postImage/p22.jpg';
import pi23 from './postImage/p23.jpg';
import pi24 from './postImage/p24.jpg';

const Posts = () => (
  <>
    <Post
      postlist={[
        {
          image: pi1,
          like: 'fas fa-heart',
          nolikes: '23',
          comment: 'fas fa-comment',
          nocomments: '12'
        },
        {
          image: pi2,
          like: 'fas fa-heart',
          nolikes: '23',
          comment: 'fas fa-comment',
          nocomments: '43'
        },
        {
          image: pi3,
          like: 'fas fa-heart',
          nolikes: '23',
          comment: 'fas fa-comment',
          nocomments: '12'
        },
        {
          image: pi4,
          like: 'fas fa-heart',
          nolikes: '34',
          comment: 'fas fa-comment',
          nocomments: '42'
        },
        {
          image: pi5,
          like: 'fas fa-heart',
          nolikes: '24',
          comment: 'fas fa-comment',
          nocomments: '11'
        },
        {
          image: pi6,
          like: 'fas fa-heart',
          nolikes: '63',
          comment: 'fas fa-comment',
          nocomments: '23'
        },
        {
          image: pi7,
          like: 'fas fa-heart',
          nolikes: '28',
          comment: 'fas fa-comment',
          nocomments: '02'
        },
        {
          image: pi8,
          like: 'fas fa-heart',
          nolikes: '273',
          comment: 'fas fa-comment',
          nocomments: '126'
        },
        {
          image: pi9,
          like: 'fas fa-heart',
          nolikes: '83',
          comment: 'fas fa-comment',
          nocomments: '15'
        },
        {
          image: pi10,
          like: 'fas fa-heart',
          nolikes: '233',
          comment: 'fas fa-comment',
          nocomments: '13'
        },
        {
          image: pi11,
          like: 'fas fa-heart',
          nolikes: '23',
          comment: 'fas fa-comment',
          nocomments: '12'
        },
        {
          image: pi12,
          like: 'fas fa-heart',
          nolikes: '73',
          comment: 'fas fa-comment',
          nocomments: '32'
        },
        {
          image: pi13,
          like: 'fas fa-heart',
          nolikes: '72',
          comment: 'fas fa-comment',
          nocomments: '04'
        },
        {
          image: pi14,
          like: 'fas fa-heart',
          nolikes: '92',
          comment: 'fas fa-comment',
          nocomments: '82'
        },
        {
          image: pi15,
          like: 'fas fa-heart',
          nolikes: '02',
          comment: 'fas fa-comment',
          nocomments: '9'
        },
        {
          image: pi16,
          like: 'fas fa-heart',
          nolikes: '06',
          comment: 'fas fa-comment',
          nocomments: '05'
        },
        {
          image: pi17,
          like: 'fas fa-heart',
          nolikes: '91',
          comment: 'fas fa-comment',
          nocomments: '19'
        },
        {
          image: pi18,
          like: 'fas fa-heart',
          nolikes: '64',
          comment: 'fas fa-comment',
          nocomments: '64'
        },
        {
          image: pi19,
          like: 'fas fa-heart',
          nolikes: '83',
          comment: 'fas fa-comment',
          nocomments: '35'
        },
        {
          image: pi20,
          like: 'fas fa-heart',
          nolikes: '34',
          comment: 'fas fa-comment',
          nocomments: '28'
        },
        {
          image: pi21,
          like: 'fas fa-heart',
          nolikes: '56',
          comment: 'fas fa-comment',
          nocomments: '64'
        },
        {
          image: pi22,
          like: 'fas fa-heart',
          nolikes: '83',
          comment: 'fas fa-comment',
          nocomments: '35'
        },
        {
          image: pi23,
          like: 'fas fa-heart',
          nolikes: '34',
          comment: 'fas fa-comment',
          nocomments: '28'
        },
        {
          image: pi24,
          like: 'fas fa-heart',
          nolikes: '56',
          comment: 'fas fa-comment',
          nocomments: '64'
        }
      ]}
    />
  </>
);
const Igtv = () => <IGTV />;
const Saved = () => <SavePost />;
const Tagged = () => <TaggedPost />;

const ProfileBlock = () => {
  return (
    <div className="profile-block">
      <div className="p-left">
        <img src={pro} alt="" />
      </div>
      <div className="p-right">
        <h3>khrist_yohan</h3>
        <div>
          <Link to="/profile/edit" style={{ textDecoration: 'none' }}>
            <small>Edit Profile</small>
          </Link>
        </div>
        <img src={settings} alt="" />

        <p id="txt1">
          <span>20</span>
          <small> posts</small>
          <span>240</span>
          <small> followers</small>
          <span>846</span>
          <small> following</small>
        </p>
        <h4>KhrisT YohaN 🌹 👩‍❤️‍👩 </h4>
        <p id="txt2">🎨 UX/UI Trends</p>
        <p id="txt2">🛠️ Tools</p>
        <p id="txt2">📕 Learning materials</p>
        <p id="txt2">👩‍💻 Job opportunities</p>
        <p id="txt2">💼 For sponsored content, like services</p>
      </div>
    </div>
  );
};

const HighlightBlock = () => {
  return (
    <div className="highlight-block">
      <HighlightPost image={hi1} text="CAMARA" />
      <HighlightPost image={hi2} text="Lightings" />
      <HighlightPost image={hi3} text="Set Engin" />
      <HighlightPost image={hi4} text="Heart Light" />
      <HighlightPost image={hi5} text="Love" />
      <HighlightPost image={hi6} text="TIMER" />
      <HighlightPost image={hi7} text="RANGOLI" />
    </div>
  );
};

const HighlightPost = ({ image, text }) => {
  return (
    <div className="highlight-box">
      <div className="highlight-post">
        <div>
          <img src={image} alt="" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const PostBlock = () => {
  return (
    <div className="post-block">
      <div className="profile-post">
        <ProfileGallery
          list={[
            {
              photo: 'fas fa-th',
              text: 'posts'
            },
            {
              photo: 'fas fa-tv',
              text: 'igtv'
            },
            {
              photo: 'far fa-bookmark',
              text: 'saved'
            },
            {
              photo: 'fas fa-id-card',
              text: 'tagged'
            }
          ]}
        />

        <div className="profile-gallery">
          <div className="profile-gallery-block">
            <Switch>
              <Route exact path="/insta/profile" component={Posts} />
              <Route exact path="/insta/profile/igtv" component={Igtv} />
              <Route exact path="/insta/profile/saved" component={Saved} />
              <Route exact path="/insta/profile/tagged" component={Tagged} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileGallery = ({ list }) => (
  <div className="profile-gallery-head">
    <div></div>
    {list.map(l => (
      <NavLink
        activeClassName="active"
        to={l.text === 'posts' ? '/insta/profile' : `/insta/profile/${l.text}`}
      >
        <div className="list-grid">
          <i className={l.photo} />
          <p>{l.text}</p>
        </div>
      </NavLink>
    ))}

    <div></div>
  </div>
);

const ProfilePage = () => {
  return (
    <div>
      <InstaHead />
      <div className="profile-page">
        <ProfileBlock />
        <HighlightBlock />
        <PostBlock />
      </div>
      <InstagramFooter />
    </div>
  );
};

export default ProfilePage;
