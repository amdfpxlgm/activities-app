// Apollo client

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_ENDPOINT } from '../../constants';

// Create apollo client
export const apolloClient = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
});
