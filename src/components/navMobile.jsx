import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom'

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

function NavMobile() {
  return (
    <div>
      <div className="lg:flex flex-col h-screen w-[15%] items-start pt-10 gap-16 col-span-3 hidden bg-[#0F2484] pl-10">
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
    </div>
  )
}

export default NavMobile
