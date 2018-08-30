import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { withClientState } from 'apollo-link-state'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

import Screens from './screens';
import mutationResolvers from "./mutationResolvers";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: mutationResolvers
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: 'https://api.nimble.com.br/veiculoQL/v1/gql'
    })
  ]),
  cache
});

export default () => (
  <ApolloProvider client={client}>
    <Screens />
  </ApolloProvider>
);