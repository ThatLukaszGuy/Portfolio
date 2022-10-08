import React,{useState} from 'react'
import Link from 'next/link'
import { Slide,useDisclosure } from '@chakra-ui/react'
import { HiOutlineMenu } from 'react-icons/hi'
import { useTransition,animated } from 'react-spring'

export const Nav = () => {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const { isOpen, onToggle } = useDisclosure()

  let mobileNav;
  let mobileOverlay;

  if(showMobileMenu) {
    mobileNav = 
    <div className='mobileNav z-50 mobileNavMain h-screen w-[80vw] bg-gray-900   top-[0px] fixed'>
      
      <div className='flex h-screen items-center space-y-[30px] mt-[35vh] flex-col '>
        <Link href={'/home'}>
          <a className='text-white z-50 hover:text-gray-200 pinkTS'>  Home</a>
        </Link>

        <Link href={'/projects'}>
          <a className='text-white z-50 hover:text-gray-200 pinkTS'>  Projects</a>
        </Link>

        <Link href={'/contact'}>
          <a className='text-white z-50 hover:text-gray-200 pinkTS'>  Contact</a>
        </Link>
      </div>
    
    </div>

    mobileOverlay =
    <div 
    onClick={() => setShowMobileMenu(false) }
    className='mobileNav custom-bg-overlay fixed top-0 w-screen h-screen z-50'>
    </div>
  }

  
  return (
    <div>
        <ul>
          <li>
            <a rel='noreferrer' href='https://github.com/ThatLukaszGuy' target={'_blank'} className='a z-50 fixed top-left sm:top-[30px]  l-git text-white hover:text-gray-200'>@ThatLukaszGuy</a>
          </li>
        </ul>
          
        
        <div className='nav'>
          <ul className=''>

            <li>
              <Link href={'/home'}>
                <a  className=' fixed z-50 hover:text-gray-200 top-right l2  right-[180px]  text-white'>Home</a> 
              </Link>
            </li>

            <li>

              <Link href={'/projects'}>
                <a  className=' fixed z-50 hover:text-gray-200 top-right l3 right-[120px] text-white'>Projects</a> 
              </Link>
            </li>
              
            <li>
              <Link href={'/contact'}>
                <a className=' fixed z-50 hover:text-gray-200 top-right l4 right-[60px] text-white' >Contact</a> 
              </Link>
            </li>


          </ul>

        </div>

      <div >
      
      
      <div 
      className="burger-menu nav-icon fixed hover:text-gray-200 "  
      onClick={() => setShowMobileMenu(!showMobileMenu) && onToggle}>
        <span className={showMobileMenu ? 'bar1-rot bar1' : 'bar1'} ></span>
        <span className={showMobileMenu ? 'bar2-rot bar2' : 'bar2'}></span>
        <span className={showMobileMenu ? 'bar3-rot bar3' : 'bar3'}></span>
      </div>
          

          
          {mobileOverlay}
          {mobileNav}

        </div>
    </div>
  )
}
