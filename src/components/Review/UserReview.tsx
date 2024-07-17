import React from 'react';

const UserReview = ({ item }) => {
  return (
    <div className='review'>
      <div className='review-info'>
        <p>{item.review_score}</p>
        <p>{item.review_description}</p>
      </div>
      <div className='user'>
        <p>{item.user_name}</p>
      </div>
    </div>
)
  ;
};

export default UserReview;
