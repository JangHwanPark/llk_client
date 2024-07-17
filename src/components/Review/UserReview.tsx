import React from 'react';
import {FaStar} from "react-icons/fa";

const UserReview = ({item}) => {
  const reviewDescription = item.review_description;
  const maxLength = 100;
  const trimmedDescription = reviewDescription.length > maxLength
    ? reviewDescription.slice(0, maxLength) + "..."
    : reviewDescription;


  const maxStarLength = 5;
  const filledStars = item.review_score;
  const emptyStars = maxStarLength - filledStars;

  return (
    <div className='review'>
      <div className='review-info'>
        <p>
          {[...Array(filledStars)].map((_, idx) => (
            <FaStar key={`filled-${idx}`} color="gold" />
          ))}
          {[...Array(emptyStars)].map((_, idx) => (
            <FaStar key={`empty-${idx}`} color="lightgray" />
          ))}
        </p>
        <p>{trimmedDescription}</p>
      </div>
      <div className='user'>
        <p>{item.user_name}</p>
      </div>
    </div>
  )
    ;
};

export default UserReview;
