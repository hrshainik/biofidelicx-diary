import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Layout } from '../components'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}

export default MyApp
