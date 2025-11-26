import { gql } from '@apollo/client';

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

// Note: You would also likely have a LOGIN mutation here for the real app