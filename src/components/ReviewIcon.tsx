import React from 'react';

const ReviewIcon = () => {
  return (
    <div className='review'>
      <div className='review-info'>
        <p>star</p>
        <p>description</p>
      </div>
      <div className='user'>
        <div className='user-image'>
          <img src="user.png" alt="" />
        </div>
        <p>name</p>
      </div>
    </div>
  );
};

export default ReviewIcon;
