import React from 'react';
import './Suggested.scss';
import si1 from './StoryImage/s1.jpg';
import si2 from './StoryImage/s2.jpg';
import si3 from './StoryImage/s3.jpg';
import si4 from './StoryImage/s4.jpg';
import si5 from './StoryImage/s5.jpg';
import si6 from './StoryImage/s6.jpg';
import si7 from './StoryImage/s7.jpg';
import si8 from './StoryImage/s8.jpg';
import si9 from './StoryImage/s9.jpg';
import si10 from './StoryImage/s10.jpg';
import si11 from './StoryImage/s11.jpg';
import si12 from './StoryImage/s12.jpg';
import InstaHead from '../InstagramHead/InstaHead';

const Suggested = () => {
  return (
    <div>
      <InstaHead />
      <div className="suggested-page">
        <h2>Suggested</h2>
        <SuggestedProfileBlock
          suggestedlist={[
            {
              image: si1,
              userName: 'cs_clonite',
              name: 'cs clonite Innovation',
              text: 'New to Instagram'
            },
            {
              image: si2,
              userName: 'googleindia',
              name: 'balcova lub',
              text: 'Suggested for you'
            },
            {
              image: si3,
              userName: 'gadgetstricks',
              name: 'Factoreal',
              text: 'Suggested for you'
            },
            {
              image: si4,
              userName: 'shelmiyer.pcba',
              name: 'Chill House',
              text: 'Suggested for you'
            },
            {
              image: si5,
              userName: 'i.m.pratikdabhi',
              name: 'business',
              text: 'Suggested for you'
            },
            {
              image: si6,
              userName: 'hackaday',
              name: 'black_lovers_store',
              text: 'Suggested for you'
            },
            {
              image: si7,
              userName: 'katemoross',
              name: 'lovers_store',
              text: 'Suggested for you'
            },
            {
              image: si8,
              userName: '7.7.7.7_hacker',
              name: 'Appel Ontwerpt',
              text: 'Suggested for you'
            },
            {
              image: si9,
              userName: 'tedx_official',
              name: 'Vijayaraj',
              text: 'Followed by iamlogopro'
            },
            {
              image: si10,
              userName: 'oneplus_india',
              name: 'initics',
              text: 'Suggested for you'
            },
            {
              image: si11,
              userName: 'googletamil',
              name: 'Code Simple',
              text: 'Suggested for you'
            },
            {
              image: si12,
              userName: 'shelmiyer.pcba',
              name: 'Vijayaraj',
              text: 'Suggested for you'
            }
          ]}
        />
      </div>
    </div>
  );
};

const SuggestedProfileBlock = ({ suggestedlist }) => {
  return (
    <div className="suggested-profile-block">
      {suggestedlist.map(sl => (
        <div className="box">
          <img src={sl.image} alt="" />

          <h5>{sl.userName}</h5>
          <p>{sl.name}</p>
          <span>{sl.text}</span>
          <button>follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggested;
