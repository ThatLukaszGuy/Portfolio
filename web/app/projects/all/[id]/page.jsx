
import React from 'react';
import { HeadConfig } from '../../../../components/Layout/HeadConfig'
import { Nav } from '../../../../components/Layout/Nav'
import { Footer } from '../../../../components/Layout/Footer'
import  Display  from '../../../../components/Project/Display'
import { notFound } from 'next/navigation'

//            <HeadConfig title={data.name}  color={"#2f3136"}/>
export async function getProjectById(id) {
    try {
  
        const res = await fetch(`http://localhost:3000/api/projects/${id}`,
        {cache: 'no-store'})
  
        if (!res.ok) {
            notFound()
        }
  
        return res.json()
  
    } catch (e) {
        notFound()
    }
  }

export async function generateMetadata({params}) {
    const project = await getProjectById(params.id)
    return {
        title: project.project.name,
        themeColor: '#2f3136',
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
}



export default async function Page({ params }) {
    const project = await getProjectById(params.id)
    
    
    
    return (
        <>
            <Nav />
            <Display project={project.project}/>
            <Footer />
        </>
    )
}