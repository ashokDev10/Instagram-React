import React, { Component } from 'react';
import './InstaComment.scss';
import InstaHead from './InstaHead';
import InstagramFooter from './InstagramFooter';

import Icons from './Icons';

import dp from './images/dp.jpg';
import img from './images2/5.jpg';
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

class InstaComment extends Component {
  render() {
    return (
      <div className="insta-comment-page">
        <InstaHead />
        <div className="insta-comment-block">
          <InstaCommentBox />
        </div>
        <InstagramFooter />
      </div>
    );
  }
}
class InstaCommentBox extends Component {
  render() {
    return (
      <div className="insta-comment-box">
        <div className="insta-comment-left">
          <img src={img} alt="" />
        </div>
        <div className="insta-comment-right">
          <div className="insta-comment-profile">
            <div className="user-comment-profile">
              <img src={dp} alt="" />
              <p>
                web_developer
                <b>
                  <i id="i1" className="fas fa-circle" /> Following
                </b>
                <span id="i2">...</span>
              </p>
              <small>Tamil Nadu, India</small>
            </div>

            <div className="all-comments">
              <div className="user-comment">
                <div className="img">
                  <img src={dp} alt="" />
                </div>
                <div className="details">
                  <p id="p1">
                    web_developer
                    <span role="img">Mass pic If you agree👇</span>
                  </p>
                  <p id="p2">
                    ❗ Follow us <span>@4_millionaires</span> for more
                  </p>
                  <p id="p2">motivation ❗</p>
                  <p id="p2">📌Turn On Post Notifications📌</p>
                  <p id="p2">.</p>
                  <p id="p2">
                    Follow<span>@4_millionaires</span> 👈👈🔥
                  </p>
                  <p id="p2">
                    Follow <span>@4_millionaires</span> 👈👈 🔝
                  </p>
                  <p id="p2">
                    Follow <span>@4_millionaires</span> 👈👈 😎
                  </p>
                  <p id="p2">.</p>
                  <p id="p2">.</p>
                  <p id="p2">.</p>
                  <p id="p2">.</p>
                  <p id="p2">.</p>
                  <p id="p2">.</p>

                  <p id="p3">#entrepreneurquotes</p>
                  <p id="p3">#millionairemindset #keytosuccess</p>
                  <p id="p3">#wisewords #businesslife</p>
                  <p id="p3">#motivationalquotes #lifequotes</p>
                  <p id="p3">#successquotes #buildyourempire</p>
                  <p id="p4"> 11h</p>
                </div>
              </div>
              <VisitorComment
                visitorlist={[
                  {
                    image: si1,
                    name: 'surgeryanimations',
                    comment: 'Mass look 🔥',
                    time: 1,
                    like: '2',
                    reply: 'Reply'
                  },
                  {
                    image: si2,
                    name: 'sciencesavvy',
                    comment:
                      'Enga tha ipdi laa irukaangalao....😢😢😢 epdi ivlo mas ah irukeenga',
                    time: 2,
                    like: '3',
                    reply: 'Reply'
                  },
                  {
                    image: si3,
                    name: 'souzaendrigo',
                    comment:
                      'Edo onnu mass ah vara podu nu theridu 😍 waiting 😍',
                    time: 2,
                    like: '4',
                    reply: 'Reply'
                  },
                  {
                    image: si4,
                    name: 'edesio_lemos',
                    comment: 'Arun vijay mass',
                    time: 5,
                    like: '10',
                    reply: 'Reply'
                  },
                  {
                    image: si5,
                    name: 'metribudiman007',
                    comment:
                      'Marana mass video on the way it seems 🔥🔥bro we miss u in Adithya TV fillers 😎.',
                    time: 7,
                    like: '8',
                    reply: 'Reply'
                  },
                  {
                    image: si6,
                    name: 'matidesign720',
                    comment: 'I love  💜😍😍 ',
                    time: 8,
                    like: '10',
                    reply: 'Reply'
                  },
                  {
                    image: si7,
                    name: 'xitina_95',
                    comment: 'Hardworker',
                    time: 14,
                    like: '20',
                    reply: 'Reply'
                  },
                  {
                    image: si8,
                    name: 'edesio_lemos',
                    comment: 'Vera level 👏👏👏👏',
                    time: 12,
                    like: '13',
                    reply: 'Reply'
                  },
                  {
                    image: si9,
                    name: 'souzaendrigo',
                    comment: 'Summa therikka vidunga 🔥',
                    time: 16,
                    like: '4',
                    reply: 'Reply'
                  },
                  {
                    image: si10,
                    name: 'matidesign720',
                    comment: 'Such wonderful pic ',
                    time: 19,
                    like: '38',
                    reply: 'Reply'
                  }
                ]}
              />
            </div>
            <div className="icons">
              <Icons
                si1={<i className="far fa-heart" />}
                si2={<i className="far fa-comment" />}
                share={[
                  {
                    iname: 'instagram'
                  },
                  {
                    iname: 'facebook'
                  },
                  {
                    iname: 'twitter'
                  },
                  {
                    iname: 'whatsapp'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class VisitorComment extends Component {
  render() {
    const { visitorlist } = this.props;
    return (
      <>
        {visitorlist.map(vl => (
          <div className="visitor-comment">
            <div className="pro">
              <img src={vl.image} alt="" />
            </div>
            <div className="detail">
              <p id="p1">
                {vl.name}
                <span>{vl.comment}</span>
              </p>
              <p id="p2">
                <span id="s1"> {vl.time}h</span>
                <span id="s2">{vl.like} like</span>
                <span id="s3">{vl.reply}</span>
              </p>
            </div>
            <div className="like">
              <i className="far fa-heart" />
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default InstaComment;
