import { useMemo } from "react";
import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache, split } from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition, relayStylePagination } from "@apollo/client/utilities";


interface Definintion {
  kind: string;
  operation?: string;
};

let apolloClient;

function createApolloClient(ctx) {
  const ssrMode = typeof window === 'undefined';

  const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'development'
      ? `http://${process.env.NEXT_PUBLIC_SERVER_URI}`
      : `https://demotivation-quotes-api.herokuapp.com/`,
  })


  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        alert(`GraphQL error ${message}`);
      })
    }
  })

  const link = from([
    errorLink,
    httpLink
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
  })

  return client
}

export function initializeApollo(ctx, initialState = null) {
  let _apolloClient = apolloClient ?? createApolloClient(ctx);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(undefined, initialState), [initialState]);
  return store;
}
