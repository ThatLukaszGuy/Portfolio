import React from 'react'
import { Footer } from '../../components/Layout/Footer'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { Nav } from '../../components/Layout/Nav'
import StatLayout from '../../components/Projects/items/StatLayout'

export default function stats() {
  return (
    <>
        <HeadConfig title={'Stats'} color={"#36393f"}/>
        <Nav/>
        <StatLayout />
        <Footer />
    </>
    
    )
}
