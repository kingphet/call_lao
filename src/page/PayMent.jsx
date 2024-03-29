import React from 'react'
import { CiDollar } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import America_flag from '../../public/images/America_flag.webp'
import Laos_flag from '../../public/images/Laos_flag.png'
import logo from '../../public/images/calLaos_logo_shadow.png'
import QrCode from '../../public/images/QR_code.png'
import BarCode from '../../public/images/Bar_code.png'
import BCEL_One from '../../public/images/BCEL_One_icon.png'
import LDB_icon from '../../public/images/LDB_icon.png'
import JDB_icon from '../../public/images/JDB_icon.png'
import { FaArrowRight } from "react-icons/fa6";

const data = [
  {
    icons: BCEL_One,
    name: 'BECL One',
  },
  {
    icons: LDB_icon,
    name: 'LDB Bank',
  },
  {
    icons: JDB_icon,
    name: 'JDB Bank',
  },
]

function PayMent() {
  return (
    <>
      <div className="w-full h-full bg-[#0F2484]">
        <div className="flex items-center justify-between py-6 px-8">
          <div className="text-white text-[2rem] lg:text-[3rem]">
            <p><IoArrowBack /></p>
          </div>
          <div className="text-white font-bold text-[1.5rem] tracking-wider lg:text-[2.5rem]">
            <p>Payment</p>
          </div>
          <div className="text-[#FBBC05] p-0.2 border-2 lg:border-4 border-[#FBBC05] rounded-full text-[1.5rem] lg:text-[3.5rem] shadow-[#00000044] shadow-md">
            <p><CiDollar /></p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white text-5xl font-bold">
          <img src={logo} alt="" className='w-[30%] lg:w-[20%]' />
          <p className='hidden lg:block'>CalLaos Translator</p>
        </div>
        <div className="flex justify-center lg:py-14">
          <div className="h-full w-full lg:w-[70%] bg-white rounded-[3rem] lg:rounded-[6.3rem]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-32 py-10 pl-14">
              <div className="flex items-center gap-4">
                <img src={Laos_flag} alt="" className='w-7 h-7 lg:w-12 lg:h-12 rounded-full' />
                <button className='bg-[#D9D9D9] py-1 px-12 lg:py-2 lg:px-14 rounded-full lg:rounded-2xl font-bold lg:text-xl'>KIP</button>
              </div>
              <div className="flex items-center gap-4">
                <img src={America_flag} alt="" className='w-7 h-7 lg:w-12 lg:h-12 rounded-full' />
                <button className='bg-[#D9D9D9] py-1 px-12 lg:py-2 lg:px-14 rounded-full lg:rounded-2xl font-bold lg:text-xl'>USD</button>
              </div>
            </div>
            <div className="flex justify-center py-10">
              <div className="flex flex-col items-center gap-7 ">
                <img src={QrCode} alt="" className='lg:w-full w-40'/>
                <img src={BarCode} alt="" className='lg:w-full w-48'/>
                <p className=' lg:text-2xl'>+628749744435</p>
              </div>
            </div>
            <div className="text-[#0000008f] text-xl pl-10 lg:text-2xl lg:pl-28">
              <p>Other Payment</p>
            </div>
            <div className="flex flex-col pl-16 lg:pl-36 py-5 gap-5">
              {data.map((data) => (
                <div className="flex items-center gap-5 lg:text-xl text-[#0000008d]">
                  <img src={data.icons} alt="" className='w-8 lg:w-12' />
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#C3A356] rounded-tl-[3rem] rounded-tr-[3rem] lg:rounded-full flex items-center justify-around py-7 lg:py-14">
              <div className="bg-white px-8 py-4 lg:px-20 lg:py-7 text-[#0F2484] font-bold text-xl lg:text-3xl flex items-center gap-8 lg:gap-10 rounded-full shadow-[#00000085] shadow-lg cursor-pointer">
                <p>Pay</p>
                <p><FaArrowRight/></p>
              </div>
              <div className="text-white font-bold flex flex-col items-end">
                <p className='text-sm lg:text-3xl'>Totel</p>
                <p className='text-xl lg:text-4xl'>500$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayMent
