import React from 'react'
import {Nav} from '../../components/Layout/Nav'
import {Footer} from '../../components/Layout/Footer'
import {All} from '../../components/Project/PortfolioPage/All'
import { HeadConfig } from '../../components/Layout/HeadConfig'

export default function other() {
  return (
    <>
      <HeadConfig title={'Other'} color={"#2f3136"}/>
      <Nav />
      <All />
      <Footer />
    </>
  )
}
