import React from 'react'
import { FullCanvas } from './sceneComponents/FullCanvas'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Nav } from '../Layout/Nav'
export const Landing = () => {



  return (
    <>
        <div className='bgMain' ></div>


          <h1 className='blueTS absolute top-[120px] left-[60px] z-10 hover:text-gray-100  font-black text-white text-xs text-left landing-header sm:text-sm'>
            Welcome <span style={{ fontSize: '0.4em' }} className=''>to my</span>
            <br />
            <span >Portfolio</span>
          </h1>

        <FullCanvas />
        <Nav />
        <p className="blueTS left-[60px] top-[90vh] z-10 absolute inline text-white landing-p" >Scroll down<AiOutlineArrowDown className='left-[80px] bottom-[2px] absolute'/></p>

    </>
  )
}
