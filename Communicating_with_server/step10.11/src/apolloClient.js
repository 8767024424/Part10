// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client'; // ✅ correct

const client = new ApolloClient({
  uri: 'http://localhost:4000', // ❌ THIS WORKS ONLY IF running on the same machine
  cache: new InMemoryCache(),
});

export default client;
