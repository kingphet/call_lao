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
      <div className="lg:grid grid-cols-2 gap-y-20 gap-x-20 px-[10%] lg:px-[20%] w-full h-full pt-14">
        {data.map((data) => (
          <Link to={data.path}>
            <div className="w-full lg:h-80 bg-[#b7c05813] shadow-2xl rounded-2xl flex pl-14 items-center md:items-center sm:flex-row lg:flex-col lg:items-center py-8 sm:pl-14 lg:pl-0">
              <div className="flex flex-col gap-6">
                <img src={data.profile_image} alt="" className='w-20 h-20 lg:w-32 lg:h-32 rounded-full' />
                <p className='text-center font-bold'>Name</p>
              </div>
              <div className="flex items-center justify-evenly w-[80%] lg:pt-10">
                <img src={data.Aemrica_flag} alt="" className='w-8 h-8 rounded-full' />
                <p className='lg:text-[2rem]'>{data.icon}</p>
                <img src={data.Laos_flag} alt="" className='w-8 h-8 rounded-full' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Translator_lists
