import React from 'react'
import { Footer } from '../../components/Layout/Footer'
import { Nav } from '../../components/Layout/Nav'
import { HeadConfig } from '../../components/Layout/HeadConfig'
import { All } from '../../components/Project/PortfolioPage/All'

export default function portfolio() {
  return (
    <>
      
      <HeadConfig title={'This Portfolio'} color={"#2f3136"}/>
      <Nav/>

      <All />
      <Footer />
    </>
  )
}
