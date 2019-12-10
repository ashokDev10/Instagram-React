import React from 'react';
import './ExplorePost.scss';

const Post = ({ postlist }) => {
  return (
    <div className="explore-post">
      <div className="explore-post-block">
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
      </div>
    </div>
  );
};

export default Post;
