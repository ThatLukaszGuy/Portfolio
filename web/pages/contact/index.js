import React from 'react'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/Layout/Footer'
import { Nav } from '../../components/Layout/Nav'
import { HeadConfig } from '../../components/Layout/HeadConfig'


export default function contact() {
  return (
    <>
        <HeadConfig title={'Contact'} color={"#2f3136"}/>
        <Nav />
        <Contact />
        <Footer />
    </>
  )
}
