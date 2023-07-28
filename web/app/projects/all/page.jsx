import React from 'react'
import { Footer } from '../../../components/Layout/Footer'
import { Nav } from '../../../components/Layout/Nav'
import { HeadConfig } from '../../../components/Layout/HeadConfig'
import { All } from '../../../components/Projects/items/All'

export async function getProjects() {
  const data = await fetch("http://localhost:3000/api/projects")
  return data.json()
}

export const metadata = {
  title: 'Projects',
  themeColor: '#36393f',
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

export default async function all() {
    const data = await getProjects()
   
    return (
    <>
      
      <Nav/>
      <All projectsProps={data.projects}/>
      <Footer />
    </>
  )
}