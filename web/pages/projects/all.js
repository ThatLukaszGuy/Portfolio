import React from 'react'
import { Footer } from '../../components/Layout/Footer'
import { Nav } from '../../components/Layout/Nav'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import DB from '../../utils/DB'
import Projects from '../../models/projectModel'
import { All } from '../../components/Projects/items/All'



export async function getServerSideProps() {
  await DB();
  const data = await Projects.find({}).select('-otherImages -description.reason -description.difficulties')

  return {
    props: {projectsProps : JSON.parse(JSON.stringify(data))}
  }

}

export default function all({ projectsProps }) {
  return (
    <>
      
      <HeadConfig title={'Projects'} color={"#36393f"}/>
      <Nav/>
      <All projectsProps={projectsProps}/>
      <Footer />
    </>
  )
}
