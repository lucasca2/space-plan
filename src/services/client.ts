import { ApolloClient, InMemoryCache } from '@apollo/client';

const Client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

export default Client;
