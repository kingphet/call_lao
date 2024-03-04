import React from 'react'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import Logo from '../../public/images/callLao_logo_stoke.png'
import { MdHomeFilled } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const data = [
  {
    icon: <MdHomeFilled />,
    info: 'Home',
    path: '/Translator_lists_page'
  },
  {
    icon: <IoMdChatboxes />,
    info: 'Message'
  },
  {
    icon: <LuHistory />,
    info: 'History'
  },
  {
    icon: <FaRegStar />,
    info: 'Favorite'
  },
]


function NavUser() {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [MenuClose, setMenuClose] = useState(false)
  // const [ChangeIcon, setChangeIcon] = useState(false)

  // const sideMunu = () => {
  //   setMenuOpen(!MenuOpen)
  // }

  // const Changeit = () => {
  //   ChangeIcon(!setChangeIcon)
  // }

  return (
    <>
      <div className={` ${MenuOpen ? "flex" : "hidden"} ${MenuClose ? "hidden" : null} flex-col h-screen w-64 z-40 items-start pt-10 gap-16 col-span-3 bg-[#0F2484] pl-10 fixed`}>
        <div className="text-white text-[2rem]" onClick={() => setMenuClose(!MenuClose)}>
          <p><IoArrowBack /></p>
        </div>
        {data.map((data) => (
          <Link to={data.path}>
            <div className="text-white flex items-center gap-5 hover:flex">
              <p className='text-[2rem]'>{data.icon}</p>
              <p className=' tracking-wider'>{data.info}</p>
              <div className="w-full h-1 bg-white rounded-2xl hidden"></div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-[#0F2484] grid-cols-2 py-4 px-6 grid lg:grid-cols-5 sticky top-0">
        <div className="text-white text-4xl flex lg:hidden items-center">
          <p onClick={() => setMenuOpen(!MenuOpen)} className=' cursor-pointer'><FaBars /></p>
        </div>
        <div className="lg:flex items-center justify-around col-span-3 hidden ">
          {data.map((data) => (
            <Link to={data.path}>
              <div className="text-white flex flex-col items-center hover:flex">
                <p className='text-[2rem]'>{data.icon}</p>
                <p className=''>{data.info}</p>
                <div className="w-full h-1 bg-white rounded-2xl hidden"></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5 justify-end lg:col-span-2">
          <img src={Logo} alt="" className='w-14' />
          <p className='text-white text-[1.5rem] border-l-2 border-white pl-5 '>CalLaos Translator</p>
        </div>
      </div>
    </>
  )
}

export default NavUser
