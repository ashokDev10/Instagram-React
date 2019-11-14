import React, { Component } from 'react';
import './ExplorePost.scss';
import pic1 from './images2/1.jpg';
import pic2 from './images2/2.jpg';
import pic3 from './images2/3.jpg';
import pic4 from './images2/4.jpg';
import pic5 from './images2/5.jpg';
import pic6 from './images2/6.jpg';
import pic7 from './images2/7.jpg';
import pic8 from './images2/8.jpg';
import pic9 from './images2/9.jpg';
import pic10 from './images2/10.jpg';
import pic11 from './images2/11.jpg';
import pic12 from './images2/12.jpg';
import pic13 from './images2/13.jpg';
import pic14 from './images2/14.jpg';
import pic15 from './images2/15.jpg';
import pic16 from './images2/16.jpg';

class Post extends Component {
  render() {
    return (
      <div className="explore-post">
        <div className="explore-post-block">
          <ExplorePost image={pic1} />
          <ExplorePost image={pic2} />
          <ExplorePost image={pic3} />
          <ExplorePost image={pic4} />
          <ExplorePost image={pic5} />
          <ExplorePost image={pic6} />
          <ExplorePost image={pic7} />
          <ExplorePost image={pic8} />
          <ExplorePost image={pic9} />
          <ExplorePost image={pic10} />
          <ExplorePost image={pic11} />
          <ExplorePost image={pic12} />
          <ExplorePost image={pic13} />
          <ExplorePost image={pic14} />
          <ExplorePost image={pic15} />
          <ExplorePost image={pic16} />
        </div>
      </div>
    );
  }
}

class ExplorePost extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="explore-image-block">
        <img src={image} alt="" />
        {/* <div className="container">
          <img src={image} alt="" />
          <div className="overlay">
            <p className="post-icons">
              <i className="fa fa-heart" />
              <span>23</span>
              <i className="fa fa-comment" />
              <span>4</span>
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Post;
