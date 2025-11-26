import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AuthStorage from './utils/authStorage';


const httpLink = createHttpLink({
uri: 'https://your-graphql-endpoint.com/graphql' // <- set your endpoint
});


const authLink = setContext(async (_, { headers }) => {
const token = await AuthStorage.getAccessToken();
return {
headers: {
...headers,
authorization: token ? `Bearer ${token}` : ''
}
};
});


const client = new ApolloClient({
link: authLink.concat(httpLink),
cache: new InMemoryCache()
});


export default client;