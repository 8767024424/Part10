// app/reviewStore.js
import { useState, useEffect } from "react";

/**
 * Shared store holder and hook.
 * Reviews are kept in React state inside any component that calls useReviewStore().
 * The module-level reviewStore object is kept in sync so other pages can read/update it.
 */

export const reviewStore = {
  reviews: [
    { id: 1, repo: "openai/api", text: "Amazing repo!" },
    { id: 2, repo: "facebook/react", text: "Great codebase." },
  ],
  setReviews: () => {},
};

export function useReviewStore() {
  const [reviews, setReviews] = useState(reviewStore.reviews);

  // keep the module-level object in sync
  useEffect(() => {
    reviewStore.reviews = reviews;
    reviewStore.setReviews = setReviews;
  }, [reviews]);

  return { reviews, setReviews };
}
