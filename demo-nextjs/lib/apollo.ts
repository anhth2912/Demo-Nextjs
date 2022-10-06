import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
const graphServerUri = 'http://localhost:5000/graphql';
let apolloclient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloclient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    uri: graphServerUri,
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloclient ?? createApolloclient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloclient) apolloclient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
}
