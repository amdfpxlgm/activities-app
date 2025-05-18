// Apollo server

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// Create apollo server
export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
