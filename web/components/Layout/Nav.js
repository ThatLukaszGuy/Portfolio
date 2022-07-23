import React from 'react'
import Link from 'next/link'


export const Nav = () => {
  return (
    <div>
        <ul>
          <li>
            <a rel='noreferrer' href='https://github.com/ThatLukaszGuy' target={'_blank'} className='a fixed top-left sm:top-[30px]  l-git text-white hover:text-gray-200'>@ThatLukaszGuy</a>
          </li>
        </ul>
          
        
        <div className='nav'>
          <ul className=''>

            <li>
              <Link href={'/home'}>
                <a  className=' fixed hover:text-gray-200 top-right l2  right-[180px]  text-white'>Home</a> 
              </Link>
            </li>



            <li>

              <Link href={'/projects'}>
                <a  className=' fixed hover:text-gray-200 top-right l3 right-[120px] text-white'>Projects</a> 
              </Link>
            </li>
              
            <li>
              <Link href={'/contact'}>
                <a className=' fixed hover:text-gray-200 top-right l4 right-[60px] text-white' >Contact</a> 
              </Link>
            </li>


          </ul>

        </div>
    </div>
  )
}
