import React from 'react'
import Issues from '../../components/Issues/Issues'
import { Footer } from '../../components/Layout/Footer'
import { Nav } from '../../components/Layout/Nav'

export const viewport = {
  themeColor: '#2f3136',
}
 

export const metadata = {
  title: 'Issues',
  description: "An interactive, modern Portfolio website showcasing the author's projects",
  author: 'ThatLukaszGuy',
  keywords: ['Portfolio', 'NextJS', 'Developer', 'Webdev', 'Fullstack'],
  icons: {
    icon:[{url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png'},{url: 'favicon/favicon-16x16.png',sizes: '16x16', type: 'image/png'}],
    other: [
      {rel: 'apple-touch-icon', url: 'favicon/apple-touch-icon.png', sizes: '180x180'},
      {rel: 'mask-icon', url: 'favicon/safari-pinned-tab.svg' ,color: '#5bbad5'}  ],
  
  },
  manifest: 'favicon/site.webmanifest'

}

export default function index() {
  return (
    <>

        <Nav />
        <Issues />  
        <Footer />
    </>
  )
}
