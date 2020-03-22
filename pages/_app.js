import React from 'react'
import '../styles/index.css'
import { ThemeProvider } from "@chakra-ui/core";
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <main className="flex p-6">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default React.memo(App);