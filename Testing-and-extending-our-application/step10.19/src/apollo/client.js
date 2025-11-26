// src/apollo/client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-server.com/graphql', // replace with your GraphQL server
  cache: new InMemoryCache(),
});

export default client;
