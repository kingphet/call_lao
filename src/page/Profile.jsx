import React from 'react'
import NavUser from '../layout/NavUser'
import { FaExchangeAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import America_flag from '../../public/images/America_flag.webp'
import Laos_flag from '../../public/images/Laos_flag.png'
import Elon_musk from '../../public/images/Elon-Musk.webp'
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <NavUser />
            <div className="flex justify-center py-10">
                <div className="w-[60%] h-auto bg-[#b7c05813] rounded-3xl shadow-2xl pt-10">
                    <div className="flex flex-col items-center gap-8 text-[2rem]">
                        <img src={Elon_musk} alt="" className='w-52 h-52 rounded-full' />
                        <p>Name</p>
                    </div>
                    <div className="flex items-center justify-center gap-12 text-[1.4rem] pt-8">
                        <img src={America_flag} alt="" className='w-10 h-10 rounded-full' />
                        <p><FaExchangeAlt /></p>
                        <img src={Laos_flag} alt="" className='w-10 h-10 rounded-full' />
                    </div>
                    <div className="flex items-center py-40 px-10 text-[1.6rem] gap-2">
                        <p className='text-[#0F2484]'><FaStar /></p>
                        <p>4.5</p>
                    </div>
                    <div className="flex justify-center pb-10 gap-10">
                        <button className='text-[1.5rem] py-2 px-16 bg-white border-2 border-black rounded-3xl'>Translate</button>
                        <button className='text-[1.5rem] py-2 px-16 bg-white border-2 border-black rounded-3xl'>Chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
