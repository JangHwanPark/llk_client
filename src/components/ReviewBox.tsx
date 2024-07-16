import React from 'react';


interface ReviewBoxProps {
    customerName: string;
    review: string;
    rating: number;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ customerName, review, rating }) => {
    const renderStars = (rating: number) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="review-box">
            <div className="customer-info">
                <h3 className="customer-name">{customerName}</h3>
                <p className="review-text">{review}</p>
            </div>
            <div className="rating">{renderStars(rating)}</div>
        </div>
    );
};

export default ReviewBox;