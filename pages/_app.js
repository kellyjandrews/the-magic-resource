import { memo } from 'react'
import Head from 'next/head';
import '../styles/index.css'
import { ThemeProvider } from "@chakra-ui/core";
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="flex p-6">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default memo(App);