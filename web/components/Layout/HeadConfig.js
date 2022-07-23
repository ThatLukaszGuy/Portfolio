import React from 'react'
import Head from 'next/head'

export const HeadConfig = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="ThatLukaszGuy's Portfolio made in NextJS" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="keywords" content="Portfolio NextJS Developer Webdev Fullstack"/>
      <meta name="author" content="ThatLukaszGuy"/>
    </Head>
  )
}
