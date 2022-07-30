import React from 'react';
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { Nav } from '../../components/Layout/Nav'
import { Footer } from '../../components/Layout/Footer'
import { Display } from '../../components/Project/Display'
import DB from '../../utils/DB'
import Projects from '../../models/projectModel'

export const getStaticPaths = async () => {
    await DB()
    const res = await Projects.find({})
    const data = await JSON.parse(JSON.stringify(res))

    const paths = data.map(project => {
        return {
           params: { id: project._id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    await DB()
    const id = context.params.id
    const res =  await Projects.findOne({ _id: id })
    const data = await JSON.parse(JSON.stringify(res))

    return {
        props: { project: data }
    }

}

const Details = ({ project }) => {



    return (
    <>
        <HeadConfig title={project.name}/>
        <Nav />
        <Display project={project}/>
        <Footer />
    </>
  )
}

export default Details