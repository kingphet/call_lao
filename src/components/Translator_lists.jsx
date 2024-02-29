import React from 'react'
import { FaExchangeAlt } from "react-icons/fa";
import America_flag from '../../public/images/America_flag.webp'
import Laos_flag from '../../public/images/Laos_flag.png'
import Elon_musk from '../../public/images/Elon-Musk.webp'
import { Link } from 'react-router-dom';

const data = [
  {
    profile_image: Elon_musk,
    Aemrica_flag: America_flag,
    Laos_flag: Laos_flag,
    icon: <FaExchangeAlt />,
    path: '/Profile'
  },
  {
    profile_image: Elon_musk,
    Aemrica_flag: America_flag,
    Laos_flag: Laos_flag,
    icon: <FaExchangeAlt />,
    path: '/Profile'
  },
  {
    profile_image: Elon_musk,
    Aemrica_flag: America_flag,
    Laos_flag: Laos_flag,
    icon: <FaExchangeAlt />,
    path: '/Profile'
  },
  {
    profile_image: Elon_musk,
    Aemrica_flag: America_flag,
    Laos_flag: Laos_flag,
    icon: <FaExchangeAlt />,
    path: '/Profile'
  },
  {
    profile_image: Elon_musk,
    Aemrica_flag: America_flag,
    Laos_flag: Laos_flag,
    icon: <FaExchangeAlt />,
    path: '/Profile'
  },
  {
    profile_image: Elon_musk,
    Aemrica_flag: America_flag,
    Laos_flag: Laos_flag,
    icon: <FaExchangeAlt />,
    path: '/Profile'
  },
]

function Translator_lists() {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-20 px-[20%] w-full h-full pt-14">
        {data.map((data) => (
          <Link to={data.path}>
            <div className="w-full h-80 bg-[#b7c05813] shadow-2xl rounded-2xl flex items-center pl-14">
              <div className="flex flex-col gap-6">
                <img src={data.profile_image} alt="" className='w-52 h-52 rounded-full' />
                <p className='text-center font-bold'>Name</p>
              </div>
              <div className="flex items-center justify-evenly w-[80%]">
                <img src={data.Aemrica_flag} alt="" className='w-14 h-14 rounded-full' />
                <p className='text-[2rem]'>{data.icon}</p>
                <img src={data.Laos_flag} alt="" className='w-14 h-14 rounded-full' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Translator_lists
