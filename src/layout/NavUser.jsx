import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import Logo from '../../public/images/callLao_logo_stoke.png'
import { MdHomeFilled } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

// const [MenuOpen, setMenuOpen] = useState(false);

// const sideMunu = () => {
//   setMenuOpen(!MenuOpen)
// }

function NavUser() {
  return (
    <>
      <div className="bg-[#0F2484] grid-cols-2 p-6 grid lg:grid-cols-6">
        <div className="text-white text-4xl cursor-pointer flex items-center">
          <FaBars />
        </div>
        <div className="lg:flex items-center justify-around col-span-4 hidden ">
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
        <div className="flex items-center gap-5 justify-end">
          <img src={Logo} alt="" className='w-14' />
          <p className='text-white text-[1.5rem] border-l-2 border-white pl-5 '>CalLaos Translator</p>
        </div>
        {/* {MenuOpen ? (
          <div className="lg:hidden flex flex-col items-center">
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
        ) : null} */}
      </div>
    </>
  )
}

export default NavUser
