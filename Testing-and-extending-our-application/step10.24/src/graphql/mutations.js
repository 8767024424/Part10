import { gql } from '@apollo/client';


export const SIGN_IN = gql`
mutation SignIn($username: String!, $password: String!) {
signIn(credentials: { username: $username, password: $password }) {
accessToken
}
}
`;


export const CREATE_REVIEW = gql`
mutation CreateReview($repositoryId: ID!, $rating: Int!, $text: String) {
createReview(review: { repositoryId: $repositoryId, rating: $rating, text: $text }) {
repositoryId
rating
text
}
}
`;