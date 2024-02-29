import React from 'react'
import NavUser from '../layout/NavUser'
import Search from '../components/Search'
import { FaExchangeAlt } from "react-icons/fa";
import America_flag from '../../public/images/America_flag.webp'
import Laos_flag from '../../public/images/Laos_flag.png'
import Translator_lists from '../components/Translator_lists';

const select_style = 
[
  'w-[25%] h-14 rounded-3xl bg-[#b7c05813] flex items-center justify-center gap-4 shadow-lg',
  'text-[1.5rem] bg-[#b7c05800]',
  'w-8 h-8 rounded-full'
]

function Translator_lists_page() {
  return (
    <>
      <NavUser />
      <Search />
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-evenly w-full">
          <div className={select_style[0]}>
            <img src={America_flag} alt="" className={select_style[2]} />
            <select name="" id="" className={select_style[1]}>
              <option value="">English</option>
            </select>
          </div>
          <div className="">
            <p className='text-[2rem]'><FaExchangeAlt /></p>
          </div>
          <div className={select_style[0]}>
            <img src={Laos_flag} alt="" className={select_style[2]}/>
            <select name="" id="" className={select_style[1]}>
              <option value="">Laos</option>
            </select>
          </div>
        </div>
      </div>
      <Translator_lists/>
    </>
  )
}

export default Translator_lists_page
