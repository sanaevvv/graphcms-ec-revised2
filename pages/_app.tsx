import '../styles/globals.css';
import { AppContext, AppInitialProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apolloClient';

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const client = useApollo(pageProps);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
