// src/components/ReviewsDisplay.js
import React, { useEffect, useState } from 'react';

const ReviewsDisplay = ({ productId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const allReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        const productReviews = allReviews.filter(review => review.productId === productId);
        setReviews(productReviews);
    }, [productId]);

    return (
        <div>
            <h3>Reviews for this Product</h3>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <p>Rating: {review.rating}</p>
                            <p>Review: {review.review}</p>
                            <p>Date: {review.date}</p>
                            {review.markedAsPoorQuality && <p style={{ color: 'red' }}>Marked as poor quality</p>}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews yet.</p>
            )}
        </div>
    );
};

export default ReviewsDisplay;
