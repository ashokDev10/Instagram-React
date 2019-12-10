import React from 'react';
import './SavePost.scss';
import sa1 from './SaveImage/sa1.jpg';
import sa2 from './SaveImage/sa2.jpg';
import sa3 from './SaveImage/sa3.jpg';
import sa4 from './SaveImage/sa4.jpg';
import sa5 from './SaveImage/sa5.jpg';
import sa6 from './SaveImage/sa6.jpg';

const SavePost = () => {
  return (
    <div className="save-post">
      <div className="save-post-block">
        <SaveBlock
          postlist={[
            {
              image: sa1,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '12'
            },
            {
              image: sa2,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '43'
            },
            {
              image: sa3,
              like: 'fas fa-heart',
              nolikes: '23',
              comment: 'fas fa-comment',
              nocomments: '12'
            },
            {
              image: sa4,
              like: 'fas fa-heart',
              nolikes: '34',
              comment: 'fas fa-comment',
              nocomments: '42'
            },
            {
              image: sa5,
              like: 'fas fa-heart',
              nolikes: '24',
              comment: 'fas fa-comment',
              nocomments: '11'
            },
            {
              image: sa6,
              like: 'fas fa-heart',
              nolikes: '63',
              comment: 'fas fa-comment',
              nocomments: '23'
            }
          ]}
        />
      </div>
    </div>
  );
};

const SaveBlock = ({ postlist }) => {
  return (
    <div className="container">
      {postlist.map(pi => (
        <div className="image-block">
          <img src={pi.image} alt="" className="image" />

          <div class="middle">
            <div class="text">
              <i class="fas fa-heart"></i>
              <span>{pi.nolikes}</span>
              <i class="fas fa-comment"></i>
              <span>{pi.nocomments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavePost;
