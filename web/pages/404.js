import React from 'react'
import { Footer } from '../components/Layout/Footer'
import { Nav } from '../components/Layout/Nav'
import { NotFound } from '../components/Layout/NotFound'
import { HeadConfig } from "../components/Layout/HeadConfig";

const index = () => {
  return (
    <>
        <HeadConfig title={'404'}/>
        <Nav />
        <NotFound/>
        <Footer />
    </>
  )
}

export default index
