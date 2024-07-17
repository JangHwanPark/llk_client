import React from 'react';
import LoadingSpinner from "../LoadingSpinner";
import {useQuery} from "@tanstack/react-query";
import {getReviewAPI} from "../../api/review-service";
import UserReview from "./UserReview";

interface ReviewTypes {
  review_id: number;
  review_score: string;
  review_description: string;
  user_name: string
}

const Review = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['review'],
    queryFn: getReviewAPI
  });

  if (isLoading) return <LoadingSpinner/>
  if (error) return <div>Error loading reviews</div>;

  return (
    <div className='review-wrapper'>
      {data ? (
        data?.data.slice(0, 4).map((item: ReviewTypes) => (
          <UserReview key={item.review_id} item={item} />
        ))
      ) : (
        <div>No reviews available</div>
      )}
    </div>
  );
};

export default Review;
