import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../public/theme/fonts'
import theme from '../public/theme'
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../lib/apolloClient"


function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return(
    <ApolloProvider client={apolloClient} >
      <ChakraProvider theme={theme}>
        <Fonts/>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
