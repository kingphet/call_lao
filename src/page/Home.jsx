import React from 'react'
import Logo from '../../public/images/callLao_default_logo.png'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom'
import NavMobile from '../components/navMobile'


function Home() {
    return (
        <>
        <Nav />
            <div className="flex justify-center">
                <div className="flex items-center justify-around w-full px-8">
                    <div className="flex flex-col gap-16">
                        <div className="text-center text-[4rem] sm:text-[5.7rem] lg:text-[8rem] font-bold">
                            <p className='text-[#0F2484]'>CallLao</p>
                            <p className='text-[#C3A356]'>Translator</p>
                        </div>
                        <div className="flex flex-col gap-7 items-center lg:flex-row">
                            <Link to="/SignIn">
                                <button className='bg-[#0F2484] text-white text-[1.5rem] py-2 px-28 rounded-3xl transition hover:bg-[#0323b5]'>Join Us</button>
                            </Link>
                            <Link to="/Login">
                                <button className='bg-[#0F2484] text-white text-[1.5rem] py-2 px-28 rounded-3xl transition hover:bg-[#0323b5]'>Login</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src={Logo} alt="" className='w-[45rem]'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
