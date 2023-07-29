import React from 'react'
import { Footer } from '../../../components/Layout/Footer'
import { Nav } from '../../../components/Layout/Nav'
import DB from '../../../utils/DB'
import { All } from '../../../components/Projects/items/All'
import Projects from '../../../models/projectModel'

export async function getProjects() {
  await DB()
  const projects = await Projects.find({}).select('-otherImages -description.reason -description.difficulties')
  return  JSON.parse(JSON.stringify(projects)) 
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
      <All projectsProps={data}/>
      <Footer />
    </>
  )
}