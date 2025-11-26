import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/apolloClient';
import RepositoryList from './src/components/RepositoryList';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RepositoryList />
    </ApolloProvider>
  );
}
