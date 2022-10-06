import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo, initializeApollo } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  //const apolloClient = useApollo(pageProps.initialApolloState);
  const apolloClient = initializeApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
