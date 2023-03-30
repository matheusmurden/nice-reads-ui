import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/utils/apolloClient'
import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app'

export default function App({ Component,  pageProps, session }: AppProps) {
  const apolloClient = useApollo(pageProps);
    return (
      <SessionProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps}/>
        </ApolloProvider>
      </SessionProvider>
    )
}
