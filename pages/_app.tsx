/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
  <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
  </Head>
  <Component {...pageProps} />
  </>
  )
}
