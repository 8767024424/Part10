import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',   // Backend URL
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <NativeRouter>
          <Main />
        </NativeRouter>
        <StatusBar style="auto" />
      </ApolloProvider>
    </>
  );
};

export default App;
