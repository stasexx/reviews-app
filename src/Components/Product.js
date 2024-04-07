// src/components/Product.js
import React, { useState } from 'react';
import ReviewsForm from './ReviewsForm';
import ReviewsDisplay from './ReviewsDisplay';

const Product = ({ product }) => {
    const [showForm, setShowForm] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const toggleForm = () => setShowForm(!showForm);
    const toggleReviews = () => setShowReviews(!showReviews);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={toggleForm}>Leave a Review</button>
            <button onClick={toggleReviews}>View Reviews</button>
            {showForm && <ReviewsForm product={product} />}
            {showReviews && <ReviewsDisplay productId={product.id} />}
        </div>
    );
};

export default Product;
