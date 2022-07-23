import React from 'react'
import Issues from '../../components/Issues/Issues'
import { Footer } from '../../components/Layout/Footer'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { Nav } from '../../components/Layout/Nav'
export default function index() {
  return (
    <>
        <HeadConfig title={'Issues'}/>
        <Nav />
        <Issues />  
        <Footer />
    </>
  )
}
