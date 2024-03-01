import React from 'react'
import Logo from '../../public/images/callLao_default_logo.png'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import NavUser from '../layout/NavUser'


function Home() {
    return (
        <>
        <Nav />
            <div className="flex justify-center">
                <div className="flex items-center justify-around w-full">
                    <div className="flex flex-col gap-16">
                        <div className="">
                            <p className='text-[#0F2484] text-[8rem] font-bold'>CallLao</p>
                            <p className='text-[#C3A356] text-[8rem] font-bold'>Translator</p>
                        </div>
                        <div className="flex gap-7">
                            <Link to="/SignIn">
                                <button className='bg-[#0F2484] text-white text-[1.5rem] py-2 px-28 rounded-3xl transition hover:bg-[#0323b5]'>Join Us</button>
                            </Link>
                            <Link to="/Login">
                                <button className='bg-[#0F2484] text-white text-[1.5rem] py-2 px-28 rounded-3xl transition hover:bg-[#0323b5]'>Login</button>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <img src={Logo} alt="" className='w-[45rem]'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
