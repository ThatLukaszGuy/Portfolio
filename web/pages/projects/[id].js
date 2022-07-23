import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { Nav } from '../../components/Layout/Nav'
import { Footer } from '../../components/Layout/Footer'
import { Display } from '../../components/Project/Display'
 

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/projects')
    const data = await res.json()

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
    const id = context.params.id
    const res = await fetch('http://localhost:3000/api/projects/' + id)
    const data = await res.json()

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