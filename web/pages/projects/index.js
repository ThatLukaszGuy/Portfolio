import React from 'react'
import { Footer } from '../../components/Layout/Footer'
import { Nav } from '../../components/Layout/Nav'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { Project } from '../../components/Projects/Project'
import DB from '../../utils/DB'
import Projects from '../../models/projectModel'



export async function getServerSideProps() {
  await DB();
  const data = await Projects.find({}).select('-otherImages -description.reason -description.difficulties')

  return {
    props: {projectsProps : JSON.parse(JSON.stringify(data))}
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
