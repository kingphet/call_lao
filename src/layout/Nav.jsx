import React from 'react'
import { FaBars } from "react-icons/fa";
import Logo from '../../public/images/callLao_logo_stoke.png'

function Nav() {
  return (
    <>
      <div className="bg-[#0F2484] p-6 flex justify-between items-center">
            <div className="text-white text-4xl cursor-pointer">
              <FaBars/>
            </div>
            <div className="flex items-center gap-5 ">
              <img src={Logo} alt="" className='w-10 sm:w-14 md:w-16 lg:w-20'/>
              <p className='text-white text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] border-l-2 border-white pl-5 '>CalLaos Translator</p>
            </div>
      </div>
    </>
  )
}

export default Nav
