import React from 'react';

import comment from './comImage/comment.png';

const Comment = () => {
  return (
    <div className="comment">
      <div>
        <img href={'/#/usercomment'} src={comment} alt="" />
      </div>
    </div>
  );
};

export default Comment;
