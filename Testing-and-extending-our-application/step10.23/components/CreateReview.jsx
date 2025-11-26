import React, { useState } from 'react';
import { CREATE_REVIEW } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const CreateReview = ({ onReviewCreated }) => {
  const [repoName, setRepoName] = useState('');
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const authStorage = useAuthStorage();

  const handleSubmit = async () => {
    try {
      const token = await authStorage.getToken();
      // Dummy mutation call
      const review = await CREATE_REVIEW({ repoName, rating, reviewText, token });
      onReviewCreated(review);
    } catch (error) {
      console.error('CreateReview error:', error);
    }
  };

  return (
    <div>
      <h2>Create Review</h2>
      <input
        placeholder="Repository Name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <input
        placeholder="Rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        placeholder="Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default CreateReview;
