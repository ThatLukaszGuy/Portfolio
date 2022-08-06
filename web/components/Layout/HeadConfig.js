import React from 'react'
import Head from 'next/head'

export const HeadConfig = ({ title, color }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="ThatLukaszGuy's Portfolio made in NextJS" />
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="keywords" content="Portfolio NextJS Developer Webdev Fullstack"/>
      <meta name="author" content="ThatLukaszGuy"/>
      <meta name = "theme-color" content = {color}></meta>

      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
      <link rel="manifest" href="favicon/site.webmanifest"/>
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
    </Head>
  )
}