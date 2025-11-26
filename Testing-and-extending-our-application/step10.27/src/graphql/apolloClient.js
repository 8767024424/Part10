import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';
import { relayStylePagination } from '@apollo/client/utilities';

const client = new ApolloClient({
  uri: Constants.manifest.extra.apolloUri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          repositories: relayStylePagination(),
        },
      },
      Repository: {
        fields: {
          reviews: relayStylePagination(),
        },
      },
    },
  }),
});

export default client;
