import { memo } from 'react'
import Head from 'next/head';
import '../styles/index.css'
import { ThemeProvider } from "@chakra-ui/core";
import Header from '../components/Header';
import { Flex } from "@chakra-ui/core"; 

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <Flex as="main" justify="center" p={6}>
        <Component {...pageProps} />
      </Flex>
    </ThemeProvider>
  )
}

export default memo(App);