// src/components/ReviewsForm.js
import React, { useState } from 'react';

const ReviewsForm = ({ product }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(5);
    const [markedAsPoorQuality, setMarkedAsPoorQuality] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!review.trim()) {
            alert('Please enter a valid review.');
            return;
        }

        const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        const newReview = {
            productId: product.id,
            review: review.trim(),
            rating,
            markedAsPoorQuality,
            date: new Date().toISOString()
        };
        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        console.log("Review submitted for product:", product.name, review, rating, markedAsPoorQuality);
        setReview('');
        setRating(5);
        setMarkedAsPoorQuality(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Your review"
                required
            />
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" />
            <label>
                Mark as poor quality:
                <input
                    type="checkbox"
                    checked={markedAsPoorQuality}
                    onChange={(e) => setMarkedAsPoorQuality(e.target.checked)}
                />
            </label>
            <button type="submit" disabled={!review.trim()}>Submit Review</button>
        </form>
    );
};

export default ReviewsForm;
