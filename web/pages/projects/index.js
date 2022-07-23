import React from 'react'
import { Footer } from '../../components/Layout/Footer'
import { Nav } from '../../components/Layout/Nav'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { Project } from '../../components/Projects/Project'





export async function getStaticProps() {
  const req = await fetch('http://localhost:3000/api/projects')
  const data = await req.json()

  return {
    props: {projectsProps : data}
  }

}




export default function projects({ projectsProps }) {
  


  return (
    <>

        <HeadConfig title={'Projects'}/>
        <Nav />
        <Project projectsProps={projectsProps}/>
        <Footer />

    </>
  )
}
