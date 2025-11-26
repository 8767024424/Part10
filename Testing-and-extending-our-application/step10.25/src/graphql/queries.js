import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $first: Int, $after: String) {
repositories(orderBy: $orderBy, orderDirection: $orderDirection, first: $first, after: $after) {
edges {
node {
id
fullName
description
language
forksCount
stargazersCount
ratingAverage
reviewCount
ownerAvatarUrl
}
}
}
}
`;